const base = "Algoritmos%20y%20Estructuras%20de%20Datos%20-%20Teorias/";

const modules = [
  {
    id: 1, title: "Introduccion a la programacion", short: "Algoritmos y sintaxis",
    summary: "Primeros pasos con Python, resolucion de problemas, pseudocodigo y diagramas de flujo.",
    topics: ["Algoritmos: entrada, proceso y salida", "Pseudocodigo y diagramas de flujo", "Variables, tipos basicos y operadores", "Control de flujo: condicion y repeticion"],
    tip: "Antes de programar, escribi los casos de entrada y salida que debe cubrir tu algoritmo.",
    caption: "Ejemplo: decidir si un numero es par.",
    code: "numero = int(input('Numero: '))\n\nif numero % 2 == 0:\n    print('Es par')\nelse:\n    print('Es impar')",
    resources: [
      ["PDF", "Introduccion a Python", "Clase 1 / Teoria", `${base}Clase%201/Teor%C3%ADa/Clase1-Introduccion-parte1.pdf`],
      ["PDF", "Pseudocodigo y diagramas", "Clase 1 / Teoria", `${base}Clase%201/Teor%C3%ADa/Clase1-Pseudocodigo-Diagramas-parte2.pdf`],
      ["PDF", "Practica 1", "Clase 1 / Practica", `${base}Clase%201/Practica/Practica1.pdf`],
      ["IPYNB", "Sintaxis basica", "Clase 1 / Teoria", `${base}Clase%201/Teor%C3%ADa/Clase_1_Syntaxis_Basica.ipynb`]
    ]
  },
  {
    id: 2, title: "Tipos de datos y contenedores", short: "Datos y colecciones",
    summary: "Representacion de datos y uso de listas, tuplas, conjuntos y diccionarios.",
    topics: ["Mutabilidad e inmutabilidad", "Listas, tuplas y operaciones", "Conjuntos y diccionarios", "Comprension de listas y funcion range"],
    tip: "Elegir el contenedor correcto simplifica el algoritmo: lista para orden, conjunto para pertenencia, diccionario para clave/valor.",
    caption: "Ejemplo: cuadrados de los primeros N naturales.",
    code: "n = 10\ncuadrados = [numero ** 2 for numero in range(n)]\nprint(cuadrados)\n\n# Una tupla no se puede modificar\ndias = ('lun', 'mar', 'mie')",
    resources: [
      ["PDF", "Tipos de datos", "Clase 2 / Teoria", `${base}Clase%202/Teoria/Clase4-Tipos_de_Datos.pdf`],
      ["PDF", "Practica 2", "Clase 2 / Practica", `${base}Clase%202/Practica/Practica2.pdf`],
      ["IPYNB", "Contenedores", "Clase 2 / Practica", `${base}Clase%202/Practica/Clase_1_Contenedores.ipynb`],
      ["IPYNB", "Ejercicios de contenedores", "Clase 3 / Teoria", `${base}Clase%203/Teoria/Clase_5_Contenedores.ipynb`]
    ]
  },
  {
    id: 3, title: "Funciones, errores y excepciones", short: "Funciones y control",
    summary: "Modularizacion de soluciones, alcance de variables y manejo de situaciones excepcionales.",
    topics: ["Parametros, retorno y documentacion", "Alcance local, global y nonlocal", "Errores de ejecucion y validacion", "try / except para excepciones"],
    tip: "Una funcion debe tener una responsabilidad clara, entradas predecibles y un resultado verificable.",
    caption: "Ejemplo: potencia iterativa con validacion.",
    code: "def potencia(base, exponente):\n    if exponente < 0:\n        raise ValueError('El exponente debe ser natural')\n\n    resultado = 1\n    for _ in range(exponente):\n        resultado *= base\n    return resultado\n\nprint(potencia(2, 8))",
    resources: [
      ["PDF", "Errores y funciones", "Clase 3 / Teoria", `${base}Clase%203/Teoria/Clase_2_Errors_y_Functions.pdf`],
      ["PDF", "Excepciones y funciones", "Clase 3 / Teoria", `${base}Clase%203/Teoria/Clase_2_Excepciones_y_Functiones.pdf`],
      ["PDF", "Ejercicios en clase", "Clase 3 / Teoria", `${base}Clase%203/Teoria/Ejercicios_en_Clase-Funciones.pdf`],
      ["IPYNB", "Ejercicios de funciones", "Clase 3 / Teoria", `${base}Clase%203/Teoria/Ejercicios_en_Clase-Funciones.ipynb`]
    ]
  },
  {
    id: 4, title: "Modularizacion y objetos", short: "Modulos y POO",
    summary: "Organizacion de programas en modulos y modelado de objetos mediante clases.",
    topics: ["Funciones reutilizables y modulos", "Clases, atributos y metodos", "Constructor __init__", "Validacion y encapsulamiento basico"],
    tip: "Modela primero que representa cada objeto y que operaciones debe permitir antes de escribir sus metodos.",
    caption: "Ejemplo: clase para representar un rectangulo.",
    code: "class Rectangulo:\n    def __init__(self, ancho, alto):\n        if ancho <= 0 or alto <= 0:\n            raise ValueError('Medidas positivas')\n        self.ancho = ancho\n        self.alto = alto\n\n    def area(self):\n        return self.ancho * self.alto\n\nprint(Rectangulo(4, 3).area())",
    resources: [
      ["PDF", "Funciones y modularizacion", "Clase 4 / Teoria", `${base}Clase%204/Teoria/Clase6-Funciones_Modularizacion.pdf`],
      ["IPYNB", "Funciones y objetos", "Clase 4 / Practica", `${base}Clase%204/Practica/Clase_6_Funciones_y_Objetos.ipynb`],
      ["IPYNB", "Practica 4", "Clase 4 / Practica", `${base}Clase%204/Practica/Practica4.ipynb`],
      ["IPYNB", "Modulos y clases", "Clase 6 / Teoria", `${base}Clase%206/Teoria/Clase_3_Modules_y_Classes.ipynb`]
    ]
  },
  {
    id: 5, title: "Estructuras de datos lineales", short: "Listas, pilas y colas",
    summary: "Estructuras lineales, nodos, listas enlazadas, pilas y colas para organizar informacion.",
    topics: ["Listas secuenciales y enlazadas", "Pila: LIFO", "Cola: FIFO", "Operaciones append, pop, enqueue y dequeue"],
    tip: "Identifica la regla de acceso: ultimo en entrar primero en salir sugiere pila; primero en entrar primero en salir, cola.",
    caption: "Ejemplo: pila minima con una lista de Python.",
    code: "pila = []\npila.append('primer elemento')\npila.append('segundo elemento')\n\nultimo = pila.pop()\nprint(ultimo)  # segundo elemento\nprint(pila)",
    resources: [
      ["IPYNB", "Repaso de estructuras lineales", "Clase 5 / Teoria", `${base}Clase%205/Teoria/Clase_5_Repaso-Est_de_Datos_Lineales-PRACTICA.ipynb`],
      ["IPYNB", "Practica de repaso", "Clase 5 / Practica", `${base}Clase%205/Practica/Clase_5_Repaso-PRACTICA.ipynb`],
      ["PDF", "Ejercicios sobre pilas y colas", "Complementario", `${base}practica-6-ejercicios-sobre-pilas-y-colas.pdf`],
      ["PY", "Ordenar una lista", "Practica adicional", `${base}PracticaAdicional/ejercicioLista.py`]
    ]
  },
  {
    id: 6, title: "Algoritmos y practica integradora", short: "Busqueda, ordenamiento y archivos",
    summary: "Resolucion de problemas integradores: busqueda, ordenamiento, archivos y estructuras no lineales.",
    topics: ["Busqueda y ordenamiento", "Recursion y analisis de soluciones", "Archivos: lectura y escritura", "Arboles y grafos como extension de estructuras"],
    tip: "Para evaluar un algoritmo, considera siempre su correctitud, sus casos borde y el costo de tiempo/memoria.",
    caption: "Ejemplo: busqueda binaria sobre datos ordenados.",
    code: "def busqueda_binaria(datos, objetivo):\n    inicio, fin = 0, len(datos) - 1\n    while inicio <= fin:\n        medio = (inicio + fin) // 2\n        if datos[medio] == objetivo:\n            return medio\n        if datos[medio] < objetivo:\n            inicio = medio + 1\n        else:\n            fin = medio - 1\n    return -1",
    resources: [
      ["PDF", "Manejo de archivos", "Complementario", `${base}Manejo%20de%20archivos.pdf`],
      ["IPYNB", "Modulos y objetos", "Clase 6 / Teoria", `${base}Clase%206/Teoria/Clase_9_Modulos_y_Objetos.ipynb`],
      ["PDF", "Busqueda y ordenamiento", "Material historico", "Lectures-2022/Lectures-2022/Lecture-10/old/Clase_6_Alg_de_Busqueda_y_Ordenamiento.pdf"],
      ["PY", "Ejemplo de arbol binario", "Codigo de arboles", "clase/C%C3%B3digo%20Arboles%20--20230213/binary_tree.py"]
    ]
  }
];

const assessments = [
  ["XLSX", "Cuestionario: introduccion a Python", "Preguntas de la clase 1", "2022-04-05%2022_19%20UNaB%20-%20Alg.%20y%20Estruc.%20de%20Datos%20-%20Clase%201%20-%20Introducci%C3%B3n%20a%20Python%20-%20Questions.xlsx"],
  ["IPYNB", "Primer parcial", "Ejercicios para resolver", "Lectures-2022/Lectures-2022/MIX/1erParcial.ipynb"],
  ["IPYNB", "Primer parcial resuelto", "Mutabilidad, range, funciones y recursion", "Lectures-2022/Lectures-2022/MIX/1erParcial-resuleto.ipynb"],
  ["IPYNB", "Parcial resuelto", "Clases, rectangulos y listas enlazadas", "2doPARCIAL-Resuelto.ipynb"],
  ["PDF", "Parcialito", "Arreglos, matrices, registros y conjuntos", "Lectures-2022/Lectures-2022/00-Programacion_2012-FACEI/Parcialito/parcialito.pdf"]
];

const quiz = [
  { q: "Que estructura es inmutable en Python?", a: ["Lista", "Diccionario", "Tupla", "Conjunto"], correct: 2, note: "Las tuplas no permiten modificar sus elementos." },
  { q: "Que devuelve una funcion si no usa return?", a: ["0", "False", "None", "Una excepcion"], correct: 2, note: "Python devuelve None de forma implicita." },
  { q: "Que regla sigue una pila?", a: ["FIFO", "LIFO", "Orden alfabetico", "Acceso aleatorio"], correct: 1, note: "LIFO: el ultimo elemento que entra es el primero que sale." },
  { q: "Que caso detiene una funcion recursiva?", a: ["El caso base", "El constructor", "El parametro global", "La excepcion"], correct: 0, note: "El caso base evita llamadas recursivas infinitas." },
  { q: "Que operador indica igualdad?", a: ["=", "==", ":=", "!="], correct: 1, note: "= asigna; == compara valores." },
  { q: "Cual es el costo de busqueda binaria en una lista ordenada?", a: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correct: 1, note: "Descarta la mitad del espacio de busqueda en cada paso." }
];

let activeModule = 1;
let questionIndex = 0;
let answered = false;
const completed = new Set(JSON.parse(localStorage.getItem("ayed-completed") || "[]"));

const elements = {
  nav: document.querySelector("#module-nav"), kicker: document.querySelector("#module-kicker"),
  title: document.querySelector("#module-title"), summary: document.querySelector("#module-summary"),
  status: document.querySelector("#module-status"), count: document.querySelector("#module-count"),
  topics: document.querySelector("#topic-list"), tip: document.querySelector("#module-tip"),
  caption: document.querySelector("#example-caption"), code: document.querySelector("#code-example"),
  resources: document.querySelector("#resource-list"), empty: document.querySelector("#empty-resources"),
  search: document.querySelector("#resource-search"), progress: document.querySelector("#progress-bars"),
  progressText: document.querySelector("#progress-text"), question: document.querySelector("#quiz-question"),
  quizProgress: document.querySelector("#quiz-progress"), options: document.querySelector("#quiz-options"),
  feedback: document.querySelector("#quiz-feedback"), output: document.querySelector("#terminal-output")
};

function currentModule() { return modules.find((module) => module.id === activeModule); }
function resourceMarkup(resource) {
  const [type, name, category, url] = resource;
  return `<article class="resource" data-search="${`${type} ${name} ${category}`.toLowerCase()}"><span class="resource-type">${type}</span><a href="${url}">${name}</a><span class="resource-category">${category}</span></article>`;
}

function renderModule() {
  const module = currentModule();
  elements.kicker.textContent = `UNIDAD ${String(module.id).padStart(2, "0")}`;
  elements.title.textContent = module.title;
  elements.summary.textContent = module.summary;
  elements.count.textContent = `${String(module.resources.length).padStart(2, "0")} RECURSOS`;
  elements.status.textContent = completed.has(module.id) ? "[ REVISADA ]" : "[ READY ]";
  elements.topics.innerHTML = module.topics.map((topic) => `<li>${topic}</li>`).join("");
  elements.tip.textContent = module.tip;
  elements.caption.textContent = module.caption;
  elements.code.textContent = module.code;
  elements.resources.innerHTML = module.resources.map(resourceMarkup).join("");
  elements.search.value = "";
  filterResources();
  elements.nav.querySelectorAll(".module-button").forEach((button) => button.classList.toggle("active", Number(button.dataset.id) === module.id));
  renderProgress();
}

function renderNavigation() {
  elements.nav.innerHTML = modules.map((module) => `<button class="module-button" type="button" data-id="${module.id}"><span class="number">0${module.id}</span><span>${module.short}</span><small>${completed.has(module.id) ? "REVISADA" : "PENDIENTE"}</small></button>`).join("");
  elements.nav.addEventListener("click", (event) => {
    const button = event.target.closest(".module-button");
    if (!button) return;
    activeModule = Number(button.dataset.id);
    renderModule();
  });
}

function renderProgress() {
  elements.progress.innerHTML = modules.map((module) => `<div class="progress-row ${completed.has(module.id) ? "done" : ""}"><button type="button" data-complete="${module.id}">UNIDAD ${module.id}</button><div class="bar"><span></span></div><span>${completed.has(module.id) ? "OK" : "--"}</span></div>`).join("");
  elements.progressText.textContent = `${completed.size} / ${modules.length} unidades revisadas`;
  elements.progress.querySelectorAll("[data-complete]").forEach((button) => button.addEventListener("click", () => {
    const id = Number(button.dataset.complete);
    completed.has(id) ? completed.delete(id) : completed.add(id);
    localStorage.setItem("ayed-completed", JSON.stringify([...completed]));
    renderNavigation();
    renderModule();
  }));
}

function filterResources() {
  const query = elements.search.value.trim().toLocaleLowerCase("es");
  let matches = 0;
  elements.resources.querySelectorAll(".resource").forEach((resource) => {
    const visible = resource.dataset.search.includes(query);
    resource.hidden = !visible;
    if (visible) matches += 1;
  });
  elements.empty.hidden = matches !== 0;
}

function renderQuiz() {
  const item = quiz[questionIndex];
  answered = false;
  elements.quizProgress.textContent = `PREGUNTA ${questionIndex + 1} / ${quiz.length}`;
  elements.question.textContent = item.q;
  elements.feedback.textContent = "";
  elements.options.innerHTML = item.a.map((answer, index) => `<button class="quiz-option" type="button" data-answer="${index}">${String.fromCharCode(65 + index)}. ${answer}</button>`).join("");
  elements.options.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer))));
}

function answerQuestion(index) {
  if (answered) return;
  answered = true;
  const item = quiz[questionIndex];
  elements.options.querySelectorAll("button").forEach((button) => {
    const answer = Number(button.dataset.answer);
    button.disabled = true;
    if (answer === item.correct) button.classList.add("correct");
    if (answer === index && answer !== item.correct) button.classList.add("incorrect");
  });
  elements.feedback.textContent = `${index === item.correct ? "CORRECTO" : "REVISAR"} > ${item.note}`;
  elements.feedback.className = `feedback ${index === item.correct ? "success" : "error"}`;
}

function log(message, type = "") {
  const line = document.createElement("p");
  if (type) line.className = type;
  line.textContent = message;
  elements.output.append(line);
  elements.output.scrollTop = elements.output.scrollHeight;
}

function runCommand(raw) {
  const [command, argument] = raw.trim().toLowerCase().split(/\s+/, 2);
  if (!command) return;
  log(`student@unab:~/ayed$ ${raw}`, "prompt");
  if (command === "help") log("Comandos: help, clases, clase [1-6], temas, recursos, quiz, progreso, clear");
  else if (command === "clases") log(modules.map((module) => `0${module.id}: ${module.title}`).join("\n"));
  else if (command === "clase" && /^[1-6]$/.test(argument)) { activeModule = Number(argument); renderModule(); log(`Unidad 0${argument} cargada.`, "success"); }
  else if (command === "temas") log(currentModule().topics.map((topic) => `> ${topic}`).join("\n"));
  else if (command === "recursos") log(currentModule().resources.map((resource) => `[${resource[0]}] ${resource[1]}`).join("\n"));
  else if (command === "quiz") { document.querySelector(".assessment-panel").scrollIntoView({ behavior: "smooth", block: "center" }); log("Autoevaluacion enfocada.", "success"); }
  else if (command === "progreso") log(`${completed.size}/${modules.length} unidades revisadas.`, "success");
  else if (command === "clear") elements.output.innerHTML = "";
  else log(`Comando no encontrado: ${command}. Escribi help.`, "error");
}

document.querySelector("#assessment-links").innerHTML = assessments.map((assessment) => `<a class="assessment-link" href="${assessment[3]}"><strong>[${assessment[0]}]</strong> ${assessment[1]}<small>${assessment[2]}</small></a>`).join("");
elements.search.addEventListener("input", filterResources);
document.querySelector("#copy-code").addEventListener("click", async () => {
  await navigator.clipboard.writeText(currentModule().code);
  document.querySelector("#copy-code").textContent = "COPIED";
  setTimeout(() => { document.querySelector("#copy-code").textContent = "COPY EXAMPLE"; }, 1300);
});
document.querySelector("#next-question").addEventListener("click", () => { questionIndex = (questionIndex + 1) % quiz.length; renderQuiz(); });
document.querySelector("#reset-quiz").addEventListener("click", () => { questionIndex = 0; renderQuiz(); });
document.querySelector("#terminal-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#command-input");
  runCommand(input.value);
  input.value = "";
});
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const matrix = document.documentElement.dataset.theme !== "matrix";
  document.documentElement.dataset.theme = matrix ? "matrix" : "nord";
  document.querySelector("#theme-toggle").textContent = `THEME: ${matrix ? "MATRIX" : "NORD"}`;
});
window.addEventListener("keydown", (event) => {
  if (document.activeElement.matches("input")) return;
  if (event.key === "/") { event.preventDefault(); elements.search.focus(); }
  if (/^[1-6]$/.test(event.key)) { activeModule = Number(event.key); renderModule(); }
  if (event.key.toLowerCase() === "q") document.querySelector(".assessment-panel").scrollIntoView({ behavior: "smooth", block: "center" });
  if (event.key === "?") log("Atajos: 1-6 carga unidades, / busca recursos, q abre la autoevaluacion.");
});
setInterval(() => { document.querySelector("#clock").textContent = new Date().toLocaleTimeString("es-AR", { hour12: false }); }, 1000);

renderNavigation();
renderModule();
renderQuiz();
