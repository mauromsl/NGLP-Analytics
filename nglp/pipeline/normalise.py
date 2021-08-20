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
            return event
        if not event.object_id:
            return  event

        for id in event.object_id:
            if regex.DOI.search(id) is not None:
                # then the object_id matches a DOI
                # normalise the doi
                # set event.object_id as normalised DOI
                # return event
                normalised_id = id.


            elif regex.HANDLE.search(id) is not None:
                # then the object_id matches a handle
                pass

            elif regex.ISSN.search(id) is not None:
                # then the object_id matches an ISSN
                pass

            elif regex.HTTP_URL.search(id) is not None:
                # the object_id matches an HTTP URL
                pass
        # determine if object_id is doi, url, issn or handle by comparing to regex

        # for each, depending on type, return an edited version
    def normalise_doi(self, doi):
        # object_id matches a doi
        # object id should be normalised and returned.
        norm = regex.group_match(regex.DOI_COMPILED, doi, "object_id")
        if norm is None:
            raise ValueError(f"Could not extract a normalised DOI from {doi}")
        return norm

        # if that is not possible, return an exception