import json
import os

from unittest import TestCase
from nglptest.fixtures.events import EventFixtureFactory
from fastapi.testclient import TestClient
from nglp.main import app
from nglp.config import settings

CLIENT = TestClient(app)


class TestEventAPI(TestCase):
    def setUp(self):
        self.logfile = os.path.join(settings.event_log_dir, "events.log")
        self.logcount = self._count_log_size()

    def _count_log_size(self):
        with open(self.logfile, "r") as l:
            for i, line in enumerate(l):
                pass
            return i + 1

    def test_01_send_request_event(self):
        data = EventFixtureFactory.request_event()
        resp = CLIENT.post("/api/", data=json.dumps(data))
        assert resp.status_code == 201, resp.status_code
        newlogsize = self._count_log_size()
        assert newlogsize == self.logcount + 1

    def test_02_send_investigation_event(self):
        data = EventFixtureFactory.investigation_event()
        resp = CLIENT.post("/api/", data=json.dumps(data))
        assert resp.status_code == 201, resp.status_code
        newlogsize = self._count_log_size()
        assert newlogsize == self.logcount + 1

    def test_03_send_join_event(self):
        data = EventFixtureFactory.join_event()
        resp = CLIENT.post("/api/", data=json.dumps(data))
        assert resp.status_code == 201, resp.status_code
        newlogsize = self._count_log_size()
        assert newlogsize == self.logcount + 1

    def test_04_send_leave_event(self):
        data = EventFixtureFactory.leave_event()
        resp = CLIENT.post("/api/", data=json.dumps(data))
        assert resp.status_code == 201, resp.status_code
        newlogsize = self._count_log_size()
        assert newlogsize == self.logcount + 1

    def test_05_send_export_event(self):
        data = EventFixtureFactory.export_event()
        resp = CLIENT.post("/api/", data=json.dumps(data))
        assert resp.status_code == 201, resp.status_code
        newlogsize = self._count_log_size()
        assert newlogsize == self.logcount + 1

    def test_06_send_request_event(self):
        data = EventFixtureFactory.workflow_transition_event()
        resp = CLIENT.post("/api/", data=json.dumps(data))
        assert resp.status_code == 201, resp.status_code
        newlogsize = self._count_log_size()
        assert newlogsize == self.logcount + 1