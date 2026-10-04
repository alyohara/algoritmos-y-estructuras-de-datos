# -*- coding: utf-8 -*-
for i in range(0,5) :
    for j in range(0,  4 - (i % 4)) :
        print(' ', end="")
    for j in range(0, (2 * (i % 4)) + 1) :
        print('*', end="")
    for j  in range(0, 4 - (i % 4)) :
        print(' ', end="")
    print('')


total = int(input('Ingrese la cant. de dinero: $ '))
print('Billtes de $100: ', total // 100)
total = total % 100
print('Billtes de $50: ', total // 50)
total = total % 50
print('Billtes de $20: ', total // 20)
total = total % 20
print('Billtes de $10: ', total // 10)
total = total % 10
print('Billtes de $5: ', total // 5)
total = total % 5
print('Billtes de $2: ', total // 2)
total = total % 2
print('Monedas de $1: ', total)



segundos = int(input('Ingrese la cant. de segundos: '))
h, m, s = (segundos // 60) // 60, (segundos // 60) % 60, ((segundos % 60) % 60)
print(h, m, s)  


ret = 0
ab = int(input('Ingrese un numero: '))
for i in range(1, ab // 2): # TRUNC(ab/2)
    if (ab % i == 0) : 
        ret+= 1 
        if (ret > ab) : 
            print('El numero es abundante')
        else: 
            print('El numero NO es abundante')

ret = 0
deff = int(input('Ingrese un numero: ')) 
for i in range(1, deff//2) : # TRUNC(def/2)
   if (deff % i == 0) :
      ret+= + i
      if (ret < deff) :
         print('El numero es defectivo')
      else:
         print('El numero NO es defectivo')


h = int(input('Ingrese la altura del rectangulo: '))
b = int(('Ingrese la base del rectangulo: '))
print('El area del rectangulo es: ', b * h)


h = int(input('Ingrese la altura del triangulo: '))
b = int(input('Ingrese la base del triangulo: '))
print('El area del triangulo es: ', (b * h) / 2)



km = int(input('Ingrese el total de kilometros recorridos: '))
pl = int(input('Ingrese el precio del litro de nafta: '))
pg = int(input('Ingrese el dinero gastado en nafta: '))
h, m =  int(input('Ingrese el tiempo total del viaje: '))
#consumo de gasolina cada 100km (en litros y pesos)
print('Consumo de gasolina cada 100km: ', ((pg/pl)*100)/km, ' litros')
print('Consumo de gasolina cada 100km: $', (((pg/pl)*100)/km)*pg, ' pesos')
# consumo de gasolina en litros y pesos cada km
print('Consumo de gasolina cada por km: ', (pg/pl)/km, ' litros')
print('Consumo de gasolina cada por km: $', ((pg/pl)/km)*pg, ' pesos')
# velocidad media en km/h y m/s
print('Velocidad promedio: ', km/(h + m/60), ' km/h')
print('velocidad promedio: ', (km * 1000)/((h*60 + m)*60), ' m/s')
