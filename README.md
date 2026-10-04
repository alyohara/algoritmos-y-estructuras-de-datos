# Algoritmos y Estructuras de Datos

Sitio estático interactivo con el material de la cátedra: teoría, prácticas, cuadernos de Jupyter, evaluaciones y un editor de Python en el navegador.

## Qué incluye

- **12 unidades** del trayecto (de *Introducción a los algoritmos* y *Pseudocódigo y diagramas de flujo* a *Estructuras no lineales: árboles y grafos*), con teoría, temas, código de ejemplo y ejercicios de práctica.
- **Teoría profunda por unidad**: objetivos de aprendizaje, marco teórico, notas de clase y 5 secciones desplegables con explicación y código de ejemplo (60 secciones en total).
- **Notas de clase** por unidad (extractos de los notebooks y PDFs de la cátedra) y **ejercicios extra** con enunciado y solución.
- **Laboratorio por unidad**: el ejercicio guiado en un editor propio con tests automáticos (`RUN TESTS`), solución de referencia y reinicio. Los 48 tests corren en un namespace limpio de Python.
- **Trabajos prácticos (TP)**: 4 TPs con enunciado enlazado (PDF original), consignas, temas, plantilla editable, tests automáticos y solución.
- **Quiz por unidad**: 180 preguntas en total (15 por unidad) de los tipos múltiple opción, verdadero/falso, múltiple selección, completar y ordenar; se aprueba con 70 % o más.
- **Examen integrador**: 40 preguntas mezclando todas las unidades y tipos, se aprueba con 28 correctas (70 %); guarda mejor puntaje y cantidad de intentos.
- **11 visualizadores interactivos**: lista enlazada, pila, cola, recursion paso a paso, ordenamientos, árbol binario, AVL, árbol general, montículo, grafos (DFS/BFS/Dijkstra) y matriz vs lista de adyacencia.
- **Recursos** de la cátedra (PDF, notebooks, prácticas con solución) con filtro de búsqueda, todos enlazados desde cada unidad.
- **Editor Python con Pyodide**: se ejecuta el código de cada unidad sin instalar nada (requiere conexión la primera vez para cargar Pyodide).
- **Terminal de comandos**: `help`, `unidades`, `unidad [1-12]`, `temas`, `recursos`, `quiz`, `examen`, `progreso`, `clear`.
- **Progreso en el navegador**: revisadas, puntajes y examen se guardan en `localStorage` (clave `ayed-progress-v2`).
- **Atajos de teclado**: `1-9` → unidades 1-9, `0` → unidad 10, `-` → unidad 11, `=` → unidad 12, `/` buscar, `q` quiz, `e` examen.

## Archivos

| Archivo            | Contenido                                                  |
|--------------------|------------------------------------------------------------|
| `index.html`       | Estructura del sitio                                       |
| `styles.css`       | Estilos y temas (MOCHA / MATRIX / NORD)                    |
| `viz.css`          | Estilos de los visualizadores                              |
| `data.js`          | Unidades, teoría, notas, ejercicios y evaluaciones         |
| `teoria.js`        | Objetivos y secciones de teoría profunda por unidad        |
| `quizzes.js`       | Banco de 180 preguntas y examen integrador (40)            |
| `labs.js`          | Laboratorios: starter, solución y tests por unidad         |
| `tps.js`           | Trabajos prácticos: consignas, plantilla, solución, tests  |
| `viz-core.js`      | Shim (EDD.util) para los visualizadores                    |
| `viz-*.js`         | 6 visualizadores (lineal, recursion, tree, heap, sort, graph) |
| `script.js`        | Navegación, quizzes, labs, TPs, viz, editor, terminal      |

No requiere instalación ni compilación: es HTML/CSS/JS puro.

## Probar en local

```bash
python -m http.server 8765
# abrir http://127.0.0.1:8765/
```

## Publicar con GitHub Pages

1. Subí esta carpeta a un repositorio de GitHub.
2. En el repositorio, abrí **Settings > Pages**.
3. En **Build and deployment**, elegí **Deploy from a branch**, seleccioná la rama `master` y la carpeta `/(root)`.
4. Guardá los cambios. GitHub mostrará la URL pública cuando termine el despliegue.

Los archivos de calificaciones, configuración local y copias duplicadas se excluyen mediante `.gitignore`.
