import click
import json

from nglp.dao import CONNECTION
from nglp.models.events import CoreEvent
from nglp.initialise import initialise

BATCH_SIZE = 100


@click.command()
@click.option('-i', '--input',
              required=True,
              help='The input file containing the test data.',
              )
# This is a bit hacky, but I wanted to be able to reuse this quickly to import a line-by-line
# log file of json objects into the index
@click.option("-f", "--format", default="json", type=click.Choice(["json", "text"]))
def load_test_data(input, format="json"):
    # make sure the app is initialised
    initialise()

    # import the test data
    with open(input, "r", encoding="utf-8") as f:
        if format == "json":
            data = json.loads(f.read())
        else:
            data = f
        batch = []
        for d in data:
            batch.append(json.dumps({"create" : {"_index" : CoreEvent.index_name()}}))
            if format == "json":
                entry = json.dumps(d)
            else:
                entry = d
            batch.append(entry)
            if len(batch) > BATCH_SIZE:
                CONNECTION.bulk("\n".join(batch))
                batch = []
        if len(batch) > 0:
            CONNECTION.bulk("\n".join(batch))


if __name__ == '__main__':
    load_test_data()