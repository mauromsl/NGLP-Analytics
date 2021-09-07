from nglp.pipeline.pipeline import PipelineProcessor, UnacceptableEvent
from nglp.models.events import PipelineEvent
from nglp.config import settings
import regex


class Normalise(PipelineProcessor):
    def run(self, event:PipelineEvent) -> PipelineEvent:
        """
        Take an identifier and turn it into a form that is suitable for comparison with other normalised identifiers.

        The function will do the following:
        * strip leading and tailing whitespace
        * validate the identifier as realistic and in the format of a DOI, URL, ISSN, or handle.
        return event
        """

        if not event:
            # will return None
            return event
        if not event.object_id:
            # Would return none
            return  event

        for id in event.object_id:
            if regex.DOI.search(id) is not None:
                # then the object_id matches a DOI
                # normalise the doi
                # set event.object_id as normalised DOI
                # return event
                normalised_id = normalise(type="doi", id=id)
                event.object_id = normalised_id


            elif regex.HANDLE.search(id) is not None:
                # then the object_id matches a handle
                normalised_id = normalise(type="handle", id=id)
                event.object_id = normalised_id

            elif regex.ISSN.search(id) is not None:
                # then the object_id matches an ISSN
                normalised_id = normalise(type="issn", id=id)
                event.object_id = normalised_id
            elif regex.HTTP_URL.search(id) is not None:
                # the object_id matches an HTTP URL
                normalised_id = normalise(type="url", id=id)
                event.object_id = normalised_id
        return event

        # for each, depending on type, return an edited version
    def normalise(self, type, id):
        # object_id matches a doi
        # object id should be normalised and returned.
        norm_id = None
        if type == "doi":
            norm = regex.group_match(regex.DOI_COMPILED, id, "id")
            if norm is None:
                raise ValueError(f"Could not extract a normalised DOI from {id}")
            else:
                norm_id = norm
        elif type == "handle":
            norm = regex.group_match(regex.DOI_COMPILED, id, "id")
            if norm is None:
                raise ValueError(f"Could not extract a normalised Handle from {id}")
            else:
                norm_id = norm
        elif type == "issn":
            norm = regex.group_match(regex.ISSN_COMPILED, id, "id")
            if norm is None:
                raise ValueError(f"Could not extract a normalised ISSN from {id}")
            else:
                norm_id = norm
        elif type == "url":
            norm = regex.group_match(regex.HTTP_URL_COMPILED, id, "id")
            if norm is None:
                raise ValueError(f"Could not extract a normalised URL from {id}")
            else:
                norm_id = norm
        return norm_id
