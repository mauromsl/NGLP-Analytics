from nglp.models.events import CoreEvent

INDICES = [
    CoreEvent
]

def initialise():
    for index in INDICES:
        index().initialise_index()