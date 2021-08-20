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

        if regex.DOI.search(event.object_id) is not None:
            # then the object_id matches a DOI
            # normalise the doi
            # set event.object_id as normalised DOI
            # return event
        elif regex.HANDLE.search(event.object_id) is not None:
            # then the object_id matches a handle
        elif regex.ISSN.search(event.object_id) is not None:
            # then the object_id matches an ISSN
        elif regex.HTTP_URL.search(event.object_id) is not None:
            # the object_id matches an HTTP URL

        # determine if object_id is doi, url, issn or handle by comparing to regex

        # for each, depending on type, return an edited version

        # if that is not possible, return an exception