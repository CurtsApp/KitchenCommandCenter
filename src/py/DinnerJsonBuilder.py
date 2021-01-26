#  Turns dinner csv into json

import json

with open('Recipes.csv', 'r') as file:
    data = file.read()
    lines = data.split('\n')
    dinners = []

    for line in lines:
        dinners.append(line)

    jsonFile = open('Recipes.json', "w")
    json.dump(dinners, jsonFile, indent=2)
    jsonFile.close()
