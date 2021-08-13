import geoip2.database
from geoip2.errors import AddressNotFoundError

from nglp.pipeline.pipeline import PipelineProcessor
from nglp.models.events import PipelineEvent
from nglp.config import settings


class Geolocate(PipelineProcessor):
    def __init__(self):
        self.reader = None
        if settings.geo_database is not None:
            self.reader = geoip2.database.Reader(settings.geo_database)

    def run(self, event: PipelineEvent) -> PipelineEvent:
        if not self.reader:
            return event

        if not event.ip:
            return event

        try:
            response = self.reader.city(event.ip)
        except AddressNotFoundError:
            return event

        event.city = response.subdivisions.most_specific.name
        event.country = response.country.iso_code
        event.lat_lon = (response.location.latitude, response.location.longitude)
        return event