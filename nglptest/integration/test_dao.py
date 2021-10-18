from nglptest.fixtures.events import EventFixtureFactory
from nglp.models import events
import time
from nglp.initialise import initialise
initialise()

request = EventFixtureFactory.request_core_event()
obj = events.CoreEvent(raw=request)
s = obj.save()
print(obj.id)
print(obj.data)
print(s)

time.sleep(2)

assert obj.id is not None
assert obj.created_date is not None
assert obj.last_updated is not None

q = {
    "query" : {
        "bool" :{
            "must" : [
                {"term" : {"id.exact" : obj.id}}
            ]
        }
    }
}
res = events.CoreEvent.query(q)
print(res)

obj2 = events.CoreEvent.pull(obj.id)
print(obj2.data)