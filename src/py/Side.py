class Side:
    nextId = 0

    def __init__(self, name, id = None):
        self.name = name
        self.link = "www.momblog.com"
        if id is None:
            self.id = Side.nextId
        else:
            self.id = id
