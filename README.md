# Algoritmos y Estructuras de Datos

Sitio estático interactivo con el material de la cátedra: teoría, prácticas, cuadernos de Jupyter, evaluaciones y un editor de Python en el navegador.

## Qué incluye

- **11 unidades** del trayecto (de *Introducción, algoritmos y pseudocódigo* a *Estructuras no lineales*), con teoría, temas, código de ejemplo y ejercicios de práctica.
- **Recursos** de la cátedra (PDF, notebooks, prácticas con solución) con filtro de búsqueda, todos enlazados desde cada unidad.
- **Quiz por unidad**: 6 preguntas, se aprueba con 70 % o más.
- **Examen integrador**: 20 preguntas con mejor puntaje y cantidad de intentos.
- **Editor Python con Pyodide**: se ejecuta el código de cada unidad sin instalar nada (requiere conexión la primera vez para cargar Pyodide).
- **Terminal de comandos**: `help`, `unidades`, `unidad [1-11]`, `temas`, `recursos`, `quiz`, `examen`, `progreso`, `clear`.
- **Progreso en el navegador**: revisadas, puntajes y examen se guardan en `localStorage` (clave `ayed-progress-v2`).
- **Atajos de teclado**: `1-9` → unidades 1-9, `0` → unidad 10, `-` → unidad 11, `/` buscar, `q` quiz, `e` examen.

## Archivos

| Archivo       | Contenido                                        |
|---------------|--------------------------------------------------|
| `index.html`  | Estructura del sitio                             |
| `styles.css`  | Estilos y temas (MOCHA / MATRIX / NORD)          |
| `data.js`     | Unidades, teoría, quizzes, examen, evaluaciones  |
| `script.js`   | Navegación, quizzes, editor, terminal, progreso  |

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
