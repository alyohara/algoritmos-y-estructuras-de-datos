# Algoritmos y Estructuras de Datos

Sitio estático interactivo con el material de la cátedra: teoría, prácticas, cuadernos de Jupyter, evaluaciones y un editor de Python en el navegador.

La materia se recorre como un **camino de 12 unidades**: una portada con el mapa completo del trayecto y una página por unidad, para poder entrar, quedarse y seguir desde donde quedó cada estudiante.

## Cómo está armado

| Página | Para qué sirve |
|---|---|
| `index.html` | Portada: las 12 unidades en una grilla, progreso global, botón **Continuar**, parciales, examen, terminal y buscador de todo el material. |
| `unidad-01.html` … `unidad-12.html` | Una unidad por página: teoría, notas, visualizadores, laboratorio, recursos, TP y quiz, con la ruta `01 → 12` siempre visible. |
| `trabajos-practicos.html` | Los 4 TPs juntos, con plantilla editable, tests y solución. |
| `examen.html` | Examen integrador de 40 preguntas. |

En la portada cada tarjeta muestra el estado de la unidad (pendiente, en curso, revisada o aprobada con su puntaje). La ruta de la unidad sirve para saltar a cualquier otra sin volver a la portada, y las unidades sin visualizador propio enlazan a las unidades que sí lo tienen.

## Qué incluye

- **12 unidades** del trayecto (de *Introducción a los algoritmos* y *Pseudocódigo y diagramas de flujo* a *Estructuras no lineales: árboles y grafos*), con teoría, temas, código de ejemplo y ejercicios de práctica.
- **Teoría profunda por unidad**: objetivos de aprendizaje, marco teórico, notas de clase y 5 secciones desplegables con explicación y código de ejemplo (60 secciones en total).
- **Notas de clase** por unidad (extractos de los notebooks y PDFs de la cátedra) y **ejercicios extra** con enunciado y solución.
- **Laboratorio por unidad**: el ejercicio guiado en un editor propio con tests automáticos (`RUN TESTS`), solución de referencia y reinicio. Los 48 tests corren en un namespace limpio de Python.
- **Trabajos prácticos (TP)**: 4 TPs con enunciado enlazado (PDF original), consignas, temas, plantilla editable, tests automáticos y solución.
- **Quiz por unidad**: 180 preguntas en total (15 por unidad) de los tipos múltiple opción, verdadero/falso, múltiple selección, completar y ordenar; se aprueba con 70 % o más.
- **Examen integrador**: 40 preguntas mezclando todas las unidades y tipos, se aprueba con 28 correctas (70 %); guarda mejor puntaje y cantidad de intentos.
- **11 visualizadores interactivos**, agrupados por unidad: recursión paso a paso (U6); lista enlazada, pila y cola (U8); ordenamientos (U9); árbol binario de búsqueda, AVL, árbol general, montículo, grafos (DFS/BFS/Dijkstra) y matriz vs lista de adyacencia (U12).
- **Recursos** de la cátedra (PDF, notebooks, prácticas con solución) con filtro de búsqueda, enlazados desde la unidad y también desde el buscador global de la portada.
- **Editor Python con Pyodide**: se ejecuta el código de cada unidad sin instalar nada (requiere conexión la primera vez para cargar Pyodide).
- **Terminal de comandos** en la portada: `help`, `unidades`, `unidad [1-12]`, `temas`, `recursos`, `quiz`, `examen`, `progreso`, `clear`.
- **Progreso en el navegador**: revisadas, puntajes y examen se guardan en `localStorage` (clave `ayed-progress-v2`).
- **Borradores**: el código del editor, el laboratorio y las plantillas de los TP se guardan solos (clave `ayed-drafts-v1`), así que se puede cerrar y seguir después.
- **Temas**: MOCHA / MATRIX / NORD, con preferencia recordada (clave `ayed-theme-v1`).
- **Atajos de teclado**: `1-9` → unidades 1-9, `0` → unidad 10, `-` → unidad 11, `=` → unidad 12, `/` buscar, `q` quiz, `t` práctica, `e` examen, `h` portada, `?` ayuda.

## Archivos

| Archivo            | Contenido                                                  |
|--------------------|------------------------------------------------------------|
| `index.html`       | Portada                                                    |
| `unidad-01.html` … `unidad-12.html` | Páginas de unidad (misma plantilla, una por unidad) |
| `trabajos-practicos.html` | Página con los 4 TPs                               |
| `examen.html`      | Examen integrador                                         |
| `core.js`          | Base compartida: progreso, borradores, tema, ruta, Pyodide, tests, quiz y terminal |
| `page-index.js`    | Lógica de la portada                                      |
| `page-unit.js`     | Lógica de las páginas de unidad                           |
| `page-tps.js`      | Lógica de la página de TPs                                |
| `page-exam.js`     | Lógica del examen                                         |
| `styles.css`       | Estilos y temas (MOCHA / MATRIX / NORD)                    |
| `viz.css`          | Estilos de los visualizadores                              |
| `data.js`          | Unidades, recursos y evaluaciones                          |
| `teoria.js`        | Objetivos y secciones de teoría profunda por unidad        |
| `quizzes.js`       | Banco de 180 preguntas y examen integrador (40)            |
| `labs.js`          | Laboratorios: starter, solución y tests por unidad         |
| `tps.js`           | Trabajos prácticos: consignas, plantilla, solución, tests  |
| `viz-core.js`      | Shim (EDD.util) y registro para los visualizadores         |
| `viz-linear.js`, `viz-recursion.js`, `viz-tree.js`, `viz-heap.js`, `viz-sorting.js`, `viz-graph.js` | Los 11 visualizadores |

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
