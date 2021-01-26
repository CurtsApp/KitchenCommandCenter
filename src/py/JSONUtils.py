import json

def seralizeObject(obj):
    try:
        return json.dumps(obj)
    except Exception:
        pass

    isList = isinstance(obj, list)

    if(isList):
        json = "["
    else:
        json = "{"

