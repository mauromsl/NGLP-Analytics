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
def load_test_data(input):
    # make sure the app is initialised
    initialise()

    # import the test data
    with open(input, "r", encoding="utf-8") as f:
        data = json.loads(f.read())
        batch = []
        for d in data:
            batch.append(json.dumps({"create" : {"_index" : CoreEvent.index_name()}}))
            batch.append(json.dumps(d))
            if len(batch) > BATCH_SIZE:
                CONNECTION.bulk("\n".join(batch))
                batch = []
        if len(batch) > 0:
            CONNECTION.bulk("\n".join(batch))


if __name__ == '__main__':
    load_test_data()