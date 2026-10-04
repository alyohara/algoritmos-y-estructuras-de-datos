# Reescribir el siguiente código utilizando un ciclo for.
x=0
while x<20:
    print(x,end=" ")
    x+=1
    
print()
######### SOLUCION ######
for x in range(0,20):
    print(x,end=" ")

print()


# Reescribir el siguiente código utilizando un ciclo while

for x  in range(0,9):
    if x > 6:
        break
    print(x, end=" ")


# Escribir una función que permita ordenar una Lista. 
# Dicha función recibe dos argumentos (lista, copy), en donde, 
# lista es la lista a ordenar, y copy es "Verdadero" (True) la función retornara una lista nueva, en otro caso ordenara sobre la lista que se pasa como argumento.
# Por defecto, si la función es llamada sin valor para copy (solo la lista) ordenaremos  sobre la lista que se pasa como argumento.

def ordenar_lista(lista, copy=False):
    if copy :
        lista_nueva = lista.copy()
        lista_nueva.sort()
        return lista_nueva
        #return sorted(lista)
    else: 
        #lista.sort()
        return lista.sort()  

L = [1,2,4,3,2,6,5,3,56,74,3] 
print(L)
print(ordenar_lista(L, copy=True))
print(L)

# Escribir una función que reciba por dos parametros: 
# - (i) una lista desordenada; y 
# - (ii) una expresión (algo que pueda ser evaluado True o False). E.g. >=; ==, not 'expresion', True, False, etc ...
### Si el valor de la expresión es Verdadera (TRUE), la lista se ordenara en forma descendente; 
### en otro caso de manera ascendente. 
# Por defecto, si la función es llamada sin una "expresión" (solo la lista) debe retornar una lista ordenada de forma ascendente.  

# Ordenar de forma descendente: 
## LISTA.sort(reverse=True)

### SOLUCION 1 ######
def ordenar_lista(lista, direccion=False):
    if direccion :
        #lista.sort(reverse=direccion)
        return lista.sort(reverse=direccion)
    else: 
        #lista.sort()
        return lista.sort()  
        
### SOLUCION 2 ###
def ordenar_lista2(lista, direccion=False):
    #lista.sort(reverse=direccion)
    return lista.sort(reverse=direccion)


L = [1,2,4,3,2,6,5,3,56,74,3] 
print(L)
print(ordenar_lista2(L,))
print(L)

# Dadas las siguientes funciones:
# Alcanze de una variable

x=7

def ExVar1():
    print(x)

def ExVar2():
    x = 2
    def ExVar21():
        global x
        print(x)
    ExVar21()
    print(x)

def ExVar3():
    x = 7
    def ExVar31():
        nonlocal x
        print(x)
    ExVar31()
    print(x) 
    
def ExVar4():
    global x
    def ExVar41():
        x = 2
        print(x)
    ExVar41()
    print(x)

#ExVar1()
#ExVar2()
#ExVar3()
#ExVar4()


# Implementar una función iterativa que retorne la suma de los primeros n números.
# Calcular: 1 + 2 + ... + n-1 + n

def sumaN_iterativa(n):
    total = 0
    for i in range(1,n + 1):
        total += i
    return total

#print(sumaN_iterativa(10))

# Implementar una función recursiva que retorne la suma de los primeros n números.

def sumaN(n):
    # Caso Base 
    if  n <= 1 :
        return 1
    else:
    #Llamada Recursiva 
        return n + sumaN(n -1)
 
#print(sumaN(10))   

# Implementar una función iterativa que reciba como parametro 
# una lista de números enteros y retorne el maximo.    
def maximo_iterativo(L):
    mayor = L[0]
    i = 0
    while i < len(L):
        if mayor < L[i]:
            mayor = L[i] 
        i += 1     
    return mayor

#print(maximo_iterativo([1,2,3,4,15,3,2,9,4,1]))

# Implementar una función recursiva que reciba como parametro 
#una lista de números enteros y retorne el maximo.    
    
def maximoN_Lista(L):
    # Caso Base 
    if len(L) == 1:
        return L[0]
    else:
    # Llamada Recursiva 
        if L[0] > L[1]:
            L[1] = L[0]
        return maximoN_Lista( L[1:] )

print(maximoN_Lista([1, 3, 84, 4, 6, 56]))    
   
    
    
