import json
import requests
import time
import random
from test.generate_test_data import DataGenerator

def pump_data(file):
    # unpack JSON doc
    f = open(file, "r")
    #print(f.read())
    unpacked_file = json.loads(f.read())
    for entry in unpacked_file:
        requests.post(url="http://localhost:8000/api/", data=json.dumps(entry), verify=False)
        time.sleep(random.choices(range(1, 60), k=1)[0])

    f.close()


dg = DataGenerator('investigation', 100, data_fill="mix", is_core=False, filename="api_test.json")

pump_data("api_test.json")