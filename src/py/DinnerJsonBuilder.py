#  Turns dinner csv into json

import json

from Dinner import Dinner, Dinners

with open('Recipes.csv', 'r') as file:
    data = file.read()
    lines = data.split('\n')
    dinners = []

    for line in lines:
        dinner = Dinner(line)
        dinners.append(dinner)

    theDin = Dinners(dinners)
    jsonFile = open('Recipes.json', "w")
    print(theDin.toJSON())
    jsonFile.close()
