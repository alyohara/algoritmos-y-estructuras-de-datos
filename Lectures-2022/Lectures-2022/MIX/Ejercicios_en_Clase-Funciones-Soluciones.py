# -*- coding: utf-8 -*-
"""
@author: xav

"""

# Implementar una función **recursiva** que retorne la suma de los primeros n números.
 
def sum(n):
    if n==0:
        return 0
    else:
        return n+sum(n-1)

#sum(5)


# Implementar una función **iterativa** que retorne la suma de los primeros n números.

def sum(n):
    addition=0
    for x in range(n):
        addition+=x
    return addition

#sum(5)
            


#Implementar una función **recursiva** que reciba como parametro una lista de números enteros y retorne el maximo.  
  
def max(A):
        if len(A)==1:
            return A[0]
        else:
            m=max(A[1:len(A)]) #removemos el indice
            if m>A[0]:
                return m 
            else:
                return A[0]

#A=[10,1222,15]
#max(A)

#Implementar una función **iterativa** que reciba como parametro una lista de números enteros y retorne el maximo.

def maxite(A):
    m=A[0]
    for i in range(1,len(A)-1): 
        if A[i]>m:
            m=A[i]
    return m

#A=[10,1222,15]  
#maxite(A)


### Syracuse sequence

def syr(k): 
    """retorna la secuancia de Syracusa en forma de lista"""
    if k<=0:
        raise ValueError("Solo números enteros")
    if k==1:
        return [1]
    else:   
        if k%2==0:
            return [k] + syr(int(k/2))
        else:
            return [k] + syr(int(3*k+1))
def ssyr(k): 
    """retorna la cantidad de pasos hasta llegar a 1"""
    return len(syr(k))-1
    
#syr(7)
#ssyr(7)