seleccion = -1
ValorBTC = 4606954.55
km = 0
LoA = "a" 
precioA = 0
precioL = 0


## REALIZAR VALIDACIONES
while seleccion != 6 : 
    print("1. Ingresar Kilometros: ( km=x) ")
    print("2. Ingresar Precio de Vuelos: )") 
    print("3. Calcular todos los costos.")
    print("4. Informar Resultados.") 
    print("5. Carga forzada de datos.") 
    print("6 .Salir.")

    seleccion = int(input(" Ingrese una opcion: "))


    if seleccion == 1:
        km = int(input("1. Ingresar Kilómetros: "))

    if seleccion == 2:
        LoA = input("2. Ingresar Precio de Vuelos: (Aerolíneas=y, Latam=z)")
        if LoA == y:
            precioA = int(input("Precio vuelo Aerolíneas: "))
        else:    
            precioL = int(input("Precio vuelo Latam: "))
    
    if seleccion == 3:
        print("3. Calcular todos los costos:")
        print("Aerolíneas:")
        print("    a) Tarjeta de débito (descuento 10%): ", precioA * 0.9 )
        print("    b) Tarjeta de crédito (interés 25%): ", precioA * 1.25 )
        print("    c) Bitcoin (1BTC -> ", ValorBTC, " Pesos Argentinos)", precioA / ValorBTC  )
        print("    d) Mostrar precio por km (precio unitario)", precioA / km  )
        print("    e) Mostrar diferencia de precio ingresada (Latam - Aerolíneas)", precioL - precioA  )
        print("Latam:")
        print("    a) Tarjeta de débito (descuento 10%): ", precioL * 0.9 )
        print("    b) Tarjeta de crédito (interés 25%)", precioL * 1.25   )
        print("    c) Bitcoin (1BTC -> ", ValorBTC, " Pesos Argentinos)", precioL / ValorBTC  )
        print("    d) Mostrar precio por km (precio unitario)",  precioL / km  )
        print("    e) Mostrar diferencia de precio ingresada (Latam - Aerolíneas)", precioL - precioA  )

    if seleccion == 4: ## Mostrar datos luego de carga
        print("4. Informar Resultados: ") 
        print("Latam:")
        print("   a) Precio con tarjeta de débito: ",  precioL * 0.9 ) 
        print("   b) Precio con tarjeta de crédito: ",  precioL * 1.25 )
        print("   c) Precio pagando con bitcoin : ",  precioL / ValorBTC  )
        print("   d) Precio unitario: ",  precioL / km )

        print("Aerolíneas:")
        print("    a) Precio con tarjeta de débito: ", precioA * 0.9 ) 
        print("    b) Precio con tarjeta de crédito: ", precioA * 1.25 )
        print("    c) Precio pagando con bitcoin : ", precioA / ValorBTC )
        print("    d) Precio unitario: ", precioA / km)
        print("La diferencia de precio es : ", ((precioL - precioA)**2)**0.5  ) 

    if seleccion == 5:
        km = int(input("1. Ingresar Kilómetros: " ))
        print("2. Ingresar Precio de Vuelos:" )
        precioA = int(input("Precio vuelo Aerolíneas: "))
        precioL = int(input("Precio vuelo Latam: "))

        print("Latam:")
        print("   a) Precio con tarjeta de débito: ",  precioL * 0.9 ) 
        print("   b) Precio con tarjeta de crédito: ",  precioL * 1.25 )
        print("   c) Precio pagando con bitcoin : ",  precioL / ValorBTC  )
        print("   d) Precio unitario: ",  precioL / km )

        print("Aerolíneas:")
        print("    a) Precio con tarjeta de débito: ", precioA * 0.9 ) 
        print("    b) Precio con tarjeta de crédito: ", precioA * 1.25 )
        print("    c) Precio pagando con bitcoin : ", precioA / ValorBTC )
        print("    d) Precio unitario: ", precioA / km)
        print("La diferencia de precio es : ", ((precioL - precioA)**2)**0.5  ) 
         



