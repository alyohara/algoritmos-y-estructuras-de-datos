const T = "Algoritmos y Estructuras de Datos - Teorias";
const L = "Lectures-2022/Lectures-2022";

const units = [
  {
    id: 1,
    title: "Introduccion, algoritmos y pseudocodigo",
    short: "Algoritmos y pseudocodigo",
    summary: "Que es un algoritmo, como describirlo antes de programar y como representarlo con pseudocodigo y diagramas de flujo.",
    topics: [
      "Algoritmos: entrada, proceso y salida",
      "Propiedades: finitud, precision y verificabilidad",
      "Pseudocodigo: secuencias, decisiones y repeticiones",
      "Diagramas de flujo y acciones primitivas",
      "Analisis del problema: entrada esperada y casos de prueba",
      "Metodologia: analizar, disenar, implementar y probar"
    ],
    tip: "Antes de escribir una sola linea de Python, anota los casos de entrada y la salida esperada de tu algoritmo.",
    theory: [
      "Un algoritmo es una secuencia finita y ordenada de pasos que transforma una entrada en una salida. Se define primero en lenguaje natural o pseudocodigo para concentrarse en la logica: que datos recibe, que operaciones realiza y que resultado devuelve, sin preocuparse todavia por la sintaxis de un lenguaje.",
      "Todo algoritmo debe cumplir propiedades basicas: finitud (terminar en un numero finito de pasos), precision (cada paso definido sin ambiguedad), entrada y salida claras, y efectividad (cada accion ser executable). En pseudocodigo las estructuras son las mismas que despues se traducen a Python: SECUENCIA para ordenar pasos, SI...ENTONCES...SINO para decisiones y MIENTRAS o PARA para repeticiones.",
      "Resolver un problema sigue cuatro pasos: analizar (entender que entra y que debe salir), disenar (elegir la estrategia y escribirla en pseudocodigo), implementar (pasarla a lenguaje) y probar con casos normales, borde y error. El diagrama de flujo lo representa con simbolos: elipse para inicio y fin, rectangulo para una accion primitiva, rombo para una decision y flechas para el flujo. Correr el algoritmo en mesa con valores a mano anticipa errores antes de ejecutar el programa."
    ],
    concepts: [
      "Entrada: datos que el algoritmo recibe del exterior.",
      "Proceso: operaciones, calculos y decisiones sobre esos datos.",
      "Salida: resultado observable y verificable.",
      "Una decision elige entre caminos segun una condicion; una repeticion ejecuta pasos mientras se cumpla una condicion.",
      "Finitud: el algoritmo siempre termina; precision: cada paso esta definido sin ambiguedad.",
      "Caso borde: situacion limite (lista vacia, valor negativo) que conviene probar siempre."
    ],
    caption: "Ejemplo: clasificar una temperatura sin pedir datos por teclado.",
    code: "temperatura = -3\n\nif temperatura < 0:\n    print('Bajo cero')\nelif temperatura <= 25:\n    print('Templado')\nelse:\n    print('Caluroso')",
    exercise: {
      title: "Clasificador de temperatura",
      prompt: "Escribi un algoritmo que reciba una temperatura e informe si esta bajo cero, en rango templado (0 a 25) o caluroso. Primero escribi el pseudocodigo y despues pasalo a Python.",
      solution: "temperatura = float(input('Temperatura: '))\n\nif temperatura < 0:\n    print('Bajo cero')\nelif temperatura <= 25:\n    print('Templado')\nelse:\n    print('Caluroso')"
    },
    resources: [
      ["PDF", "Introduccion a la programacion (parte 1)", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase1-Introduccion-parte1.pdf`],
      ["PDF", "Pseudocodigo y diagramas de flujo (parte 2)", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase1-Pseudocodigo-Diagramas-parte2.pdf`],
      ["PDF", "Ejercicios en clase", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase1-Ejercicios_en_Clase.pdf`],
      ["PDF", "Practica 1: diagramas de flujo", "Clase 1 / Practica", `${T}/Clase 1/Practica/Practica1.pdf`],
      ["PDF", "Practica 1 - resolucion", "Clase 1 / Practica", `${T}/Clase 1/Practica/Prog_I_TP1-R .pdf`],
      ["PDF", "Practica 2: pseudocodigo", "Clase 1 / Practica", `${T}/Clase 1/Practica/Prog_I_TP2.pdf`],
      ["PDF", "Practica 2 - resolucion", "Clase 1 / Practica", `${T}/Clase 1/Practica/Prog_I_TP2_RES.pdf`]
    ],
    quiz: [
      { q: "Un algoritmo se compone fundamentalmente de:", a: ["Entrada, proceso y salida", "Variables, listas y funciones", "Errores, excepciones y tests", "Teclado, mouse y pantalla"], correct: 0, note: "Toda transformacion recibe datos, los procesa y devuelve un resultado." },
      { q: "Cual es una propiedad obligatoria de todo algoritmo?", a: ["Que sea rapido", "Que sea corto", "Que termine en tiempo finito", "Que use Python"], correct: 2, note: "La finitud garantiza que el algoritmo no se ejecuta indefinidamente." },
      { q: "El pseudocodigo sirve para:", a: ["Ejecutar el programa", "Describir la logica antes de programar", "Compilar el codigo", "Reemplazar a Python"], correct: 1, note: "Permite concentrarse en la solucion antes de la sintaxis." },
      { q: "En un diagrama de flujo, el rombo representa:", a: ["Inicio", "Fin", "Una decision", "Una impresion"], correct: 2, note: "El rombo bifurca el flujo segun una condicion verdadera o falsa." },
      { q: "Una accion primitiva es aquella que:", a: ["No se puede descomponer en otras mas simples", "Tarda mucho", "Requiere una libreria", "Solo funciona con números"], correct: 0, note: "Ejemplos: asignar un valor, comparar dos numeros, imprimir." },
      { q: "MIENTRAS (condicion) ... FIN MIENTRAS en pseudocodigo equivale en Python a:", a: ["if", "while", "def", "return"], correct: 1, note: "while repite un bloque mientras la condicion sea verdadera." }
    ]
  },
  {
    id: 2,
    title: "Sintaxis basica de Python",
    short: "Sintaxis basica",
    summary: "Variables, tipos basicos, operadores, entrada y salida, y la estructura de un programa Python.",
    topics: [
      "Identificadores, variables y asignacion",
      "Tipos: int, float, str y bool",
      "Operadores aritmeticos, de comparacion y logicos",
      "Indentacion, comentarios, input() y print()",
      "Cadenas: longitud, indexacion y f-strings",
      "De texto a numero: int(), float() y str()"
    ],
    tip: "Python no usa punto y coma ni llaves: la indentacion (espacios al inicio) define los bloques de codigo.",
    theory: [
      "Una variable es un nombre que referencia un objeto en memoria; el tipo lo determina el objeto, no la declaracion. Los operadores de comparacion (==, <, !=) devuelven bool, mientras que el operador = solo asigna valores. La funcion print() muestra resultados e input() lee texto desde el teclado, que casi siempre hay que convertir con int() o float().",
      "Python delimita los bloques con indentacion (4 espacios por convencion): lo que queda dentro de un if, for, while o def se anida un nivel mas y una indentacion incorrecta levanta IndentationError. Los identificadores comienzan con letra o guion bajo, nunca con un numero, y no pueden ser palabras reservadas como if, for o def. Los comentarios con # se ignoran al ejecutar.",
      "Los tipos basicos son int, float, str y bool. Los operadores aritmeticos (+, -, *, /, //, %, **) respetan la precedencia matematica, la division / siempre devuelve flotante y // trunca hacia abajo. Las comparaciones devuelven bool, no numeros. Ojo con input(): siempre devuelve cadena, hay que convertir con int() o float() antes de operar, y con str() para concatenar."
    ],
    concepts: [
      "= asigna; == compara valores.",
      "La division / siempre devuelve flotante; // devuelve la division entera.",
      "Los comentarios comienzan con # y el interprete los ignora.",
      "Los bloques se delimitan por indentacion, no por caracteres especiales.",
      "input() siempre entrega str: convertir con int() o float() antes de calcular.",
      "f'Texto {variable}' (f-string) incrusta valores dentro de una cadena."
    ],
    caption: "Ejemplo: variables, tipos y operaciones basicas.",
    code: "nombre = 'UNaB'\nanio = 2022\nmaterias = ['Algoritmos', 'Estructuras']\n\nprint(nombre, type(nombre))\nprint('Anio que viene:', anio + 1)\nprint('Primera materia:', materias[0])\nprint('Cantidad:', len(materias))\nprint('7 // 2 =', 7 // 2, '| 7 / 2 =', 7 / 2)",
    exercise: {
      title: "Calculadora de promedio",
      prompt: "Leer tres notas (podes hardcodearlas o usar input) y mostrar el promedio y si el alumno aprobo (promedio >= 4).",
      solution: "nota1 = 7\nnota2 = 5\nnota3 = 6\n\npromedio = (nota1 + nota2 + nota3) / 3\nprint('Promedio:', promedio)\n\nif promedio >= 4:\n    print('Aprobado')\nelse:\n    print('Desaprobado')"
    },
    resources: [
      ["IPYNB", "Sintaxis basica de Python", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase_1_Syntaxis_Basica.ipynb`],
      ["IPYNB", "Ejercicios de sintaxis", "Clase 3 / Practica", `${T}/Clase 3/Practica/Clase1_Exercises.ipynb`],
      ["PDF", "Introduccion a la programacion", "Clase 1 / Teoria", `${T}/Clase 1/Teoría/Clase1-Introduccion-parte1.pdf`],
      ["TXT", "Ejercicios de parcial con solucion", "Material de parcial", `${L}/MIX/ejercicios python parcial.txt`],
      ["PPTX", "Practica 1: diagramas y pseudocodigo", "Slides", `${L}/Lecture-01--03/slides/Clase1-Introduccion-parte1.pptx`]
    ],
    quiz: [
      { q: "Cual es un identificador valido en Python?", a: ["2do_valor", "mi-variable", "nombre_alumno", "class"], correct: 2, note: "No puede empezar con numero ni contener guiones; 'class' es palabra reservada." },
      { q: "Que imprime print(7 / 2)?", a: ["3", "3.5", "7/2", "Error"], correct: 1, note: "El operador / siempre produce un numero flotante." },
      { q: "El operador == se usa para:", a: ["Asignar un valor", "Comparar valores", "Comentar codigo", "Dividir"], correct: 1, note: "= asigna; == evalua si dos valores son iguales." },
      { q: "Que resultado produce '5' + '3'?", a: ["8", "'53'", "Error de tipo", "53"], correct: 1, note: "Entre strings + concatena; para sumar hay que convertir a numero." },
      { q: "Que determina la indentacion en Python?", a: ["El color del editor", "Los bloques de codigo", "El tipo de variable", "La velocidad"], correct: 1, note: "Los espacios al inicio definen que instrucciones pertenecen a un if, for, def, etc." },
      { q: "type(3 == 3) devuelve:", a: ["int", "str", "bool", "None"], correct: 2, note: "Toda comparacion devuelve un valor booleano." }
    ]
  },
  {
    id: 3,
    title: "Tipos de datos y contenedores",
    short: "Datos y contenedores",
    summary: "Representacion de datos y uso de listas, tuplas, conjuntos, diccionarios y comprensiones.",
    topics: [
      "Mutabilidad e inmutabilidad",
      "Listas y tuplas: indices, slicing y metodos",
      "Conjuntos: sin repetidos, operaciones de pertenencia",
      "Diccionarios: clave/valor y comprension de listas",
      "Indexacion desde 0 y slicing lista[a:b]",
      "Referencias vs copias y comprensiones"
    ],
    tip: "Elegir el contenedor correcto simplifica el algoritmo: lista para orden, conjunto para pertenencia, diccionario para clave/valor.",
    theory: [
      "Los contenedores agrupan valores y se eligen segun que importa: si el orden (lista, tupla), si hay repetidos (conjunto) o si se accede por una clave (diccionario). Las listas son mutables, las tuplas y las cadenas no; los conjuntos y diccionarios asocian elementos unicos, los primeros sin posicion y los segundos con clave propia.",
      "Las posiciones arrancan en 0 y el indice -1 refiere al ultimo elemento. El slicing lista[a:b] toma desde a hasta b sin incluir b, y un tercer termino lista[a:b:c] fija el paso. Como cadenas y tuplas son inmutables, operar sobre ellas devuelve una copia nueva; en cambio los metodos de la lista (append, insert, pop, sort) modifican el original.",
      "En un diccionario se itera con items() para recorrer clave y valor, y las claves deben ser unicas e inmutables (str, int o tupla). Los conjuntos responden rapido la pregunta 'esta elemento?' y ofrecen union |, interseccion & y diferencia -. Ojo con las referencias: b = a no copia la lista sino que apunta a la misma; para una copia independiente hay que usar b = a.copy()."
    ],
    concepts: [
      "Lista: ordenada, mutable, admite repetidos.",
      "Tupla: ordenada e inmutable; ideal para datos fijos como coordenadas.",
      "Conjunto: elementos unicos sin posicion; consulta de pertenencia en O(1).",
      "Diccionario: asocia claves unicas con valores; se accede por clave.",
      "lista[a:b] devuelve un fragmento; el limite b no se incluye.",
      "b = a crea un alias; b = a.copy() crea una copia independiente."
    ],
    caption: "Ejemplo: contenedores y operaciones de pertenencia.",
    code: "productos = ['lapiz', 'regla', 'lapiz', 'cuaderno']\ndistintos = set(productos)\n\nprint('Todos:', productos)\nprint('Sin repetidos:', distintos)\nprint('Cantidad:', len(distintos))\n\nprecios = {'lapiz': 150, 'cuaderno': 900}\nprint('Precio lapiz:', precios['lapiz'])\nprint('Tupla inmutable:', (1, 2, 3))",
    exercise: {
      title: "Inventario sin repetidos",
      prompt: "A partir de una lista de productos repetidos, obtene el conjunto de productos distintos, cuantos hay y si 'lapiz' esta en el inventario.",
      solution: "productos = ['lapiz', 'regla', 'lapiz', 'cuaderno', 'regla']\ndistintos = set(productos)\n\nprint('Distintos:', distintos)\nprint('Cantidad:', len(distintos))\nprint('Tiene lapiz?', 'lapiz' in distintos)"
    },
    resources: [
      ["PDF", "Tipos de datos", "Clase 2 / Teoria", `${T}/Clase 2/Teoria/Clase4-Tipos_de_Datos.pdf`],
      ["PDF", "Tipos definidos por el usuario / contenedores", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase5-Tipos_de_Datos-Cont.pdf`],
      ["IPYNB", "Contenedores", "Clase 2 / Practica", `${T}/Clase 2/Practica/Clase_1_Contenedores.ipynb`],
      ["IPYNB", "Contenedores (teoria)", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_5_Contenedores.ipynb`],
      ["PDF", "Practica 2: expresiones y tipos", "Clase 2 / Practica", `${T}/Clase 2/Practica/Practica2.pdf`],
      ["PNG", "Mutabilidad en Python", "Clase 2 / Practica", `${T}/Clase 2/Practica/python_mutable.png`]
    ],
    quiz: [
      { q: "Cual contenedor es inmutable?", a: ["Lista", "Diccionario", "Tupla", "Conjunto"], correct: 2, note: "Las tuplas no permiten modificar sus elementos una vez creadas." },
      { q: "Que representa un diccionario?", a: ["Una lista ordenada", "Pares clave-valor con claves unicas", "Valores sin repetir", "Un conjunto ordenado"], correct: 1, note: "Cada clave es unica y apunta a un valor." },
      { q: "set([1, 1, 2, 3, 3]) devuelve:", a: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "{1: 1, 2: 3}"], correct: 1, note: "Los conjuntos eliminan duplicados y se notan con llaves." },
      { q: "Que imprime [10, 20, 30][1]?", a: ["10", "20", "30", "Error"], correct: 1, note: "Los indices comienzan en 0: posicion 1 es el segundo elemento." },
      { q: "range(3) genera los valores:", a: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3"], correct: 1, note: "range(n) va de 0 hasta n-1." },
      { q: "La principal diferencia entre lista y tupla es:", a: ["El tipo de datos que guardan", "Que la tupla es inmutable", "Que la lista no tiene indices", "Que la tupla admite duplicados"], correct: 1, note: "Ambas son ordenadas; cambia la mutabilidad." }
    ]
  },
  {
    id: 4,
    title: "Errores, excepciones y funciones",
    short: "Errores y funciones",
    summary: "Depuracion, manejo de errores con try/except y modularizacion de soluciones con funciones.",
    topics: [
      "Errores sintacticos vs errores de ejecucion",
      "Excepciones: try, except, raise",
      "Funciones: parametros, retorno y documentacion",
      "Alcance de variables: local, global y nonlocal",
      "Bloques else y finally",
      "Funciones con argumentos por defecto y pruebas"
    ],
    tip: "Una funcion debe tener una responsabilidad clara, entradas predecibles y un resultado verificable.",
    theory: [
      "Los errores de sintaxis los detecta el interprete antes de ejecutar; los errores de ejecucion (excepciones) aparecen durante la corrida y pueden atraparse con try/except. Las funciones encapsulan una tarea para reutilizarla y probarla de forma aislada, y raise permite comunicar condiciones invalidas al llamador en lugar de devolver resultados raros.",
      "El bloque try contiene el codigo que puede fallar, except captura la excepcion esperada (por ejemplo except ValueError), else se ejecuta solo si no hubo error y finally se ejecuta siempre, haya error o no. Atrapar solo lo esperado: un except demasiado general esconde errores nuevos. raise ValueError('mensaje') comunica una condicion invalida al que llama la funcion.",
      "Una funcion se define con def, recibe parametros, devuelve valores con return y puede tener argumentos por defecto. return entrega un resultado y corta la ejecucion; print solo muestra por pantalla y devuelve None. Las variables creadas dentro de la funcion son locales y desaparecen al salir: probar cada funcion por separado con casos simples la vuelve confiable."
    ],
    concepts: [
      "ZeroDivisionError, NameError, TypeError son excepciones comunes.",
      "try protege un bloque; except maneja la situacion esperada.",
      "return entrega el resultado y finaliza la funcion; sin return devuelve None.",
      "Las variables definidas dentro de una funcion tienen alcance local.",
      "else se ejecuta si no hubo excepcion; finally corre siempre.",
      "Argumento por defecto: parametro opcional declarado en la firma de la funcion."
    ],
    caption: "Ejemplo: funcion con validacion y manejo de excepciones.",
    code: "def dividir(a, b):\n    if b == 0:\n        raise ValueError('No se puede dividir por cero')\n    return a / b\n\ntry:\n    print(dividir(10, 0))\nexcept ValueError as error:\n    print('Error controlado:', error)\n\nprint('10 / 4 =', dividir(10, 4))",
    exercise: {
      title: "Division segura",
      prompt: "Escribi una funcion dividir(a, b) que informe un error claro cuando b sea cero, y que sea llamada dentro de un try/except.",
      solution: "def dividir(a, b):\n    if b == 0:\n        raise ValueError('No se puede dividir por cero')\n    return a / b\n\ntry:\n    print(dividir(10, 0))\nexcept ValueError as error:\n    print(error)"
    },
    resources: [
      ["PDF", "Errores y depuracion", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Errors_y_Functions.pdf`],
      ["IPYNB", "Errores y funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Errors_y_Functions.ipynb`],
      ["PDF", "Excepciones y funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Excepciones_y_Functiones.pdf`],
      ["IPYNB", "Excepciones y funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Clase_2_Excepciones_y_Functiones.ipynb`],
      ["PDF", "Funciones y modularizacion", "Clase 4 / Teoria", `${T}/Clase 4/Teoria/Clase6-Funciones_Modularizacion.pdf`],
      ["IPYNB", "Ejercicios en clase: funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Ejercicios_en_Clase-Funciones.ipynb`]
    ],
    quiz: [
      { q: "Que hace la sentencia raise?", a: ["Atrapa un error", "Lanza una excepcion", "Detiene el programa siempre", "Comenta una linea"], correct: 1, note: "raise comunica una condicion de error que el llamador puede manejar con try/except." },
      { q: "Un error IndentationError es:", a: ["De sintaxis", "De ejecucion", "De logica", "De compilacion"], correct: 0, note: "La indentacion incorrecta se detecta antes de ejecutar." },
      { q: "Que devuelve una funcion que no usa return?", a: ["0", "False", "None", "Una excepcion"], correct: 2, note: "Python devuelve None de forma implicita." },
      { q: "try / except se utiliza para:", a: ["Evitar errores de sintaxis", "Manejar excepciones en tiempo de ejecucion", "Comentar codigo", "Ordenar listas"], correct: 1, note: "Permite que el programa continue de forma controlada ante un error esperado." },
      { q: "Una variable definida dentro de una funcion tiene alcance:", a: ["Global", "Local a la funcion", "Modular", "Estatico"], correct: 1, note: "Se crea al entrar y desaparece al salir; protege al codigo exterior." },
      { q: "Dividir un numero entero por cero en Python levanta:", a: ["ZeroDivisionError", "ValueError", "TypeError", "IndexError"], correct: 0, note: "Es la excepcion nativa para esa situacion." }
    ]
  },
  {
    id: 5,
    title: "Recursion",
    short: "Recursion",
    summary: "Funciones que se llaman a si mismas, casos base y problemas tipicos resueltos de forma recursiva.",
    topics: [
      "Casos base y llamada recursiva",
      "Factorial y Fibonacci",
      "Pila de llamadas y costo en memoria",
      "Recursion vs iteracion",
      "Profundidad de recursion y RecursionError",
      "Cuando conviene la recursion: jerarquias"
    ],
    tip: "Toda funcion recursiva necesita un caso base que devuelva un resultado sin volver a llamarse; si no, nunca termina.",
    theory: [
      "Una funcion recursiva resuelve un problema llamandose a si misma con una entrada mas pequena, hasta alcanzar un caso base. Facilita la escritura de algoritmos sobre estructuras jerarquicas, pero consume memoria porque cada llamada pendiente se guarda en la pila de ejecucion; Python corta la recursion con RecursionError si hay demasiadas llamadas.",
      "Toda recursion tiene dos partes: el caso base, que responde sin volver a llamarse, y el caso recursivo, que reduce el problema hasta alcanzar ese base. Cada llamada pendiente se guarda en la pila de ejecucion con sus parametros y variables locales; Python corta la recursion con RecursionError cuando se supera el limite de profundidad (unas 1000 llamadas por defecto).",
      "factorial(n) = n * factorial(n-1) con factorial(0) = 1 es el ejemplo tipico, y Fibonacci muestra la trampa: fib(n) = fib(n-1) + fib(n-2) vuelve a calcular los mismos valores muchas veces y crece exponencial. La recursion brilla sobre estructuras jerarquicas (arboles, directorios, combinaciones), pero para problemas lineales un while suele ser mas economico en memoria."
    ],
    concepts: [
      "Caso base: condicion que responde sin recursarse.",
      "Llamada recursiva: el problema se reduce hasta llegar al caso base.",
      "Cada llamada ocupa un lugar en la pila (stack) de ejecucion.",
      "La recursion exponencial (Fibonacci sin memoizacion) repite trabajo.",
      "Sin caso base la recursion infinita termina en RecursionError.",
      "Cada llamada pendiente consume memoria: la recursion profunda agota la pila."
    ],
    caption: "Ejemplo: factorial recursivo.",
    code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return factorial(n - 1) * n\n\nfor i in range(6):\n    print(i, '->', factorial(i))",
    exercise: {
      title: "Suma de digitos con recursion",
      prompt: "Escribe una funcion recursiva que sume los digitos de un numero entero positivo. Ejemplo: suma_digitos(12345) debe devolver 15.",
      solution: "def suma_digitos(n):\n    if n < 10:\n        return n\n    return (n % 10) + suma_digitos(n // 10)\n\nprint(suma_digitos(12345))"
    },
    resources: [
      ["IPYNB", "Ejercicios en clase: funciones y recursion", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Ejercicios_en_Clase-Funciones.ipynb`],
      ["PDF", "Ejercicios en clase: funciones", "Clase 3 / Teoria", `${T}/Clase 3/Teoria/Ejercicios_en_Clase-Funciones.pdf`],
      ["IPYNB", "Practica 4: funciones", "Clase 4 / Practica", `${T}/Clase 4/Practica/Practica4.ipynb`],
      ["TXT", "Mas ejercicios (chocolate y digitos)", "Ejercicios", `mas ejercicios.txt`],
      ["TXT", "Mas ejercicios con solucion", "Ejercicios", `mas ejercicios con solución.txt`],
      ["TXT", "Ejercicios de parcial", "Material de parcial", `${L}/MIX/ejercicios python parcial.txt`]
    ],
    quiz: [
      { q: "Que evita el caso base en una funcion recursiva?", a: ["Las variables globales", "La recursion infinita", "Los errores de sintaxis", "Los bucles"], correct: 1, note: "Sin caso base la funcion se llama a si misma para siempre." },
      { q: "Cual es el valor de factorial(5)?", a: ["24", "120", "60", "25"], correct: 1, note: "5! = 5 x 4 x 3 x 2 x 1 = 120." },
      { q: "El principal costo de la recursion respecto de la iteracion es:", a: ["Usa mas memoria (pila de llamadas)", "Es siempre mas lenta", "No puede devolver valores", "Necesita listas"], correct: 0, note: "Cada llamada pendiente se conserva en el stack hasta que retorna." },
      { q: "Si una recursion no tiene caso base, Python lanza:", a: ["ZeroDivisionError", "RecursionError", "ValueError", "StopIteration"], correct: 1, note: "Se supera el limite de profundidad de la pila." },
      { q: "En Fibo(n) = Fibo(n-1) + Fibo(n-2) con F(0)=F(1)=1, cuanto vale F(4)?", a: ["3", "4", "5", "8"], correct: 2, note: "F(2)=2, F(3)=3, F(4)=5." },
      { q: "La recursion es natural para resolver problemas:", a: ["De texto largo", "Con estructuras jerarquicas", "De numeros grandes", "De archivos"], correct: 1, note: "Arboles, directories y combinaciones se expresan bien de forma recursiva." }
    ]
  },
  {
    id: 6,
    title: "Modulos, clases y objetos",
    short: "Modulos y POO",
    summary: "Organizacion del codigo en modulos y modelado de entidades mediante clases e instancias.",
    topics: [
      "Modulos: import y espacios de nombres",
      "Clases: atributos, metodos y constructor __init__",
      "self y las instancias",
      "Encapsulamiento y validacion de invariantes",
      "from ... import y el bloque main",
      "Metodos especiales __init__ y __str__"
    ],
    tip: "Antes de escribir metodos, defini que representa el objeto y que operaciones debe permitir.",
    theory: [
      "Un modulo agrupa funciones y datos reutilizables que se traen con import. Una clase combina estado (atributos) y comportamiento (metodos) para crear muchas instancias iguales: __init__ fija el estado inicial, self identifica a la instancia que recibe el metodo, y validar en el constructor evita objetos inconsistentes.",
      "import trae el modulo completo (import math) y from math import sqrt trae solo lo que se usa; el codigo que debe ejecutarse unicamente al correr el archivo se protege con if __name__ == '__main__':. La libreria estandor ya trae herramientas: math para funciones matematicas, random para valores aleatorios y os/pathlib para trabajar con archivos y rutas.",
      "La clase es el plano y cada objeto una instancia concreta: los atributos guardan estado y los metodos definen comportamiento. __init__ se ejecuta al crear el objeto y valida el estado inicial, self identifica a la instancia que recibe cada metodo, y __str__ define como se la muestra con print(). Validar en el constructor evita objetos en estados invalidos y agrupar datos con su comportamiento reduce codigo repetido."
    ],
    concepts: [
      "import math trae el modulo; from math import sqrt trae solo una parte.",
      "__init__ se ejecuta al crear la instancia.",
      "self referencia el objeto sobre el que se llama el metodo.",
      "Encapsular la logica dentro de la clase facilita probar y reutilizar.",
      "if __name__ == '__main__': separa el codigo ejecutable del reutilizable.",
      "__str__ define la representacion en texto del objeto al hacer print(objeto)."
    ],
    caption: "Ejemplo: clase Rectangulo con validacion.",
    code: "class Rectangulo:\n    def __init__(self, ancho, alto):\n        if ancho <= 0 or alto <= 0:\n            raise ValueError('Medidas positivas')\n        self.ancho = ancho\n        self.alto = alto\n\n    def area(self):\n        return self.ancho * self.alto\n\nr = Rectangulo(4, 3)\nprint('Area:', r.area())",
    exercise: {
      title: "Cuenta bancaria simple",
      prompt: "Crea una clase Cuenta con saldo inicial y un metodo depositar que rechace montos no positivos, mas un metodo extraer que no permita dejar el saldo en negativo.",
      solution: "class Cuenta:\n    def __init__(self, saldo=0):\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        if monto <= 0:\n            raise ValueError('El monto debe ser positivo')\n        self.saldo += monto\n\n    def extraer(self, monto):\n        if monto > self.saldo:\n            raise ValueError('Saldo insuficiente')\n        self.saldo -= monto\n\ncuenta = Cuenta()\ncuenta.depositar(500)\ncuenta.extraer(200)\nprint('Saldo:', cuenta.saldo)"
    },
    resources: [
      ["IPYNB", "Modulos y clases", "Clase 6 / Teoria", `${T}/Clase 6/Teoria/Clase_3_Modules_y_Classes.ipynb`],
      ["IPYNB", "Modulos y objetos (encapsulamiento)", "Clase 6 / Teoria", `${T}/Clase 6/Teoria/Clase_9_Modulos_y_Objetos.ipynb`],
      ["IPYNB", "Funciones y objetos", "Clase 4 / Practica", `${T}/Clase 4/Practica/Clase_6_Funciones_y_Objetos.ipynb`],
      ["PDF", "Funciones y modularizacion", "Clase 4 / Teoria", `${T}/Clase 4/Teoria/Clase6-Funciones_Modularizacion.pdf`],
      ["PDF", "Adicional: ejercicios de clases", "Complementario", `Adicional Clases.pdf`],
      ["PDF", "Lectura adicional: clases y objetos", "Complementario", `Clases y Objetos - Lectura Adicional.pdf`],
      ["TXT", "Ejercicios de clases con solucion", "Ejercicios", `ejercicios clases.txt`]
    ],
    quiz: [
      { q: "Que instruccion trae un modulo completo?", a: ["import", "include", "using", "require"], correct: 0, note: "import math; from math import sqrt es la variante selectiva." },
      { q: "El metodo __init__ se ejecuta:", a: ["Al importar la clase", "Al crear una instancia", "Al borrar la instancia", "Solo una vez por programa"], correct: 1, note: "Es el constructor: inicializa los atributos de cada objeto nuevo." },
      { q: "Que representa self dentro de un metodo?", a: ["La clase padre", "La instancia que llama al metodo", "Un modulo", "Una variable global"], correct: 1, note: "Python pasa automaticamente la instancia como primer argumento." },
      { q: "Cual de estos es un error de logica valido levantar con raise?", a: ["ValueError('monto negativo')", "IndentationError", "SyntaxError", "TabError"], correct: 0, note: "raise se usa con excepciones; las otras las genera el interprete." },
      { q: "Una clase es basicamente:", a: ["Una lista con metodos", "Un plano que combina atributos y metodos", "Un archivo .txt", "Un bucle"], correct: 1, note: "La clase define el modelo; cada instancia es un objeto concreto." },
      { q: "Que pasa si se llama un metodo sin la instancia?", a: ["Funciona igual", "Falta el argumento self", "Se crea otra clase", "Se borra el modulo"], correct: 1, note: "Los metodos de instancia reciben self como primer parametro." }
    ]
  },
  {
    id: 7,
    title: "Estructuras de datos lineales",
    short: "Pilas, colas y listas",
    summary: "Tipos de datos abstractos: pilas (LIFO), colas (FIFO) y listas enlazadas con nodos.",
    topics: [
      "Tipos de datos abstractos (TAD)",
      "Pila: push, pop, is_empty y top",
      "Cola: enqueue y dequeue",
      "Listas enlazadas: nodos, iteradores e indices",
      "Operaciones basicas y su costo",
      "Elegir estructura segun el acceso necesario"
    ],
    tip: "Si el ultimo en entrar es el primero en salir, es pila; si el primero en entrar es el primero en salir, es cola.",
    theory: [
      "Un TAD define que operaciones ofrece una estructura sin importar como se implemente. La pila restringe el acceso al ultimo elemento agregado (LIFO) y la cola atiende al mas antiguo (FIFO). Las listas enlazadas guardan nodos que apuntan al siguiente, permitiendo inserciones sin desplazar todos los elementos como hace la lista de Python.",
      "La pila trabaja en un solo extremo: push apila, pop desapila y top (peek) mira el tope, siempre el ultimo en llegar (LIFO). La cola entra por un extremo y sale por el otro (FIFO): enqueue agrega al final y dequeue atiende desde el inicio. En Python se logran con listas, aunque collections.deque es mejor para colas porque quitar desde el inicio de una lista cuesta O(n).",
      "La lista enlazada guarda nodos con dato y referencia al siguiente: insertar al frente es O(1) porque no desplaza nada, pero llegar al i-esimo elemento exige recorrer i nodos. La lista de Python es un arreglo dinamico: append es O(1) amortizado, mientras que insert(0, x) es O(n). Si se accede por posicion conviene la lista; si se entra y sale frecuentemente por los extremos, deque o lista enlazada."
    ],
    concepts: [
      "Pila: append agrega al tope, pop extrae del tope.",
      "Cola: enqueue agrega al final, dequeue extrae del inicio.",
      "Nodo: guarda un elemento y una referencia al siguiente.",
      "Toda operacion debe contemplar el caso de la estructura vacia.",
      "LIFO: lo ultimo en entrar es lo primero en salir (como platos apilados).",
      "deque: doblemente enlazada; agrega y quita en O(1) en ambos extremos."
    ],
    caption: "Ejemplo: pila y cola con listas de Python.",
    code: "# Pila (LIFO)\npila = []\npila.append('primer elemento')\npila.append('segundo elemento')\nprint('Tope:', pila[-1])\nprint('Extraido:', pila.pop())\n\n# Cola (FIFO): entra al final, sale del inicio\ncola = []\ncola.append('paciente 1')\ncola.append('paciente 2')\nprint('Atiende:', cola.pop(0))\nprint('Quedan:', cola)",
    exercise: {
      title: "Verificar parentesis balanceados",
      prompt: "Usa una pila para comprobar si una expresion tiene parentesis (, ), [ ] y { } balanceados.",
      solution: "def balanceados(expresion):\n    pares = {')': '(', ']': '[', '}': '{'}\n    pila = []\n    for caracter in expresion:\n        if caracter in '([{':\n            pila.append(caracter)\n        elif caracter in pares:\n            if not pila or pila.pop() != pares[caracter]:\n                return False\n    return not pila\n\nprint(balanceados('(a + b) * (c - d)'))\nprint(balanceados('(a + b]'))"
    },
    resources: [
      ["IPYNB", "Estructuras de datos lineales (TAD)", "Clase 4 / Teoria", `Clase_4_Est_de_Datos_Lineales.ipynb`],
      ["IPYNB", "Repaso: estructuras lineales", "Clase 5 / Teoria", `${T}/Clase 5/Teoria/Clase_5_Repaso-Est_de_Datos_Lineales-PRACTICA.ipynb`],
      ["IPYNB", "Practica de repaso", "Clase 5 / Practica", `${T}/Clase 5/Practica/Clase_5_Repaso-PRACTICA.ipynb`],
      ["PDF", "Adicional: pilas y colas", "Complementario", `Adcional Pilas y Colas.pdf`],
      ["PDF", "Practica 6: ejercicios de pilas y colas", "Complementario", `practica-6-ejercicios-sobre-pilas-y-colas.pdf`],
      ["PY", "Ejercicio: operar con una lista", "Practica adicional", `${T}/PracticaAdicional/ejercicioLista.py`],
      ["PY", "Ejercicio: palindromo con pila", "Practica adicional", `${T}/PracticaAdicional/ejercicioPalindromo.py`]
    ],
    quiz: [
      { q: "Que regla de acceso sigue una pila?", a: ["FIFO", "LIFO", "Orden alfabetico", "Acceso aleatorio"], correct: 1, note: "Last In First Out: lo ultimo que entra es lo primero que sale." },
      { q: "En una cola, dequeue extrae:", a: ["El ultimo elemento", "El primer elemento", "El elemento del medio", "Ninguno"], correct: 1, note: "FIFO: se atiende primero al que llego primero." },
      { q: "Que operaciones basicas tiene una pila?", a: ["enqueue y dequeue", "push y pop", "insert y remove", "add y delete"], correct: 1, note: "push apila y pop desapila desde el tope." },
      { q: "Una lista enlazada se compone de:", a: ["Solo valores", "Nodos con valor y referencia al siguiente", "Pares clave-valor", "Arreglos fijos"], correct: 1, note: "La referencia al siguiente nodo es lo que 'enlaza' la secuencia." },
      { q: "Intentar pop() en una pila vacia en Python produce:", a: ["None automaticamente", "Un IndexError", "Un ValueError", "Un SyntaxError"], correct: 1, note: "La lista vacia no tiene ultimo elemento: hay que validar antes con is_empty." },
      { q: "Un TAD se define por:", a: ["Su implementacion en C", "Las operaciones que ofrece, sin importar la implementacion", "El hardware", "Su nombre"], correct: 1, note: "La abstraccion separa que hace de como esta hecha." }
    ]
  },
  {
    id: 8,
    title: "Busqueda y ordenamiento",
    short: "Busqueda y orden",
    summary: "Busqueda lineal y binaria, ordenamiento por seleccion e insercion, invariantes y costo de comparaciones.",
    topics: [
      "Problema de busqueda: devolver indice o -1",
      "Busqueda lineal: O(n)",
      "Busqueda binaria sobre listas ordenadas: O(log n)",
      "Ordenamiento por seleccion y por insercion",
      "Ordenamiento por burbuja y estabilidad",
      "Costo combinado de ordenar y buscar"
    ],
    tip: "La busqueda binaria descarta la mitad del espacio en cada paso, pero solo sirve si la lista esta ordenada.",
    theory: [
      "Buscar consiste en encontrar un valor x en una lista L y devolver su indice o -1. La busqueda lineal recorre elemento por elemento y en el peor caso hace una comparacion por dato. Si la lista esta ordenada, la binaria divide el segmento de busqueda por la mitad en cada paso, logrando O(log n). Ordenar primero suele valer la pena cuando se busca muchas veces.",
      "Los ordenamientos por comparacion de orden cuadratico son burbuja (intercambia adyacentes hasta que no hay cambios), seleccion (lleva el minimo de la parte sin ordenar a su posicion) e insercion (acomoda cada elemento dentro del prefijo ya ordenado, el mas rapido cuando la lista esta casi ordenada). Todos hacen en el peor caso un orden de n^2 comparaciones, por lo que se vuelven lentos con listas grandes.",
      "La binaria sostiene un invariante: si el objetivo existe, esta siempre entre bajo y alto; en cada paso calcula el medio y descarta media lista, por eso pide orden previo. Ordenar una vez (O(n log n)) y buscar muchas veces (O(log n) cada una) suele ganarle a la lineal (O(n) por busqueda). Ademas, un orden estable conserva el orden relativo de los elementos con igual clave, algo importante cuando se ordena por mas de un campo."
    ],
    concepts: [
      "Busqueda lineal: recorre todo, no requiere orden, O(n).",
      "Busqueda binaria: requiere orden previo, descarta mitades, O(log n).",
      "Ordenamiento por seleccion: lleva el minimo a su posicion en cada pasada.",
      "Ordenamiento por insercion: coloca cada elemento en su lugar dentro del prefijo ordenado.",
      "Orden estable: los elementos con igual clave conservan su orden original.",
      "Casi ordenada: insercion se acerca a O(n); burbuja sigue siendo O(n^2)."
    ],
    caption: "Ejemplo: busqueda lineal y binaria.",
    code: "def busqueda_lineal(datos, objetivo):\n    for i in range(len(datos)):\n        if datos[i] == objetivo:\n            return i\n    return -1\n\ndef busqueda_binaria(datos, objetivo):\n    izq, der = 0, len(datos) - 1\n    while izq <= der:\n        medio = (izq + der) // 2\n        if datos[medio] == objetivo:\n            return medio\n        if datos[medio] < objetivo:\n            izq = medio + 1\n        else:\n            der = medio - 1\n    return -1\n\nlista = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nprint('Lineal 23 ->', busqueda_lineal(lista, 23))\nprint('Binaria 23 ->', busqueda_binaria(lista, 23))\nprint('Binaria 7 ->', busqueda_binaria(lista, 7))",
    exercise: {
      title: "Ordenamiento por seleccion",
      prompt: "Implementa una funcion que ordene una lista de menor a mayor usando ordenamiento por seleccion (en cada pasada lleva el minimo de la parte sin ordenar a su posicion).",
      solution: "def seleccion(datos):\n    datos = list(datos)\n    for i in range(len(datos)):\n        minimo = i\n        for j in range(i + 1, len(datos)):\n            if datos[j] < datos[minimo]:\n                minimo = j\n        datos[i], datos[minimo] = datos[minimo], datos[i]\n    return datos\n\nprint(seleccion([29, 10, 14, 37, 13]))"
    },
    resources: [
      ["PDF", "Algoritmos de busqueda y ordenamiento", "Clase 6 / Teoria", `${L}/Lecture-10/old/Clase_6_Alg_de_Busqueda_y_Ordenamiento.pdf`],
      ["IPYNB", "Busqueda y ordenamiento", "Clase 6 / Teoria", `${L}/Lecture-10/old/Clase_6_Alg_de_Busqueda_y_Ordenamiento.ipynb`],
      ["PDF", "Parcialito: arreglos y matrices", "Material de parcial", `${L}/00-Programacion_2012-FACEI/Parcialito/parcialito.pdf`]
    ],
    quiz: [
      { q: "La busqueda lineal en el peor caso hace:", a: ["1 comparacion", "log n comparaciones", "n comparaciones", "n^2 comparaciones"], correct: 2, note: "Recorre la lista completa si el valor no esta." },
      { q: "Que requisito tiene la busqueda binaria?", a: ["Lista ordenada", "Lista de pares", "Lista enlazada", "Sin duplicados"], correct: 0, note: "Sin orden no se puede descartar la mitad del segmento." },
      { q: "Cual es el costo de la busqueda binaria?", a: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correct: 1, note: "Cada paso divide el segmento de busqueda por dos." },
      { q: "El ordenamiento por seleccion funciona:", a: ["Insertando cada elemento en su lugar", "Llevando el minimo de la parte sin ordenar a su posicion", "Mezclando dos listas ordenadas", "Intercambiando solo pares adyacentes"], correct: 1, note: "En cada pasada fija la posicion i con el minimo del resto." },
      { q: "Ordenamiento por insercion:", a: ["Es siempre mas rapido que seleccion", "Construye un prefijo ordenado insertando cada elemento", "No funciona con numeros negativos", "Usa recursion obligatoria"], correct: 1, note: "Es muy eficiente cuando la lista ya esta casi ordenada." },
      { q: "Si buscas repetidamente en la misma lista, conviene:", a: ["Ordenar una vez y usar binaria", "Repetir busqueda lineal", "Borrar la lista", "Usar un diccionario de listas"], correct: 0, note: "El costo de ordenar se amortiza con las busquedas siguientes." }
    ]
  },
  {
    id: 9,
    title: "Complejidad y computabilidad",
    short: "Complejidad",
    summary: "Como medir el costo de un algoritmo: operaciones primitivas, funciones de crecimiento y notacion Big-O.",
    topics: [
      "Analisis experimental y sus limitaciones",
      "Operaciones primitivas",
      "Funciones: constante, logaritmica, lineal, cuadratica",
      "Notacion Big-O y analisis comparativo",
      "Clases de crecimiento: O(1), O(n), O(n log n), O(n^2)",
      "Problemas decidibles e indecidibles"
    ],
    tip: "Para comparar algoritmos siempre pensa en el peor caso y en como crece el costo cuando crece la entrada.",
    theory: [
      "El analisis experimental mide tiempos reales pero depende del hardware y de los datos de prueba. El analisis asintotico estudia la descripcion del algoritmo contando operaciones primitivas (asignaciones, comparaciones, aritmetica) y expresa el crecimiento con notacion Big-O, lo que permite comparar soluciones sin ejecutarlas.",
      "La notacion Big-O describe como crece el costo en el peor caso: O(1) acceso por indice, O(log n) division por la mitad, O(n) un recorrido, O(n log n) ordenar, O(n^2) dos ciclos anidados y O(2^n) decisiones dobles sin control. Se ignoran el factor constante y la maquina: importa el crecimiento, no los milisegundos actuales. Se estima contando operaciones primitivas y multiplicando dentro de los ciclos anidados.",
      "La computabilidad estudia que problemas son resolubles en principio. El problema de la parada (termina un programa con una entrada dada?) no tiene solucion general: no existe algoritmo que lo decida en todos los casos. Eso separa los decidibles de los indecidibles, y dentro de los decidibles distingue los polinomicos (practicables) de los exponenciales (intratables) que, con datos grandes, no se pueden resolver."
    ],
    concepts: [
      "O(1): costo constante, no crece con n.",
      "O(log n): crece muy lento; ej. busqueda binaria.",
      "O(n): crece linealmente; ej. recorrer una lista.",
      "O(n^2): crece rapido; ej. dos ciclos anidados.",
      "O(n log n): el costo de ordenar con metodos eficientes.",
      "Problema de la parada: no hay algoritmo que diga siempre si un programa termina."
    ],
    caption: "Ejemplo: comparar un enfoque lineal con uno constante.",
    code: "import time\n\ndef suma_lineal(n):\n    total = 0\n    for i in range(n):\n        total += i\n    return total\n\ndef suma_constante(n):\n    return (n - 1) * n // 2\n\nfor n in (100000, 1000000, 5000000):\n    t0 = time.time()\n    suma_lineal(n)\n    t1 = time.time()\n    t2 = time.time()\n    suma_constante(n)\n    t3 = time.time()\n    print(f'n={n:>8} lineal={t1-t0:.5f}s formula={t3-t2:.6f}s')",
    exercise: {
      title: "Clasificar el costo",
      prompt: "Indica la notacion Big-O de: acceder a un elemento de una lista por indice, buscar de a uno en una lista desordenada, buscar en una lista ordenada con binaria y dos ciclos anidados sobre la misma lista.",
      solution: "# Acceso por indice:        O(1)\n# Busqueda lineal:          O(n)\n# Busqueda binaria:         O(log n)\n# Dos ciclos anidados:      O(n^2)\n\nprint('O(1), O(n), O(log n), O(n^2)')"
    },
    resources: [
      ["IPYNB", "Computabilidad y complejidad", "Clase 7 / Teoria", `${L}/Lecture7/Clase_7_Computabilidad_y_Complejidad.ipynb`],
      ["PDF", "Computabilidad y complejidad", "Clase 7 / Teoria", `${L}/Lecture7/Clase_7_Computabilidad_y_Complejidad.pdf`],
      ["IPYNB", "Complejidad (version cátedra)", "Clase 7 / Teoria", `Clase_7_Computabilidad_y_Complejidad.ipynb`],
      ["PDF", "Tema 5: complejidad", "Complementario", `${L}/MIX/tema5-complejidad.pdf`],
      ["IPYNB", "Complejidad (clase 8)", "Material historico", `${L}/Lecture8/Clase_8_Computabilidad_y_Complejidad.ipynb`]
    ],
    quiz: [
      { q: "La notacion Big-O describe:", a: ["El tiempo exacto en segundos", "El crecimiento del costo en el peor caso", "La cantidad de RAM", "El numero de lineas de codigo"], correct: 1, note: "Interesa como crece el costo cuando n crece, no un tiempo absoluto." },
      { q: "Acceder a lista[i] tiene costo:", a: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correct: 0, note: "El indice permite llegar directo al elemento." },
      { q: "Dos ciclos anidados sobre la misma lista tienen costo:", a: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: 2, note: "Por cada uno de los n elementos se recorre la lista completa." },
      { q: "Cual funcion crece mas lento?", a: ["n", "log n", "n^2", "2^n"], correct: 1, note: "El logaritmo se acerca a crecer muy despacio incluso para n grandes." },
      { q: "Principal limitacion del analisis experimental:", a: ["Requiere Python", "Depende del hardware y de los datos probados", "No sirve para ciclos", "No contempla la recursion"], correct: 1, note: "No se puede comparar tiempos de maquinas distintas ni todos los casos posibles." },
      { q: "Cual NO es una operacion primitiva?", a: ["Una asignacion", "Comparar dos valores", "Un bucle for completo con su logica", "Acceder a lista[indice]"], correct: 2, note: "El bucle es una estructura compuesta; sus partes si se descomponen en primitivas." }
    ]
  },
  {
    id: 10,
    title: "Archivos",
    short: "Archivos",
    summary: "Lectura y escritura de archivos de texto y binarios para conservar datos mas alla del programa.",
    topics: [
      "Abrir, leer y cerrar archivos",
      "Modos: r, w, a y b",
      "Lectura por lineas y con context manager",
      "Procesamiento de datos persistentes",
      "Lectura completa, por lineas e iteracion",
      "CSV y rutas con pathlib"
    ],
    tip: "Usa siempre with open(...) as archivo: asi el archivo se cierra solo aunque haya una excepcion.",
    theory: [
      "Los archivos permiten guardar datos despues de que el programa termina. Se abren con open(ruta, modo): 'r' para leer, 'w' para crear o sobreescribir, 'a' para agregar al final. El context manager with cierra el recurso automaticamente y conviene pasar encoding='utf-8' para trabajar bien con acentos y caracteres especiales.",
      "Abrir con 'w' crea o sobreescribe (borra lo anterior); para agregar sin perder lo existente se usa 'a'. En lectura, read() devuelve todo el texto, readlines() una lista de lineas e iterar con for linea in archivo es lo mas economico en memoria. Si la ruta no existe se levanta FileNotFoundError, y una escritura sin cerrar puede perder datos: por eso se usa with, que cierra el recurso siempre.",
      "Para tablas de datos conviene el modulo csv (reader y writer) en lugar de partir las lineas a mano. Las rutas se arman con os.path.join o con pathlib.Path, que evitan problemas entre Windows y Linux. Buena practica: pasar encoding='utf-8' para soportar acentos, trabajar con rutas relativas al proyecto y no dejar archivos abiertos fuera del bloque with."
    ],
    concepts: [
      "read() devuelve todo el contenido; readlines() una lista de lineas.",
      "Iterar sobre el archivo linea por linea es la forma mas eficiente.",
      "Modo 'w' borra el contenido anterior del archivo.",
      "Los datos binarios se manejan con 'rb' / 'wb'.",
      "'w' sobreescribe; 'a' agrega al final sin borrar lo existente.",
      "FileNotFoundError: la ruta o el archivo pedido no existe."
    ],
    caption: "Ejemplo: escribir y leer un archivo de texto.",
    code: "with open('datos.txt', 'w', encoding='utf-8') as archivo:\n    archivo.write('python\\n')\n    archivo.write('algoritmos\\n')\n    archivo.write('estructuras\\n')\n\nwith open('datos.txt', encoding='utf-8') as archivo:\n    lineas = archivo.readlines()\n\nprint('Cantidad de lineas:', len(lineas))\nfor i, linea in enumerate(lineas, start=1):\n    print(i, linea.strip())",
    exercise: {
      title: "Contador de lineas y palabras",
      prompt: "Escribi una funcion que cree un archivo de prueba y devuelva cuantas lineas y cuantas palabras contiene.",
      solution: "def contar(ruta):\n    with open(ruta, encoding='utf-8') as archivo:\n        texto = archivo.read()\n    lineas = texto.splitlines()\n    palabras = texto.split()\n    return len(lineas), len(palabras)\n\nwith open('prueba.txt', 'w', encoding='utf-8') as archivo:\n    archivo.write('hola mundo de archivos\\nsegunda linea aqui\\n')\n\nprint(contar('prueba.txt'))"
    },
    resources: [
      ["PDF", "Manejo de archivos", "Complementario", `${T}/Manejo de archivos.pdf`],
      ["PDF", "Clase 9: archivos", "Clase 9 / Teoria", `${L}/Lecture9/Clase_9_Archivos.pdf`],
      ["IPYNB", "Clase 9: archivos", "Clase 9 / Teoria", `${L}/Lecture9/Clase_9_Archivos.ipynb`],
      ["PY", "Ejercicios practice: archivos", "Ejercicios", `${T}/ejercicios.py`],
      ["IPYNB", "Ejercicios de la clase", "Clase 3 / Practica", `${T}/Clase 3/Practica/Clase1_Exercises.ipynb`]
    ],
    quiz: [
      { q: "Que modo crea el archivo o lo sobreescribe?", a: ["r", "w", "a", "x+"], correct: 1, note: "w es de write: crea si no existe y borra el contenido previo." },
      { q: "with open(...) as archivo garantiza:", a: ["Que el archivo sea texto", "Que se cierra automaticamente", "Que se copie", "Que este en la nube"], correct: 1, note: "El context manager libera el recurso al salir del bloque, incluso con errores." },
      { q: "readlines() devuelve:", a: ["Un string con todo", "Una lista de lineas", "Un numero", "Un diccionario"], correct: 1, note: "Cada elemento es una linea terminada en \\n." },
      { q: "El modo 'a' sirve para:", a: ["Borrar el archivo", "Agregar al final sin borrar", "Leer en binario", "Renombrar"], correct: 1, note: "Append conserva lo existente y escribe al final." },
      { q: "Por que conviene pasar encoding='utf-8'?", a: ["Para leer mas rapido", "Para manejar bien acentos y caracteres especiales", "Para comprimir", "Para cifrar"], correct: 1, note: "Evita errores al leer textos con tildes o enies." },
      { q: "La persistencia de datos en archivos significa que:", a: ["Los datos viven solo en memoria", "Los datos sobreviven al terminar el programa", "Los datos se borran solos", "Los datos solo sirven para graficos"], correct: 1, note: "El contenido queda en disco hasta que se modifique o elimine." }
    ]
  },
  {
    id: 11,
    title: "Estructuras no lineales: arboles y grafos",
    short: "Arboles y grafos",
    summary: "Representaciones jerarquicas y de redes: partes de un arbol, BST, recorridos y conceptos basicos de grafos.",
    topics: [
      "Partes: raiz, hijos, hojas, altura y nivel",
      "Arboles binarios y arboles de busqueda (BST)",
      "Recorridos: inorden, preorden y postorden",
      "Grafos: nodos, aristas, BFS y DFS",
      "Recorridos por niveles y por profundidad",
      "Grafos: matriz y lista de adyacencia"
    ],
    tip: "En un BST el recorrido inorden devuelve siempre los valores ordenados de menor a mayor.",
    theory: [
      "Las estructuras no lineales no siguen una secuencia: en un arbol cada nodo tiene un padre y cero o mas hijos, y en un grafo los nodos se conectan por aristas sin una jerarquia fija. Los arboles modelan organizaciones (archivos, categorias) y los grafos redes (rutas, conexiones), y ambos se recorren de forma recursiva.",
      "El arbol tiene vocabulario propio: raiz (nodo sin padre), hoja (sin hijos), altura (camino mas largo hasta una hoja) y nivel. En un arbol binario de busqueda (BST) cada nodo tiene hasta dos hijos y cumple izquierda < nodo < derecha, de modo que el recorrido inorden devuelve los valores ordenados. Los recorridos se escriben de forma recursiva: preorden (nodo, izquierda, derecha) para replicar la estructura, inorden para listar ordenado y postorden (los hijos primero) para eliminar.",
      "En un grafo no hay jerarquia: vertices conectados por aristas, que pueden ser dirigidas o tener peso. Se representa con matriz de adyacencia (consultar si hay arista en O(1), pero ocupa n^2 lugares) o con lista de adyacencia (mas economica cuando las conexiones son pocas). BFS recorre por niveles con una cola y DFS profundiza con pila o recursion; ambos sirven para buscar caminos, conectar nodos o detectar ciclos. A diferencia del arbol, el grafo puede tener ciclos."
    ],
    concepts: [
      "Raiz: nodo inicial sin padre; hojas: sin hijos.",
      "Altura: camino mas largo desde la raiz hasta una hoja.",
      "BST: izquierda < raiz < derecha; inorden ordena ascendente.",
      "Grafo: nodos + aristas; BFS usa cola, DFS usa pila o recursion.",
      "inorden sobre un BST imprime los valores de menor a mayor.",
      "BFS: cola, por niveles. DFS: pila o recursion, en profundidad."
    ],
    caption: "Ejemplo: arbol binario de busqueda e inorden.",
    code: "class Nodo:\n    def __init__(self, valor):\n        self.valor = valor\n        self.izq = None\n        self.der = None\n\ndef insertar(raiz, valor):\n    if raiz is None:\n        return Nodo(valor)\n    if valor < raiz.valor:\n        raiz.izq = insertar(raiz.izq, valor)\n    else:\n        raiz.der = insertar(raiz.der, valor)\n    return raiz\n\ndef inorden(nodo):\n    if nodo is None:\n        return []\n    return inorden(nodo.izq) + [nodo.valor] + inorden(nodo.der)\n\nraiz = None\nfor v in (50, 30, 70, 20, 40, 60, 80):\n    raiz = insertar(raiz, v)\n\nprint('Inorden:', inorden(raiz))",
    exercise: {
      title: "Contar hojas de un arbol",
      prompt: "Escribe una funcion recursiva que cuente cuantos nodos hoja (sin hijos) tiene el arbol binario construido en el ejemplo.",
      solution: "def contar_hojas(nodo):\n    if nodo is None:\n        return 0\n    if nodo.izq is None and nodo.der is None:\n        return 1\n    return contar_hojas(nodo.izq) + contar_hojas(nodo.der)\n\n# con el arbol del ejemplo: raiz = 50 con hojas 20, 40, 60, 80\n# print(contar_hojas(raiz))"
    },
    resources: [
      ["PPTX", "Clase: arboles", "Clase / Slides", `clase/Arboles.pptx`],
      ["DOCX", "Apunte: arboles", "Clase / Apunte", `clase/árboles.docx`],
      ["PPTX", "Clase: grafos", "Clase / Slides", `clase/Grafos.pptx`],
      ["DOCX", "Apunte: grafos", "Clase / Apunte", `clase/grafos.docx`],
      ["PDF", "Practica: tipos de datos no lineales", "Practica", `Práctica Tipos de Datos No Lineales.pdf`],
      ["PDF", "Practica: solucion", "Practica", `Práctica Tipos de Datos No Lineales Solución.pdf`],
      ["PY", "Arbol binario de busqueda", "Codigo de arboles", `clase/Código Arboles --20230213/binary_search_tree.py`],
      ["PY", "Arbol AVL", "Codigo de arboles", `clase/Código Arboles --20230213/avl_tree.py`],
      ["TXT", "Notas de clase sobre no lineales", "Notas", `clase/noytas.txt`]
    ],
    quiz: [
      { q: "El nodo raiz de un arbol:", a: ["Tiene dos padres", "No tiene padre", "Tiene siempre dos hijos", "Es una hoja"], correct: 1, note: "Es el unico nodo sin padre; el resto desciende de ella." },
      { q: "Una hoja es un nodo:", a: ["Sin padre", "Sin hijos", "Con tres hijos", "De nivel 0"], correct: 1, note: "Los nodos terminales de cada rama." },
      { q: "Un arbol binario permite como maximo:", a: ["1 hijo", "2 hijos", "3 hijos", "Hijos ilimitados"], correct: 1, note: "Cada nodo tiene al menos izquierdo y derecho como tope." },
      { q: "El recorrido inorden de un BST devuelve los valores:", a: ["Ordenados de menor a mayor", "De mayor a menor", "Al azar", "Por niveles"], correct: 0, note: "Izquierda - raiz - derecha aprovecha el orden del BST." },
      { q: "BFS (amplitud primaria) se implementa con:", a: ["Una pila", "Una cola", "Un diccionario", "Un conjunto"], correct: 1, note: "BFS explora por niveles; DFS usa pila o recursion." },
      { q: "Diferencia clave entre arbol y grafo:", a: ["El grafo puede tener ciclos y aristas entre cualesquiera nodos", "El arbol tiene mas nodos", "El grafo no tiene nodos", "Son lo mismo"], correct: 0, note: "Un arbol es un grafo conexo y aciclico con raiz definida." }
    ]
  }
];

const finalExam = [
  { q: "Un algoritmo debe ser ademas de preciso y ordenado:", a: ["Finito y verificable", "Escrito en Python", "Corto", "Sin variables"], correct: 0, note: "Toda solucion debe terminar y poder comprobarse con casos de prueba." },
  { q: "Que resultado da print(10 // 3)?", a: ["3.33", "3", "3.0", "Error"], correct: 1, note: "El operador // realiza division entera." },
  { q: "Cual estructura es inmutable?", a: ["Lista", "Diccionario", "Tupla", "Conjunto"], correct: 2, note: "Las tuplas no se pueden modificar tras crearse." },
  { q: "El bloque try/except se usa para:", a: ["Comentar codigo", "Manejar excepciones", "Ordenar listas", "Definir modulos"], correct: 1, note: "Permite controlar errores esperados en tiempo de ejecucion." },
  { q: "Que termina primero una funcion recursiva?", a: ["El caso base", "El modulo", "La lista", "El archivo"], correct: 0, note: "El caso base detiene las llamadas encadenadas." },
  { q: "En Python self dentro de un metodo refiere a:", a: ["La clase", "La instancia que llama", "El modulo", "El archivo"], correct: 1, note: "Es la referencia al objeto sobre el que se ejecuta el metodo." },
  { q: "La estructura LIFO corresponde a:", a: ["La cola", "La pila", "El diccionario", "La lista enlazada"], correct: 1, note: "Last In First Out: lo ultimo en entrar sale primero." },
  { q: "Para usar busqueda binaria la lista debe estar:", a: ["Vacia", "Ordenada", "Enlazada", "Con duplicados"], correct: 1, note: "Sin orden no se puede descartar la mitad del segmento." },
  { q: "Dos ciclos anidados sobre n elementos tienen costo:", a: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: 2, note: "Por cada elemento se vuelve a recorrer toda la lista." },
  { q: "El modo 'w' de open():", a: ["Solo lee", "Crea o sobreescribe", "Agrega al final", "Borra la carpeta"], correct: 1, note: "Write elimina el contenido anterior del archivo." },
  { q: "En un arbol binario de busqueda, inorden produce:", a: ["Valores ordenados", "Orden inverso", "Solo la raiz", "Orden por niveles"], correct: 0, note: "Izquierda - raiz - derecha recorre el BST en orden ascendente." },
  { q: "BFS recorre un grafo usando:", a: ["Una pila", "Una cola", "Recursion obligatoria", "Un conjunto"], correct: 1, note: "La cola garantiza explorar por niveles." },
  { q: "Cual contenedor asocia claves unicas con valores?", a: ["Lista", "Tupla", "Diccionario", "Conjunto"], correct: 2, note: "Cada clave aparece una sola vez y apunta a un valor." },
  { q: "raise ValueError('...') hace:", a: ["Atrapa el error", "Lanza una excepcion", "Imprime un aviso", "Detiene Python sin mas"], correct: 1, note: "Quien llama puede capturarla con try/except." },
  { q: "El costo de una busqueda binaria es:", a: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correct: 1, note: "Cada paso descarta la mitad de los candidatos." },
  { q: "while en Python equivale en pseudocodigo a:", a: ["SI ... ENTONCES", "MIENTRAS ... FIN MIENTRAS", "PARA CADA ... FIN", "FUNCION"], correct: 1, note: "Repite un bloque mientras la condicion sea verdadera." },
  { q: "set([1, 2, 2, 3]) devuelve:", a: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "{2: 1, 3: 1}"], correct: 1, note: "El conjunto elimina duplicados y se delimita con llaves." },
  { q: "El metodo __init__ de una clase:", a: ["Destruye la instancia", "Inicializa la instancia", "Importa un modulo", "Abre un archivo"], correct: 1, note: "Es el constructor que fija los atributos iniciales." },
  { q: "En una cola, enqueue agrega el elemento:", a: ["Al frente", "Al final", "Al medio", "En posicion aleatoria"], correct: 1, note: "Se suma al final y dequeue atiende desde el inicio (FIFO)." },
  { q: "La notacion O(log n) describe un crecimiento:", a: ["Lineal", "Cuadratico", "Muy lento", "Constante siempre"], correct: 2, note: "El logaritmo crece lentisimo: dobla su valor solo al cuadruplicar n." }
];

const assessments = [
  ["XLSX", "Cuestionario: introduccion a Python", "Preguntas de la clase 1", "2022-04-05 22_19 UNaB - Alg. y Estruc. de Datos - Clase 1 - Introducción a Python - Questions.xlsx"],
  ["IPYNB", "Primer parcial", "Ejercicios para resolver", `${L}/MIX/1erParcial.ipynb`],
  ["IPYNB", "Primer parcial resuelto", "Mutabilidad, range, funciones y recursion", `${L}/MIX/1erParcial-resuleto.ipynb`],
  ["IPYNB", "Segundo parcial resuelto", "Clases, rectangulos y listas enlazadas", `2doPARCIAL-Resuelto.ipynb`],
  ["TXT", "Ejercicios de parcial con solucion", "Python aplicado a parcial", `${L}/MIX/ejercicios python parcial.txt`],
  ["PDF", "Adicional: pilas y colas", "Practica de estructuras", `Adcional Pilas y Colas.pdf`],
  ["PDF", "Adicional: clases", "Practica de POO", `Adicional Clases.pdf`]
];
