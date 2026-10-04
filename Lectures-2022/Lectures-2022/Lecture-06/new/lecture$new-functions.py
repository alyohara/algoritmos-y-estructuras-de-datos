# -*- coding: utf-8 -*-
"""
Created on Mon Sep 30 17:44:35 2019

@author: xavier.parent
"""



# Example of a function taking two arguments


def square(x):
    return x*x


# function def

def find_max(a,b):
   if(a > b):
      print(a,"is greater than",b)
   elif(b > a):
      print(b,"is greater than",a)
      
#function call
      
find_max(30, 45)  #Here we call the function and pass two numbers finding max between this two numbers
find_max(45, 30) 

# a function may take a string / a list / set as argument
def my_function(str1,str2):
    print(str1)
    print(str2)

my_function("I'm string 1", "I'm string 2")

def my_function(L1,L2):
    print(L1)
    print(L2)

L1=['a','b','c']
L2=[1,2,3]
my_function(L1,L2)

def my_function(S1,S2):
    print(S1)
    print(S2)

S1={1,2,3}
S2={1,2,2,3}
my_function(S1,S2)

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

#functions may just return one (maybe more) values

def square(x):
    return x*x

square(2)

def first2items(list1):
  return list1[0], list1[1]

a, b = first2items(["Hello", "world", "hi", "universe"])
print(a + " " + b)


# example where an indefinite number of arguments is passed to the function

def adder(*num):
    sum = 0
    
    for n in num:
        sum = sum + n

    print("Sum:",sum)

adder(3,5)
adder(4,5,6,7)
adder(1,2,3,5,6)

# Global keyword

c = 1 # global variable cannot be modifed locally

def add():
   # global c
   # c=c+2
    print(c)

add()



help(range)

#This solution is working fine

#### 
#ITERATIVE FUNCTION 
####


# Fibonacci sequence

def Fibo(n):
    "F(n)=F(n-1)+F(n-2), F(1)=F(0)=1"
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        return Fibo(n-1)+Fibo(n-2) # Here is the recursive call


Fibo(18) 
[Fibo(n) for n in range(18)] 
ntupe([Fibo(n) for n in range(18)]) 


## Syracuse sequence 
def f(k):
    if k==1:
        return [1]
    else:   
        if k%2==0:
            return [k] + f(int(k/2))
        else:
            return [k] + f(int(3*k+1))

#f(34)           

def ff(k):
    return len(f(k))-1

#ff(34)
#print(result[ff(34)])
    
## Fibo non iterative
    
#Fiboiterative?
    
def Fiboiter(n):
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        x=1 #0 th element
        y=1 # 1th element
        for i in range(1,n):
            # x i-1-th element and y to be the i-th element
            x,y=y,x+y
            # x i-th element and y to be the i+1-th element
        return y










