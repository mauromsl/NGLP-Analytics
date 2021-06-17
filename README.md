# NGLP Analytics Suite
The API and models for the NGLP Analytics. Python 3

## Getting the code

Clone from this repo:

```bash
git clone git@github.com:NGLPteam/NGLP-Analytics.git
```

#### Update submodules (the edges search component)

From project root, run:
```bash
git submodule update --init --recursive
```

This will check out the `edges` js library to `nglp/static/edges`

#### Python environment

1. Copy the secrets file from `env.template` to `.env` and customise as necessary (todo: hints)
2. Create and activate virtualenv with e.g. `virtualenv -p python3.8 venv` and `./venv/bin/activate`
3. Install requirements with `pip install -r requirements.txt && pip install -e .`

### Generate Data

Each type of incoming event (e.g. as if via the API)

```bash
for i in {request,investigation,join,leave,export}; do python test/generate_test_data.py -e $i -n 1000; done
```

A set of events populating all the core model data too

```bash
for i in {request,investigation,join,leave,export}; do python test/generate_test_data.py -e $i -n 1000 -c; done
```

### Index Data in ElasticSearch

In the directory where you generated the test data in the previous section:

```bash
find . -maxdepth 1 -name "*.json" -exec python test/load_test_data.py -i {} \;
```

TODO - full usage instructions.

### Run the analytics API application

From project root, run:
```bash
python nglp/main.py
```

This will bring up the webserver, by default at http://localhost:8000

* The JSON API
* at /search (http://localhost:8000/search) is a demo instance of `edges` with a search interface over the whole index.

TODO - make instruction writing more gooder.
