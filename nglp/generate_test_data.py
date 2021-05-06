import random
import json
import datetime
from faker import Faker
from nglp.models import events
from nglp.lib import data_dictionaries

class DataGenerator:
    """
    used to generate data for the event models
    Usage:
    from nglp.generate_test_data import DataGenerator
    dg = DataGenerator('request', 1000)
    dg.write_data()
    """
    EVENTS_SELECTOR = {
        'request': events.RequestEvent,
        'investigation': events.InvestigationEvent,
        'join': events.JoinEvent,
        'leave': events.LeaveEvent,
        'export': events.ExportEvent,
        'workflow_transition': events.WorkflowTransitionEvent,
    }

    ALLOWED_PARAM_VALUES = {
        'event_type': EVENTS_SELECTOR.keys(),
        'type_of_record': ['minimal', 'full', 'mix'],
    }

    def __init__(self, event_type, number_of_records, type_of_record='mix', add_records_with_error=False,
                 error_if_model_unsupported=True, filename=None):
        self.event_type = event_type
        self.number_of_records = number_of_records
        self.type_of_record = type_of_record
        self.add_records_with_error = add_records_with_error
        self.filename = filename
        self.error_if_model_unsupported = error_if_model_unsupported
        self.validate_params()
        self.set_filename()
        self.model = self.EVENTS_SELECTOR.get(self.event_type)()
        self.validate_model()
        self.fake = Faker()

    def validate_params(self):
        if self.event_type not in self.EVENTS_SELECTOR.keys():
            raise ValueError(f"'event_type' should be one of {self.ALLOWED_PARAM_VALUES['event_type']}")
        if not isinstance(self.number_of_records, int):
            raise ValueError(f"'number_of_records' should be an integer")
        if self.type_of_record not in self.ALLOWED_PARAM_VALUES['type_of_record']:
            raise ValueError(f"'type_of_record' should be one of {self.ALLOWED_PARAM_VALUES['type_of_record']}")

    def validate_model(self):
        if len(self.model.__seamless_struct__.objects) > 0 and self.error_if_model_unsupported:
            raise NotImplementedError(f"The data model for '{self.event_type}' contains objects. This is not supported")

    def set_filename(self):
        if self.filename:
            return
        with_errors = 'with_errors' if self.add_records_with_error else ''
        dt = '{date:%Y-%m-%d_%H:%M:%S}'.format(date=datetime.datetime.now())
        self.filename = f"{self.event_type}-{self.number_of_records}-{with_errors}-{dt}.json"

    def get_fake_data(self, data_type, single=True, allowed_values=None):
        length = 1
        if not single:
            max_len = 11
            length = max_len - random.choices(range(max_len), weights=range(max_len), k=1)[0]
        random_data_by_type = {
            'event': random.choices(data_dictionaries.EVENT_TYPES, k=length),
            'object_type': random.choices(data_dictionaries.OBJECT_TYPES, k=length),
            'object_id': random.choices([self.fake.bothify(text='????-########'), self.fake.uuid4()], k=length),
            'ip': random.choices([self.fake.ipv4(), self.fake.ipv6()], weights=[0.7, 0.3], k=length)
        }
        fake_data_by_type = {
            'format': self.fake.mime_type(),
            'url': self.fake.uri(),
            'method': self.fake.http_method(),
            'referrer': self.fake.uri(),
            'user_agent': self.fake.user_agent()
        }
        # If given a set of allowed values to choose from, compute that first
        fake_data = []
        if allowed_values:
            fake_data = random.choices(allowed_values, k=length)
        elif data_type in random_data_by_type:
            fake_data = random_data_by_type[data_type]
        elif data_type in fake_data_by_type:
            fake_data = []
            for _ in range(length):
                fake_data.append(fake_data_by_type[data_type])
        return fake_data[0] if single and fake_data else fake_data

    def full_data_generator(self):
        # This method will generate fake data for all the fields in the model
        data = {}
        for key, val in self.model.__seamless_struct__.fields:
            data[key] = self.get_fake_data(key, single=True, allowed_values=val.get('allowed_values', None))
        for key, val in self.model.__seamless_struct__.lists:
            data[key] = self.get_fake_data(key, single=False, allowed_values=val.get('allowed_values', None))
        return data

    def minimal_data_generator(self):
        # This method will generate fake data for all the required fields in the model
        data = {}
        for key, val in self.model.__seamless_struct__.fields:
            if key not in self.model.__seamless_struct__.required:
                continue
            data[key] = self.get_fake_data(key, single=True, allowed_values=val.get('allowed_values', None))
        for key, val in self.model.__seamless_struct__.lists:
            if key not in self.model.__seamless_struct__.required:
                continue
            data[key] = self.get_fake_data(key, single=False, allowed_values=val.get('allowed_values', None))
        return data

    def generate_data(self):
        if self.type_of_record == 'full':
            for _ in range(self.number_of_records):
                yield self.full_data_generator()
        elif self.type_of_record == 'minimal':
            for _ in range(self.number_of_records):
                yield self.minimal_data_generator()
        else:
            # type_of_record is mix
            for _ in range(self.number_of_records):
                yield random.choices([self.full_data_generator(), self.minimal_data_generator()])[0]

    def write_data(self):
        print(datetime.datetime.now())
        print(f"Starting data generation for {self.event_type}")
        count = 0
        with open(self.filename, 'w') as output:
            output.write('[')
            for data in self.generate_data():
                json.dump(data, output, indent=2)
                output.write(',')
                count += 1
            output.write(']')
        print("Data generation completed.")
        print(f"File name: {self.filename}")
        print(f"Count: {count}")
        print(datetime.datetime.now())
