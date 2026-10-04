# -*- coding: utf-8 -*-
"""
Created on Sun Oct  6 21:11:48 2019

@author: xav
"""

#Implement a recursive Python function that returns
# the sum of the first n integers.
 
def sum(n):
    if n==0:
        return 0
    else:
        return n+sum(n-1)

sum(5)

#Implement an iterative Python function that returns
# the sum of the first n integers.

## iterqtive
def sum(n):
    addition=0
    for x in range(n):
        addition+=x
    return addition
sum(5)
            

sum(2)
sum(5)

#

def digit(n):
    if n<10:
        return 1
    else:
        return 1+digit(n/10)

digit(1010000)





def sum_n(n):
    addition=0
    for x in range(1,2*n,2):
        addition+=x
    return addition
s=sum_n(5)
print(s)

#Write a recursive Python function that has a parameter representing 
#a list of integers and returns the maximum stored in the list. 
#Thinking recursively, the maximum is either the first value in the list or the maximum of the rest of the list, whichever is larger. If the list only has 1 integer, then its maximum is this single value, naturally.  
# Helpful Python syntax:  If A is a list of integers, and you want to 
#set the list B to all of the integers in A except the first one, you can write  
# B = A[1:len(A)]  
# (This sets B to the integers in A starting at index 1 
  #and 
 # ending at index len(A)-1, the last index. The integer in the 
  #first position of A at index 0 is not included.) 
  
def max(A):
        if len(A)==1:
            return A[0]
        else:
            m=max(A[1:len(A)])
            if m>A[0]:
                return m 
            else:
                return A[0]

A=[10,1222,15]
max(A)
#A[len(A)-1]
#maxx(A[1:len(A)])
#max(A)
#type(len(A))
#A[0]





