# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
# presionamos un numero <--- input de un numero
# el ascensor va a ese piso <-- ver si el piso es el numero de piso que ingresamos y si: --> es el piso, descendemos
#                    --> si no es el piso, subo o bajo el ascensor
# desendemos del ascensor <-- salida del proceso, imprimir hasta luego
n = int(input("Por favor ingrese un piso al que quiere ir : "))

pisoactual = 0
ultimopiso = 50

## estamos en cualquier piso
## se elige un numero, entonces, si el numero ingtesado es mayor, tengo que sumar, y si el numero ingresado es menor, tengo que restar numeros
## se sube o se baja hasta ese numero
##while n > 50:
## print ("el piso ingresado es mayor al ultimo piso")
## n = int(input("Por favor ingrese un piso al que quiere ir : "))
while n >= 0:
 if n <= ultimopiso and pisoactual != n:
  if pisoactual < n:
   while pisoactual < n:
    print (pisoactual)
    pisoactual = pisoactual + 1
  else:
   while pisoactual > n:
    print (pisoactual)
    pisoactual = pisoactual - 1
   print("llegamos al piso, hasta luego")
   print (pisoactual)
   n = int(input("Por favor ingrese un piso al que quiere ir : "))
 else:
  if  n > ultimopiso:
    n = int(input("Piso mayor al ultimo piso, ingrese nuevamente  : "))
  else: ## pisoactual == n
   n = int(input("llegamos al piso, ingrese otro  : "))
while pisoactual > 0:
 pisoactual = pisoactual - 1
print ("ascensor fuera de servicio")
print (pisoactual)


##vuelva al 0 para quedar listo para el otro dia 
 ##pensemos como hacer para que el ascensor funcione todo el dia (considerando que siempre el ascensor al comienzo del dia va a estar en el piso 0)
 
 

 
