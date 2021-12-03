import json
import click

from datetime import datetime

from nglp.models.reporting_context import ReportingContextFactory, ReportingContextObject


def prepare_record(record, source_id):
    t = record.get("type")
    klazz = ReportingContextFactory.get(t)
    inst = klazz(record)
    inst.source_id = source_id
    return inst.raw


@click.command()
@click.option('-f', '--file',
              required=True,
              help='The file to import',
              )
@click.option('-s', '--source',
              required=True,
              help='The id of the source the file comes from',
              )
@click.option('-b', '--batch',
              required=True,
              help='The batch size to import into ES',
              )
def import_file(filepath: str, source_id: str, batch_size: int=1000):
    now = datetime.utcnow()
    with open(filepath) as f:
        batch = []
        for line in f:
            record = json.loads(line)
            data = prepare_record(record, source_id)
            batch.append(data)

            if len(batch) > batch_size:
                ReportingContextObject.bulk(batch)
                batch = []

        if len(batch) > 0:
            ReportingContextObject.bulk(batch)

    q = OldSourceDataQuery(source_id, now)
    ReportingContextObject.delete_by_query(q.query())


class OldSourceDataQuery:
    def __init__(self, source_id, cut_off_date):
        self._source_id = source_id
        self._cut_off_date = cut_off_date

    def query(self):
        return {
            "query" : {
                "bool" : {
                    "must" : [
                        {"source_id.exact" : self._source_id},
                        {"range" : {"created_date" : {"lt" : datetime.strftime(self._cut_off_date, "%Y-%m-%dT%H:%M:%S.%fZ")}}}
                    ]
                }
            }
        }


if __name__ == "__main__":
    import_file()