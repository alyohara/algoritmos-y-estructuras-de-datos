# -*- coding: utf-8 -*-
"""
Created on Mon Sep 30 17:44:35 2019

@author: xavier.parent
"""



# one argument

def is_divisible(num,den):
        return num % den == 0

is_divisible(3,7)

def square(x):
    return x*x

square(2)


def add_number(x,y):
    sum=(x+y)
    print(sum)
    return sum

add_number(1,2)
    
# function def

def find_max(a,b):
   if(a > b):
      print(a,"is greater than",b)
   elif(b > a):
      print(b,"is greater than",a)
      
find_max(30, 45)  #Here we call the function and pass two numbers finding max between this two numbers
find_max(45, 30) 



# Argument data types

def my_function(str1,str2):
    print(str1)
    print(str2)

my_function("I'm string 1", "I'm string 2")

def my_function(L1,L2):
    print(L1)
    print(L2)
    print(L1+L2)

L1=['a','b','c']
L2=[1,2,3]
my_function(L1,L2)

def my_function(food):
    for x in food:
        print(x)
        
food=['apple','banana', 'orange']  
my_function(food)      
        
        
def my_function(S1,S2):
    print(S1)
    print(S2)

S1={1,2,3}
S2={1,2,2,3}
my_function(S1,S2)

def my_function(x1,x2):
    print(x1)
    print(x2)

x1=(0,1,2,'obj', (1,2))
x2=(1,2,2,3)
my_function(x1,x2)

def my_function(dico1,dico2):
   print(dico1)
   print(dico2)
    
    
dico1={'Jean Paul':'jeanpaul@trucmuch.lu',\
             'Fanny':'fanny@trucmuch.lu',\
             'Robert':'robert@trucmuch.lu',\
       'Stephanie': (6812424239),\
       0:2} 
dico2={0:7,'x':'x@trucmuch.lu'}

my_function(dico1,dico2)

#Return

def hello():
  print("Hello World") 
  return("hello")

def hello_noreturn():
  print("Hello World")
  
# Multiply the output of `hello()` with 2 
hello() * 2

# (Try to) multiply the output of `hello_noreturn()` with 2 
hello_noreturn() * 2


def square(x):
    return x*x

square(2)

def first2items(list1):
  return list1[0], list1[1]
a, b = first2items(["Hello", "world", "hi", "universe"])
print(a + " " + b)




