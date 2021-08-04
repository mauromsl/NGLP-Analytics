from copy import deepcopy
from nglp.lib.seamless import Construct, SeamlessException


class OpenAPISupport(object):

    DEFAULT_OPENAPI_TRANS = {
        # The default translation from our coerce to openapi is {"type": "string"}
        # if there is no matching entry in the trans dict here.
        "unicode": {"type": "string"},
        "utcdatetime": {"type": "string", "format": "date-time"},
        "integer": {"type": "integer"},
        "bool": {"type": "boolean"},
        "float": {"type": "float"},
        "isolang": {"type": "string", "format": "isolang"},
        "url": {"type": "string", "format": "url"},
        "isolang_2letter": {"type": "string", "format": "isolang-alpha2"},
        "country_code": {"type": "string", "format": "country_code"},
        "currency_code": {"type": "string", "format": "currency_code"},
        "license": {"type": "string", "format": "license_type"},
        "persistent_identifier_scheme": {"type": "string", "format": "persistent_identifier_scheme"},
        "format": {"type": "string", "format": "format"},
        "deposit_policy": {"type": "string", "format": "deposit_policy"},
    }

    def __init__(self, openapi_trans=None):
        self._openapi_trans = openapi_trans if openapi_trans is not None else deepcopy(self.DEFAULT_OPENAPI_TRANS)

    # def struct_to_swag(self, struct, schema_title='', **kwargs):
    #     if not struct:
    #         if not self._struct:
    #             raise DataSchemaException("No struct to translate to Swagger.")
    #         struct = self._struct
    #
    #
    #     swag = {
    #         "properties": self.__struct_to_swag_properties(struct=struct, **kwargs)
    #     }
    #     required = deepcopy(struct.get('required', []))
    #     if len(required) > 0:
    #         swag["required"] = required
    #
    #     if schema_title:
    #         swag['title'] = schema_title
    #
    #     return swag

    def request_body_section(self, struct):
        return {
            "requestBody" : {
                "content" : {
                    "application/json" : {
                        "schema" : self.struct_to_jsonschema(struct)
                    }
                }
            }
        }

    def struct_to_jsonschema(self, struct, path=''):
        '''A recursive function to translate the Seamless Struct to JSONSchema'''
        if not (isinstance(struct, dict) or isinstance(struct, Construct)):
            raise SeamlessException("The struct whose properties we're translating to JSONSchema should always be a dict-like object.")

        swag_properties = {}

        # convert simple fields
        for simple_field, instructions in iter(struct.get('fields', {}).items()):
            # no point adding to the path here, it's not gonna recurse any further from this field
            swag_properties[simple_field] = self._openapi_trans.get(instructions['coerce'], {"type": "string"})

        # convert objects
        for obj in struct.get('objects', []):
            newpath = obj if not path else path + '.' + obj
            instructions = struct.get('structs', {}).get(obj, {})

            swag_properties[obj] = {}
            swag_properties[obj]['title'] = newpath
            swag_properties[obj]['type'] = 'object'
            swag_properties[obj]['properties'] = self.struct_to_jsonschema(struct=instructions, path=newpath)  # recursive call, process sub-struct(s)
            required = deepcopy(instructions.get('required', []))
            if len(required) > 0:
                swag_properties[obj]['required'] = required

        # convert lists
        for l, instructions in iter(struct.get('lists', {}).items()):
            newpath = l if not path else path + '.' + l

            swag_properties[l] = {}
            swag_properties[l]['type'] = 'array'
            swag_properties[l]['items'] = {}
            if instructions['contains'] == 'field':
                swag_properties[l]['items'] = self._openapi_trans.get(instructions['coerce'], {"type": "string"})
            elif instructions['contains'] == 'object':
                swag_properties[l]['items']['type'] = 'object'
                swag_properties[l]['items']['title'] = newpath
                swag_properties[l]['items']['properties'] = self.struct_to_jsonschema(struct=struct.get('structs', {}).get(l, {}), path=newpath)  # recursive call, process sub-struct(s)

                required = deepcopy(struct.get('structs', {}).get(l, {}).get('required', []))
                if len(required) > 0:
                    swag_properties[l]['items']['required'] = required
            else:
                raise SeamlessException("Instructions for list {x} unclear. Conversion to JSONSchema only supports lists containing \"field\" and \"object\" items. Found: {y}".format(x=newpath, y=instructions['contains']))

        return {"properties" : swag_properties}
