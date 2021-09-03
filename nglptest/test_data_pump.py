import json
import requests
import time
import random
import click
import datetime
from nglp.models import events

# instructions for usage within pump_data() function which starts line 94

EVENTS_SELECTOR = {
    "request": events.RequestEvent,
    "investigation": events.InvestigationEvent,
    "join": events.JoinEvent,
    "leave": events.LeaveEvent,
    "export": events.ExportEvent,
    "workflow_transition": events.WorkflowTransitionEvent,
    "core": events.CoreEvent,
}

ALLOWED_PARAM_VALUES = {
    "event_type": EVENTS_SELECTOR.keys(),
    "data_fill": ["minimal", "full", "mix"],
}


@click.command()
@click.option(
    "-f",
    "--file",
    required=False,
    help="Filename to save the json generated test data, and from which to pump data."
    "If no filename is provided, the default filename for generation has the pattern "
    "testdata-{event_type}-{number_of_records}-{dt} or {event_type}-{number_of_records}-with-errors-{dt}.json",
)
@click.option(
    "-g",
    "--generate_data",
    required=True,
    type=click.BOOL,
    help="Whether or not test data needs to be generated.",
)
@click.option(
    "-e",
    "--event_type",
    required=True,
    type=click.Choice(ALLOWED_PARAM_VALUES["event_type"], case_sensitive=False),
    help="The type of event for which data needs to be generated.",
)
@click.option(
    "-n",
    "--number-of-records",
    required=True,
    type=int,
    help="Number of test records to generate.",
)
@click.option(
    "-c",
    "--core",
    "is_core",
    type=bool,
    is_flag=True,
    help="generate the core event model",
)
@click.option(
    "-r",
    "--data-fill",
    default="mix",
    show_default=True,
    type=click.Choice(ALLOWED_PARAM_VALUES["data_fill"], case_sensitive=False),
    help="Amount of data required in each in record."
    "Minimal will generate just the required fields in the model,"
    "Full will generate data in all the fields in the model and"
    "Mix will generate a mix of full and minimal records.",
)
@click.option(
    "-x",
    "--add-records-with-error",
    type=click.BOOL,
    default=False,
    show_default=True,
    help="Include records containing errors. "
    "These error records will be in addition to the required number of records.",
)
@click.option(
    "-u",
    "--error-if-model-unsupported",
    type=click.BOOL,
    default=True,
    show_default=True,
    help="Throw errors if an event model is not supported by the data generator.",
)
@click.option(
    "-a",
    "--api",
    type=str,
    default="http://localhost:8000/api",
    help="URL of the API to send data to"
)
@click.option(
    "-s",
    "--shortest",
    type=float,
    default=1,
    help="Shortest amount of time to wait between API requests"
)
@click.option(
    "-l",
    "--longest",
    type=float,
    default=10,
    help="Longest amount of time to wait between API requests"
)
def pump_data(
    event_type,
    number_of_records,
    file=None,
    generate_data=True,
    is_core=False,
    data_fill="mix",
    add_records_with_error=False,
    error_if_model_unsupported=True,
    api="http://localhost:8000/api",
    shortest=1,
    longest=10
):
    """
    The pump_data() function is called from the command line.
    the file and generate_data options are required. file should be the name of the file to be pumped, and generate_data
    toggles whether the pump will generate the file (with the name specified).
    event_type, number_of_records, is_core, data_fill, add_records_with_error, and _error_if_model_unsupported should
    only be used when generate_data is True.
    Example call for non-generated data:
        python test/test_data_pump.py -f "api_test.json" -g False
    Pumps data from a preexisting file called "api_test.json"
    Example call for generated data:
        python test/test_data_pump.py -f "api_test.json" -g True -e "request" -n 200
    First will generate test 200 request events, in a file called "api_test.json", then pumps the data to the event api

    The api is local, but only needs to be changed on line 146 if this is used on a deployed version.
    """

    # I'm not sure why this delayed import is required, but if you put it at the top of the
    # file with the other imports, you get an ImportError on execution.  I can't see anything
    # like a circular dependency
    # from test.generate_test_data import DataGenerator
    from nglptest.generate_test_data import DataGenerator

    # unpack JSON doc
    if generate_data == True:
        dg = DataGenerator(
            event_type,
            number_of_records,
            is_core,
            data_fill,
            add_records_with_error,
            error_if_model_unsupported,
            filename=file,
        )

        if event_type == "workflow_transition":
            dg.write_workflow_data(join_events=False)
        else:
            dg.write_usage_data()

        file = dg.filename

    with open(file, "r") as f:
        unpacked_file = json.loads(f.read())

    print("Starting data pump")
    start = datetime.datetime.now()
    print(f"Start time: {start}")
    count = 0
    pulse = number_of_records // 100 if number_of_records > 100 else 1
    for entry in unpacked_file:
        resp = requests.post(
            url=api, data=json.dumps(entry), verify=False
        )
        if resp.status_code != 201:
            print(resp.text)
        time.sleep(random.uniform(shortest, longest))
        count += 1
        print(".", end="", flush=True) if count % pulse == 0 else ""
    end = datetime.datetime.now()
    print()
    print("Data pumping completed.")
    print(f"Count: {count}")
    print(f"End time: {end}")


if __name__ == "__main__":
    pump_data()
