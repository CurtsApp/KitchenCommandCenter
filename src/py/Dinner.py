import json

class Dinner:
    nextId = 0

    def __init__(self, name):
        self.name = name
        self.link = "www.momblog.com"
        self.sides = []
        if id is None:
            self.id = Dinner.nextId
        else:
            self.id = id

    def toJSON(self):
        json.dumps(self, default=lambda obj: obj.__dict__)


class Dinners:
    def __init__(self, dinners):
        self.list = dinners

    def toJSON(self):
        json = "["
        for dinner in self.list:
            json += dinner.toJSON() + ","
        json = json[-1]
        json += "]"
