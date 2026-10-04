#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Sep 29 18:30:14 2019

@author: xav
"""


#!/usr/bin/python

def KelvinToFahrenheit(Temperature):
   assert (Temperature >= 0),"Colder than absolute zero!"
   return ((Temperature-273)*1.8)+32

KelvinToFahrenheit(273)
int(KelvinToFahrenheit(505.78))
KelvinToFahrenheit(-5)



help(assert)

# Exercise : Write a function that change all  values of a dictionnary to a single string argument. 

def change(dico,c):
    for key in dico.keys():
        dico[key]=c

dico={"daddy":1946, "mommy":1950}

change(dico,1970)

dico

def increment(n):
    n += 1
    return
a=3
id(a)
a=increment(a)
print(a)
id(a)


def apply_discount(product, discount):
    price = int(product['price'] * (1.0 - discount))
    assert 0 <= price <= product['price']
    return price

shoes = {'name': 'Fancy Shoes', 'price': 14900}

apply_discount(shoes, 0.25)
apply_discount(shoes, 2.0)