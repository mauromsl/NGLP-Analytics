from nglp.pipeline.pipeline import PipelineProcessor
from nglp.models.events import PipelineEvent
from nglp.pipeline import regex

ID_MAPPING = {
    "DOI": regex.DOI_COMPILED,
    "Handle": regex.HANDLE_COMPILED,
    "ISSN": regex.ISSN_COMPILED,
    "URL": regex.HTTP_URL_COMPILED,
}


class Normalise(PipelineProcessor):
    def run(self, event:PipelineEvent) -> PipelineEvent:
        """
        Take an identifier and turn it into a form that is suitable for comparison with other normalised identifiers.

        The function will do the following:
        * strip leading and tailing whitespace
        * validate the identifier as realistic and in the format of a DOI, URL, ISSN, or handle.
        return event
        """

        if not event.object_ids:
            # Would return no normalised anything
            return event

        id_list = []

        for objid in event.object_ids:
            oid = objid.strip()
            if regex.DOI_COMPILED.search(oid) is not None:
                # then the object_id matches a DOI
                normalised_id = self.normalise(_type="DOI", objid=oid)
                id_list.append(normalised_id)

            elif regex.HANDLE_COMPILED.search(oid) is not None:
                # then the object_id matches a handle
                normalised_id = self.normalise(_type="Handle", objid=oid)
                id_list.append(normalised_id)

            elif regex.ISSN_COMPILED.search(oid) is not None:
                # then the object_id matches an ISSN
                normalised_id = self.normalise(_type="ISSN", objid=oid)
                id_list.append(normalised_id)

            elif regex.HTTP_URL_COMPILED.search(oid) is not None:
                # the object_id matches an HTTP URL
                normalised_id = self.normalise(_type="URL", objid=oid)
                id_list.append(normalised_id)

            else:
                id_list.append(oid)

        event.object_ids = id_list
        return event

        # for each, depending on type, return an edited version
    def normalise(self, _type, objid):
        # object_id matches a regex string
        # object_id should be normalised and returned.
        norm = regex.group_match(ID_MAPPING[_type], objid, "id")
        if norm is None:
            return objid
        else:
            norm_id = norm

        return norm_id
