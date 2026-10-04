#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Sep 29 18:12:57 2019

@author: giovanni.casini

Lecture 5

"""

import module1
c=module1.sum()
print(c)


from module1 import sum
c=sum()
print(c)


import random
#print(random.randrange(100))
print(randrange(100))

# =============================================================================
# =============================================================================

print(type(random)) # Type : module
print(type(random.randrange)) # Type : method


# =============================================================================
# =============================================================================


import numpy
print(numpy.pi) #Here numpy.pi denotes an approximation of the usual pi number
# 
#print(type(numpy)) # Type : module
#print(type(numpy.pi)) # Type : method



# =============================================================================
# =============================================================================

import math as m # math is not defined and 
                 # m is the object containing functions of the module math
print(m.pi) # It works
#print(math.pi) #NameError

# =============================================================================
# =============================================================================

from math import pi as sliceofpie # Now sliceofpie is a floating number with the value math.pi
print(sliceofpie)
from math import pi # Of course the "as" command is optional
print(pi==sliceofpie) # It is the same



import random 
print(randrange(100)) #error: must be used as a method


import random 
print(random.randrange(100))

from random import randrange
print(randrange(100)) #no error: using "from NameMethod import NameFuction"
                        #allows to use functions




# =============================================================================
# =============================================================================



import math
c = factorial(3)
print(c)

import math
c = math.factorial(3)
print(c)

from math import *
c = factorial(3)
print(c)

# =============================================================================
# =============================================================================


from math import inf,e

print(inf+inf)
print(1/inf)
print(inf-inf)# Undetermined form works even though 
print(e)



import math 
math.log(4)


from math import log
log(4) 


from math import log
log(4,10)


# =============================================================================
# =============================================================================


Example

# =============================================================================
# =============================================================================

import numpy as np

v=np.array([[1,1],[1,1]])# Create a 2 by 2 array
print(v)
#print([[1,1],[1,1]])

v+=v
print(v)


v=np.array([[1,1],[1,1]])
z=np.array([[1,2],[3,4]])
w=v+z
print(w)

v=np.array([[1,2],[3,4]])
print(v)
print(v[1][0]) # You can access the elements of an array
v[0][1]=5 # You can reassign a value of an array
print(v)
#w=v     # Arrays are mutable objects
#print(w)
#print(v)
#w[0][1]=3
#print(v)
#print(w)


v=np.array([[1,2],[3,4]])
print(v)
v[0][1]=5 # You can access the elements of an array
print(v)
#w=np.copy(v)     
#w[0][1]=3
#print(v)
#print(w)




# =============================================================================
# =============================================================================

import numpy as np
v=np.array([[True,2.0],[0+1j,0.1],(3+7*1j,-np.pi)]) # The array function will uniformize the type
                                                  # you entered.
print(v)
print(type(v[0][0]))
print(type(v[2][2]))



# =============================================================================
# =============================================================================


#MATRICES


M=np.matrix([[0,1j],[1j,0]]) # Type : matrix
print(M)
print(M.conjugate()) # Returns the conjugate of a matrix
#print(M*M)




M=np.matrix([[0,2],[3,1]]) # Type : matrix
N=np.matrix([[3,4],[-3,2]]) # Type : matrix
print(M*N)

D=np.matrix([[0,3],[5,5]])
N=D    # Matrix are mutable objects
N[0,1]=2713
print(D)


# =============================================================================
# =============================================================================

#Random

import random
c=random.random() # Returns a random float between 0 and 1
print(c)

c=random.randrange(0,4) # Return a random integer between 0 and 3 (included)
print(c)


Months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
random.shuffle(Months) #Mixes up the list Months (Months is changed)
print(Months)


Months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
random.sample(Months,k=5) # Sample of 5 elements in the population Months
#Compare random.shuffle(L) and random.sample(L,len(L))


# =============================================================================
# =============================================================================

# Exercise : Let us throw 10 dices with 1,2,3,4,5,6. 
    # You win 2€ if the sum of the values on the dice is from 10 to 23. 
    # You loose 160€ if the sum of the values on the dice is either 24 or 48.
    # You win 250€ if the sum of the values on the dice is 42.
    # You loose 5€ in any other case.
  # Should you play the game?

import random
N=10000 #Number of tests
S=0     #Sum of the money won/lost 

for ntest in range(0,N):
    dicesvalue=0           #Initialization
    for ndice in range(0,10):      #throw the dice ten times
        dicesvalue+=random.randrange(1,7)  # one single dice 
    if dicesvalue<= 23:   #You apply the rule given above
        S+=2
    elif dicesvalue==10 or dicesvalue==23:
        S-=160
    elif dicesvalue==42:
        S+=250
    else:
        dicesvalue-=5
print(S/N)  # S/N is a good estimation for the esperance of your winning


# =============================================================================
# =============================================================================
                                                  
#Classes


class MyClass:
    """A simple example class"""
    i = 12345

    def f(self):
        return 'hello world'
    
    
print(MyClass.i)


a=MyClass()
#print(MyClass.f(a))
print(a.f())


#Definition of the class "MyClass"
class MyClass2:
  x = 5 #property x, with value 5
  
  #Based on such a class, we 

p1 = MyClass2()
print(p1.x)

# =============================================================================
# =============================================================================

#Init function



class Dog:

    kind = 'canine'         # class variable shared by all instances

    def __init__(self, appell):
        self.name = appell    # instance variable unique to each instance



d = Dog('Fido')
e = Dog('Buddy')
print(d.kind)                  # shared by all dogs
print(e.kind)                # shared by all dogs
print(d.name)                 # unique to d
print(e.name)                 # unique to e





class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)

# =============================================================================
# =============================================================================

class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()

# =============================================================================
# =============================================================================

class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print(abc.age)

p1 = Person("John", 36)
p1.myfunc()
p1.age = 40 #modify the value of a property
p1.myfunc()


class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print(abc.age)

p1 = Person("John", 36)
p1.myfunc()
del p1.age #delete a property
p1.myfunc()
#p2 = Person("Carl",42)
#print("Hello my name is " + p2.name)



class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print(abc.age)
    
p1 = Person("John", 36)
del p1 #delete an object
p1.myfunc()


class Ratio():
    "rational number"
    def __init__(self,numerator,denominator): #Always use "self" as a first variable
        self.num=numerator
        self.den=denominator
        
q=Ratio(0,1) # Create a variable "q" of type  "Ratio" whose "num" attribute is 0 and "den" attribute is 1
print(q.num)
print(q.den) 



#Exercise : Birthday paradox. Among a set of 10 people whose birthdays are uniformly distributed
# on 365 days of the year, compute an approximation of the probability that two people have the same birthday date.
#Same question with 30 people. 
N=10000 #Number of tests
Npeople=10 #Number of people change here to get 30
S=0     #+1 if there is a match, 0 else.
for ntest in range(0,N):
    Lbirthday=[]
    for x in range(0,Npeople):
        birthday=random.randrange(0,366)
        if birthday in Lbirthday:     # If two people have the same birthday
            test=0             # The thing to add to S is zero
            break              # Go out of the for loop
        else:
            Lbirthday.append(birthday) #Add the birthday to the list
    if len(Lbirthday)==Npeople:   # If we have Npeople birthday then all people have a different birthday
        test=1
    S+=test                   # In any case, add the test value to S
print(S/N) 


# Exercise : Let us throw 10 dices with 1,2,3,4,5,6. 
    # You win 2€ if the sum of the values on the dice is from 10 to 23. 
    # You loose 160€ if the sum of the values on the dice is either 24 or 48.
    # You win 250€ if the sum of the values on the dice is 42.
    # You loose 5€ in any other case.
  # Should you play the game?


N=10000 #Number of tests
S=0     #Sum of the money won/lost 

for ntest in range(0,N):
    dicesvalue=0           #Initialization
    for ndice in range(0,10):      #throw the dice ten times
        dicesvalue+=random.randrange(1,7)  # one single dice 
    if dicesvalue<= 23:   #You apply the rule given above
        S+=2
    elif dicesvalue==10 or dicesvalue==23:
        S-=160
    elif dicesvalue==42:
        S+=250
    else:
        dicesvalue-=5
print(S/N)  # S/N is a good estimation for the esperance of your winning






















