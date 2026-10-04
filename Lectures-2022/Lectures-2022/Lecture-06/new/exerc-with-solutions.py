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
            m=max(A[1:len(A)]) #first index removed
            if m>A[0]:
                return m 
            else:
                return A[0]

A=[10,1222,15]
max(A)


def maxite(A):
    m=A[0]
    for i in range(1,len(A)-1): 
        if A[i]>m:
            m=A[i]
    return m

A=[10,1222,15]  
maxite(A)
#A[1:len(A)]
#maxx(A[1:len(A)])
#max(A)
#type(len(A))
#A[0]


### Syracuse sequence

def syr(k): 
    """returns the Syracuse sequence itself as a list"""
    if k<=0:
        raise ValueError("Only for intergers")
    if k==1:
        return [1]
    else:   
        if k%2==0:
            return [k] + syr(int(k/2))
        else:
            return [k] + syr(int(3*k+1))
def ssyr(k): 
    """returns the position of 1 in the list"""
    return len(syr(k))-1
    
syr(7)
ssyr(7)



####

def change(stringtobechanged,firstchar,secchar):
    res=''
    for c in stringtobechanged:
        if c==firstchar:
            res+=secchar
        else:
            res+=c
    return res
x='this is a string to be modified'
change(x,sfirstchar=' ', secchar='s')


### Algorithm to solve towers of Hanoi

def towers(n, startpeg, extrapeg, endpeg):
    if n==1:
        print('Move disk 1 from', startpeg, 'to', endpeg)
    else:
        towers(n-1, startpeg, endpeg, extrapeg)
        print('Move disk',n, 'from', startpeg, 'to', endpeg)
        towers(n-1, extrapeg, startpeg, endpeg)
n=3
towers(n, 'A', 'B', 'C')


def perm(n, i):
    if i == len(n) - 1:
        print(n)
    else:
        for j in range(i, len(n)):
            n[i], n[j] = n[j], n[i]
            perm(n, i + 1)
            n[i], n[j] = n[j], n[i] # swap back, for the next loop
        
perm([1, 2, 3], 1)
L=[1,2,3]

def perm(L):
    if len(L)==1:
        return L
    else:
        for i in range(0,len(L)-1):
            L[0],L[i]=L[i],L[0]
            list=L.remove(L[i])
            perm(list)
            
  #          for x in set(perm(L.remove(L[i])):
   #             L[i]+x
   #             return L[i]+x
            
   L=[1,2,3,4]
perm(L)
L.remove(L[0])
len(L)
i=L[0]
for pos in range(len(L)+1):
    print(L[:pos] + [i]+ L[pos:] )

perm(L)
L.remove(L[0])
L
perm(L)


p = [1, 0]
i = 2
 
# there are three possible positions: _1_0_
# insert 2 at positions 0, 1, 2
for pos in range(len(p)+1):
    print( p[:pos] + [i] + p[pos:] )

