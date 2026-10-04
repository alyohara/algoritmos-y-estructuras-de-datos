#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Sep 29 18:12:57 2019

@author: giovanni.casini
"""

# =============================================================================
#DEBUGGING
# =============================================================================

#Indentation Error
n=0
L=[]
while n<5: #pass
L.append(n)
    n=n+1
print(L)

# =============================================================================

#Index Error
L=[0,1,2]
print(L[3])

L=[0,1,2]
print(L[2])
#L.remove(1)
#print(L[2])

# =============================================================================

#Name Error
variable=0
while Variable<5: 
    L.append(n)
    n=n+1
print(L)