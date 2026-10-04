# -*- coding: utf-8 -*-
"""
Created on Sat Oct 12 17:07:38 2019

@author: xav
"""

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age) 


class P:

    def __init__(self,x):
        self.__x = x

    def get_x(self):
        return self.__x

    def set_x(self, x):
        self.__x = x
        
        
from mutators import P
p1 = P(42)
p2 = P(4711)
p1.get_x()
42
p1.set_x(47)
p1.set_x(p1.get_x()+p2.get_x())
p1.get_x()
4758
       
        
        