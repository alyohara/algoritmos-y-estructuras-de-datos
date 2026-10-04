# -*- coding: utf-8 -*-
"""
Created on Sat Oct  5 18:41:35 2019

@author: xav
"""
def pp(L):
    if len(L)==1: 
        return L[0]
    if L[0]<L[1]:
        L.pop(1) 
    else:
        L.pop(0)
    return pp(L)

L=[24,45,2,3,2,2,6,10]
pp(L)


def count(st):
    return st.count('a')

count('mamo')

def count_a(str):
    if len(str)==1:
        if str[0]=='a':
            return 1
        else:
            return 0
    else:
        if str[0]=='a' count_a(str)
    
    