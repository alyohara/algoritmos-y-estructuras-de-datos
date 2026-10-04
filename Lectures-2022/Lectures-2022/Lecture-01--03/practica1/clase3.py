# Intro a Python - Practica 1 - parte 1 - 

# Ejercicio 5. Diseñar un algoritmo (diagrama de flujo y/o el pseudocódigo) 
# que muestre el mayor de tres números enteros entrados por teclado.


#n1 = int(input("Por favor ingrese un número : "))   # leer(n1) 
#n2 = int(input("Por favor ingrese un número : "))   # leer(n2)
#n3 = int(input("Por favor ingrese un número : "))   # leer(n3)

#if n1 >= n2 :                                       # si n1 >= n2, entonces
#    if n1 >= n3 :                                   ## si n1 >= n3, entonces
#        print(n1, " es el primer (n1) es mayor")    ## escribir(" n1 es el mayor. ")
#    else :                                          ## sino
#        print(n3 ," es el tercer (n3) es mayor")    ## escribir(" n3 es el mayor. ")
##                                                   ## fin si
#else :                                              # sino
#    if n2 >= n3 :                                   ## si n2 >= n3, entonces
#        print(n2 , " es el segundo (n2) es mayor")  ## escribir(" n2 es el mayor. ")
#    else :                                          ## sino
#        print(n3 ," es el tercer (n3) es mayor")    ## escribir(" n3 es el mayor. ")
##                                                   ## fin si
##                                                   # fin si 

# Arreglar >= 

#n1 = int(input("Por favor ingrese un número : "))   # leer(n1) 
#n2 = int(input("Por favor ingrese un número : "))   # leer(n2)
#n3 = int(input("Por favor ingrese un número : "))   # leer(n3)
#
#if n1 > n2 :                                       # si n1 >= n2, entonces
#    if n1 > n3 :                                    ## si n1 >= n3, entonces
#        print(n1, " es el primer (n1) es mayor")    ## escribir(" n1 es el mayor. ")
#    else :                                          ## sino
#        if n1 == n3 :
#            print(n1, " es el primer (n1) y el tercero (n3) son iguales y mayores")
#        else :
#            print(n3 ," es el tercer (n3) es mayor")
#else :                                              
#    if n2 > n3 : 
#        if n1 == n2 :
#            print(n1, " es el 2do. (n2) y el primero (n1) son iguales y mayores")
#        else :
#            print(n2 , " es el segundo (n2) es mayor")  
#    else :                                          
#        if n2 == n3 :
#            print(n2, " es el 2do. (n2) y el tercero (n3) son iguales y mayores")
#        else :
#            print(n3, " es el tercer (n3) es mayor")    

# Poner AND

n1 = int(input("Por favor ingrese un número : "))  
n2 = int(input("Por favor ingrese un número : "))  
n3 = int(input("Por favor ingrese un número : "))  

# Si los numeros son iguales muestra el primero (primer occurencia)

if n1 >= n2 and n1 >= n3:  # V = { V V }                                                                  
    print(n1, " es el primer (n1) es mayor")    
else :                     # F = { V F } { F V } { F F }                         
   if n2 >= n3 and n2 >= n1 :                                   
       print(n2 , " es el segundo (n2) es mayor")  
   else :                                          
        if n3 >= n1 and n3 >= n2 :                                   
            print(n3 ," es el tercer (n3) es mayor")
        else : 
            print(" fallo ")    







