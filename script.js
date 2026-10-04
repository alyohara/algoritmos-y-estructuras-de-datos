const PYODIDE_INDEX = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
const PASS_MARK = 70;

let activeUnit = 1;
let pyodidePromise = null;
const quizStates = {};
const codeDrafts = {};

const store = {
  load() {
    try {
      const raw = localStorage.getItem("ayed-progress-v2");
      if (raw) return JSON.parse(raw);
    } catch (error) { console.warn("Progreso ilegible", error); }
    return { units: {}, exam: { best: null, attempts: 0 } };
  },
  save() {
    localStorage.setItem("ayed-progress-v2", JSON.stringify(progress));
  }
};

let progress = store.load();
if (!progress.units) progress.units = {};
if (!progress.exam) progress.exam = { best: null, attempts: 0 };

const elements = {
  nav: document.querySelector("#module-nav"),
  kicker: document.querySelector("#module-kicker"),
  title: document.querySelector("#module-title"),
  summary: document.querySelector("#module-summary"),
  status: document.querySelector("#module-status"),
  count: document.querySelector("#module-count"),
  topics: document.querySelector("#topic-list"),
  tip: document.querySelector("#module-tip"),
  caption: document.querySelector("#example-caption"),
  editor: document.querySelector("#code-editor"),
  output: document.querySelector("#code-output"),
  pyodideStatus: document.querySelector("#pyodide-status"),
  theory: document.querySelector("#theory-text"),
  concepts: document.querySelector("#concept-list"),
  exerciseTitle: document.querySelector("#exercise-title"),
  exercisePrompt: document.querySelector("#exercise-prompt"),
  exerciseSolution: document.querySelector("#exercise-solution"),
  resources: document.querySelector("#resource-list"),
  empty: document.querySelector("#empty-resources"),
  search: document.querySelector("#resource-search"),
  progress: document.querySelector("#progress-bars"),
  progressText: document.querySelector("#progress-text"),
  question: document.querySelector("#quiz-question"),
  quizProgress: document.querySelector("#quiz-progress"),
  options: document.querySelector("#quiz-options"),
  feedback: document.querySelector("#quiz-feedback"),
  quizScore: document.querySelector("#quiz-score"),
  nextQuestion: document.querySelector("#next-question"),
  examBody: document.querySelector("#exam-body"),
  examHistory: document.querySelector("#exam-history"),
  terminal: document.querySelector("#terminal-output")
};

function currentUnit() { return units.find((unit) => unit.id === activeUnit); }

function unitState(id) {
  const saved = progress.units[id];
  if (!saved) return { key: "pendiente", label: "PENDIENTE", score: null };
  if (saved.passed) return { key: "aprobada", label: `APROBADA (${saved.score}%)`, score: saved.score };
  if (saved.reviewed) return { key: "revisada", label: "REVISADA", score: saved.score };
  if (saved.score != null) return { key: "pendiente", label: `PENDIENTE (${saved.score}%)`, score: saved.score };
  return { key: "pendiente", label: "PENDIENTE", score: null };
}

function saveUnitScore(id, score) {
  const saved = progress.units[id] || {};
  const best = saved.score == null ? score : Math.max(saved.score, score);
  progress.units[id] = { ...saved, score: best, passed: (saved.passed || best >= PASS_MARK) };
  store.save();
}

function markReviewed(id) {
  const saved = progress.units[id] || {};
  progress.units[id] = { ...saved, reviewed: !saved.reviewed };
  store.save();
}

function resourceMarkup(resource) {
  const [type, name, category, path] = resource;
  const href = encodeURI(path);
  const search = `${type} ${name} ${category}`.toLowerCase();
  return `<article class="resource" data-search="${search}"><span class="resource-type">${type}</span><a href="${href}" target="_blank" rel="noopener">${name}</a><span class="resource-category">${category}</span></article>`;
}

function renderNavigation() {
  elements.nav.innerHTML = units.map((unit) => {
    const state = unitState(unit.id);
    return `<button class="module-button ${unit.id === activeUnit ? "active" : ""}" type="button" data-id="${unit.id}">
      <span class="number">${String(unit.id).padStart(2, "0")}</span>
      <span>${unit.short}</span>
      <small class="state-${state.key}">${state.label}</small>
    </button>`;
  }).join("");
}

function renderModule() {
  const unit = currentUnit();
  const state = unitState(unit.id);
  elements.kicker.textContent = `UNIDAD ${String(unit.id).padStart(2, "0")} / ${String(units.length).padStart(2, "0")}`;
  elements.title.textContent = unit.title;
  elements.summary.textContent = unit.summary;
  elements.count.textContent = `${String(unit.resources.length).padStart(2, "0")} RECURSOS`;
  elements.status.textContent = `[ ${state.label} ]`;
  elements.status.className = `unit-state state-${state.key}`;
  elements.topics.innerHTML = unit.topics.map((topic) => `<li>${topic}</li>`).join("");
  elements.tip.textContent = unit.tip;
  elements.caption.textContent = unit.caption;
  elements.editor.value = codeDrafts[unit.id] != null ? codeDrafts[unit.id] : unit.code;
  elements.output.textContent = "Salida del interprete aparecera aqui.";
  elements.output.className = "code-output";
  elements.theory.textContent = unit.theory;
  elements.concepts.innerHTML = unit.concepts.map((concept) => `<li>${concept}</li>`).join("");
  elements.exerciseTitle.textContent = unit.exercise.title;
  elements.exercisePrompt.textContent = unit.exercise.prompt;
  elements.exerciseSolution.textContent = unit.exercise.solution;
  elements.resources.innerHTML = unit.resources.map(resourceMarkup).join("");
  elements.search.value = "";
  filterResources();
  renderNavigation();
  renderProgress();
  renderQuiz();
}

function goToUnit(id) {
  if (id < 1 || id > units.length) return;
  activeUnit = id;
  renderModule();
  window.scrollTo({ top: 0, behavior: "smooth" });
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

function renderProgress() {
  elements.progress.innerHTML = units.map((unit) => {
    const state = unitState(unit.id);
    const done = state.key !== "pendiente" || state.score != null;
    return `<div class="progress-row ${done ? "done" : ""}">
      <button type="button" data-goto="${unit.id}" title="Ir a la unidad ${unit.id}">U${String(unit.id).padStart(2, "0")}</button>
      <div class="bar"><span style="width:${state.score != null ? state.score : done ? 100 : 0}%"></span></div>
      <span class="state-${state.key}">${state.score != null ? state.score : done ? "OK" : "--"}</span>
    </div>`;
  }).join("");
  const reviewed = units.filter((unit) => {
    const state = unitState(unit.id);
    return state.key === "revisada" || state.key === "aprobada";
  }).length;
  const approved = units.filter((unit) => unitState(unit.id).key === "aprobada").length;
  elements.progressText.textContent = `${reviewed} / ${units.length} unidades revisadas · ${approved} aprobadas`;
}

function quizStateFor(id) {
  if (!quizStates[id]) quizStates[id] = { index: 0, correct: 0, answered: false, finished: false };
  return quizStates[id];
}

function renderQuiz() {
  const quiz = currentUnit().quiz;
  const state = quizStateFor(activeUnit);
  if (state.finished) {
    const total = quiz.length;
    const pct = Math.round((state.correct / total) * 100);
    elements.quizProgress.textContent = `RESULTADO UNIDAD ${String(activeUnit).padStart(2, "0")}`;
    elements.question.textContent = `${state.correct} / ${total} correctas (${pct}%)`;
    elements.options.innerHTML = "";
    elements.feedback.textContent = pct >= PASS_MARK
      ? `APROBADA > superaste el 70%. La unidad queda marcada como aprobada.`
      : `REVISAR > necesitas ${Math.ceil((PASS_MARK / 100) * total)} correctas para aprobar (70%).`;
    elements.feedback.className = `feedback ${pct >= PASS_MARK ? "success" : "error"}`;
    elements.nextQuestion.hidden = true;
    elements.quizScore.textContent = `Mejor puntaje de la unidad: ${unitState(activeUnit).score ?? "--"}%`;
    return;
  }
  const item = quiz[state.index];
  elements.quizProgress.textContent = `PREGUNTA ${state.index + 1} / ${quiz.length}`;
  elements.question.textContent = item.q;
  elements.feedback.textContent = state.feedback || "";
  elements.feedback.className = `feedback ${state.feedbackClass || ""}`;
  elements.nextQuestion.hidden = false;
  elements.quizScore.textContent = `Correctas hasta ahora: ${state.correct}`;
  elements.options.innerHTML = item.a.map((answer, index) => {
    let extra = "";
    if (state.answered && index === item.correct) extra = " correct";
    if (state.answered && index === state.answeredIndex && index !== item.correct) extra = " incorrect";
    return `<button class="quiz-option${extra}" type="button" data-answer="${index}" ${state.answered ? "disabled" : ""}>${String.fromCharCode(65 + index)}. ${answer}</button>`;
  }).join("");
}

function answerQuestion(index) {
  const state = quizStateFor(activeUnit);
  if (state.answered) return;
  const quiz = currentUnit().quiz;
  const item = quiz[state.index];
  state.answered = true;
  state.answeredIndex = index;
  if (index === item.correct) state.correct += 1;
  state.feedback = `${index === item.correct ? "CORRECTO" : "REVISAR"} > ${item.note}`;
  state.feedbackClass = index === item.correct ? "success" : "error";
  renderQuiz();
}

function nextQuestion() {
  const state = quizStateFor(activeUnit);
  const quiz = currentUnit().quiz;
  if (state.finished) return;
  if (state.index + 1 >= quiz.length) {
    state.finished = true;
    const pct = Math.round((state.correct / quiz.length) * 100);
    saveUnitScore(activeUnit, pct);
  } else {
    state.index += 1;
    state.answered = false;
    state.answeredIndex = null;
    state.feedback = "";
    state.feedbackClass = "";
  }
  renderQuiz();
  renderNavigation();
  renderProgress();
  const stateNow = unitState(activeUnit);
  elements.status.textContent = `[ ${stateNow.label} ]`;
  elements.status.className = `unit-state state-${stateNow.key}`;
}

function resetQuiz() {
  quizStates[activeUnit] = { index: 0, correct: 0, answered: false, finished: false };
  renderQuiz();
}

function markCurrentReviewed() {
  markReviewed(activeUnit);
  renderModule();
}

function resetAllProgress() {
  if (!confirm("Se borrara el progreso y los puntajes guardados en este navegador. Continuar?")) return;
  progress = { units: {}, exam: { best: null, attempts: 0 } };
  store.save();
  Object.keys(quizStates).forEach((key) => delete quizStates[key]);
  renderModule();
}

function appendOutput(text, kind) {
  elements.output.classList.remove("empty-output");
  const line = document.createElement("span");
  line.textContent = text;
  if (kind) line.className = kind;
  elements.output.append(line);
}

async function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      if (!window.loadPyodide) {
        elements.pyodideStatus.textContent = "Descargando Python (Pyodide)...";
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = `${PYODIDE_INDEX}pyodide.js`;
          script.onload = resolve;
          script.onerror = () => reject(new Error("No se pudo descargar Pyodide (sin conexion?)"));
          document.head.appendChild(script);
        });
      }
      const py = await window.loadPyodide({ indexURL: PYODIDE_INDEX });
      py.setStdout({ batched: (text) => appendOutput(`${text}\n`) });
      py.setStderr({ batched: (text) => appendOutput(`${text}\n`, "error-line") });
      return py;
    })().catch((error) => {
      pyodidePromise = null;
      throw error;
    });
  }
  return pyodidePromise;
}

async function runCode() {
  const code = elements.editor.value;
  codeDrafts[activeUnit] = code;
  elements.output.textContent = "";
  elements.output.className = "code-output";
  const runButton = document.querySelector("#run-code");
  runButton.disabled = true;
  try {
    const py = await getPyodide();
    elements.pyodideStatus.textContent = "Ejecutando...";
    await py.runPythonAsync(code);
    if (!elements.output.textContent) appendOutput("[sin salida]");
    elements.pyodideStatus.textContent = "Listo. Podes editar el codigo y volver a ejecutar.";
  } catch (error) {
    const message = String(error && error.message ? error.message : error);
    appendOutput(message.split("\n").slice(-6).join("\n"), "error-line");
    elements.pyodideStatus.textContent = error.message && error.message.includes("Pyodide")
      ? "No se pudo cargar Python. Revisa tu conexion y vuelve a intentar."
      : "El codigo termino con un error (ver salida).";
  } finally {
    runButton.disabled = false;
  }
}

function resetCode() {
  delete codeDrafts[activeUnit];
  elements.editor.value = currentUnit().code;
  elements.output.textContent = "Salida del interprete aparecera aqui.";
  elements.output.className = "code-output";
}

async function copyCode() {
  const text = elements.editor.value;
  try {
    await navigator.clipboard.writeText(text);
    const button = document.querySelector("#copy-code");
    button.textContent = "COPIED";
    setTimeout(() => { button.textContent = "COPY"; }, 1300);
  } catch (error) {
    elements.editor.select();
    document.execCommand("copy");
  }
}

function examMarkup(question, index, total, correct, answered, answeredIndex) {
  const options = question.a.map((answer, i) => {
    let extra = "";
    if (answered && i === question.correct) extra = " correct";
    if (answered && i === answeredIndex && i !== question.correct) extra = " incorrect";
    return `<button class="quiz-option${extra}" type="button" data-exam-answer="${i}" ${answered ? "disabled" : ""}>${String.fromCharCode(65 + i)}. ${answer}</button>`;
  }).join("");
  return `
    <p class="label">PREGUNTA ${index + 1} / ${total} &middot; CORRECTAS: ${correct}</p>
    <h2>${question.q}</h2>
    <div class="quiz-options">${options}</div>
    <p id="exam-feedback" class="feedback" aria-live="polite"></p>
    <div class="quiz-controls">
      <button id="exam-next" class="action" type="button" ${answered ? "" : "disabled"}>NEXT &gt;</button>
      <button id="exam-abort" class="quiet-action" type="button">SALIR</button>
    </div>`;
}

const examState = { active: false, index: 0, correct: 0, answered: false, answeredIndex: null };

function renderExam() {
  if (!examState.active) {
    const best = progress.exam.best;
    const attempts = progress.exam.attempts;
    elements.examBody.innerHTML = `
      <button id="start-exam" class="action" type="button">INICIAR EXAMEN</button>
      <p id="exam-history" class="score-line">${best != null ? `Mejor intento: ${best}% en ${attempts} ${attempts === 1 ? "intento" : "intentos"} (aprobado: ${best >= PASS_MARK ? "si" : "no"})` : "Sin intentos todavia."}</p>`;
    document.querySelector("#start-exam").addEventListener("click", startExam);
    return;
  }
  if (examState.index >= finalExam.length) {
    const pct = Math.round((examState.correct / finalExam.length) * 100);
    progress.exam.attempts += 1;
    progress.exam.best = progress.exam.best == null ? pct : Math.max(progress.exam.best, pct);
    store.save();
    examState.active = false;
    elements.examBody.innerHTML = `
      <p class="label">RESULTADO FINAL</p>
      <h2>${examState.correct} / ${finalExam.length} correctas (${pct}%)</h2>
      <p class="feedback ${pct >= PASS_MARK ? "success" : "error"}">${pct >= PASS_MARK ? "APROBASTE el examen integrador." : `Para aprobar hacen falta ${Math.ceil((PASS_MARK / 100) * finalExam.length)} correctas.`}</p>
      <div class="quiz-controls">
        <button id="start-exam" class="action" type="button">REINICIAR EXAMEN</button>
        <button id="exam-abort" class="quiet-action" type="button">CERRAR</button>
      </div>`;
    document.querySelector("#start-exam").addEventListener("click", startExam);
    document.querySelector("#exam-abort").addEventListener("click", () => { elements.examBody.innerHTML = ""; renderExam(); });
    return;
  }
  const question = finalExam[examState.index];
  elements.examBody.innerHTML = examMarkup(question, examState.index, finalExam.length, examState.correct, examState.answered, examState.answeredIndex);
  elements.examBody.querySelectorAll("[data-exam-answer]").forEach((button) => {
    button.addEventListener("click", () => answerExam(Number(button.dataset.examAnswer)));
  });
  document.querySelector("#exam-next").addEventListener("click", nextExam);
  document.querySelector("#exam-abort").addEventListener("click", () => { examState.active = false; renderExam(); });
}

function startExam() {
  examState.active = true;
  examState.index = 0;
  examState.correct = 0;
  examState.answered = false;
  examState.answeredIndex = null;
  renderExam();
  elements.examBody.scrollIntoView({ behavior: "smooth", block: "center" });
}

function answerExam(index) {
  if (examState.answered) return;
  const question = finalExam[examState.index];
  examState.answered = true;
  examState.answeredIndex = index;
  if (index === question.correct) examState.correct += 1;
  renderExam();
  const feedback = document.querySelector("#exam-feedback");
  if (feedback) {
    feedback.textContent = `${index === question.correct ? "CORRECTO" : "REVISAR"} > ${question.note}`;
    feedback.className = `feedback ${index === question.correct ? "success" : "error"}`;
  }
}

function nextExam() {
  examState.index += 1;
  examState.answered = false;
  examState.answeredIndex = null;
  renderExam();
}

function log(message, type) {
  const line = document.createElement("p");
  if (type) line.className = type;
  line.textContent = message;
  elements.terminal.append(line);
  elements.terminal.scrollTop = elements.terminal.scrollHeight;
}

function runCommand(raw) {
  const [command, argument] = raw.trim().toLowerCase().split(/\s+/, 2);
  if (!command) return;
  log(`student@unab:~/ayed$ ${raw}`, "prompt");
  if (command === "help") {
    log("Comandos: help, unidades, unidad [1-11], temas, recursos, quiz, examen, progreso, clear");
  } else if (command === "unidades") {
    log(units.map((unit) => `${String(unit.id).padStart(2, "0")}: ${unit.title} [${unitState(unit.id).label}]`).join("\n"));
  } else if (command === "unidad" && argument && /^\d{1,2}$/.test(argument) && Number(argument) >= 1 && Number(argument) <= units.length) {
    goToUnit(Number(argument));
    log(`Unidad ${String(Number(argument)).padStart(2, "0")} cargada.`, "success");
  } else if (command === "temas") {
    log(currentUnit().topics.map((topic) => `> ${topic}`).join("\n"));
  } else if (command === "recursos") {
    log(currentUnit().resources.map((resource) => `[${resource[0]}] ${resource[1]}`).join("\n"));
  } else if (command === "quiz") {
    document.querySelector("#seccion-quiz").scrollIntoView({ behavior: "smooth", block: "center" });
    log("Quiz de la unidad enfocado.", "success");
  } else if (command === "examen") {
    if (!examState.active) startExam();
    else elements.examBody.scrollIntoView({ behavior: "smooth", block: "center" });
    log("Examen integrador.", "success");
  } else if (command === "progreso") {
    const reviewed = units.filter((unit) => ["revisada", "aprobada"].includes(unitState(unit.id).key)).length;
    log(`${reviewed}/${units.length} unidades revisadas. Examen mejor puntaje: ${progress.exam.best ?? "--"}%`, "success");
  } else if (command === "clear") {
    elements.terminal.innerHTML = "";
  } else {
    log(`Comando no encontrado: ${command}. Escribi help.`, "error");
  }
}

document.querySelector("#assessment-links").innerHTML = assessments.map((assessment) =>
  `<a class="assessment-link" href="${encodeURI(assessment[3])}" target="_blank" rel="noopener"><strong>[${assessment[0]}]</strong> ${assessment[1]}<small>${assessment[2]}</small></a>`
).join("");

elements.nav.addEventListener("click", (event) => {
  const button = event.target.closest(".module-button");
  if (!button) return;
  goToUnit(Number(button.dataset.id));
});

elements.progress.addEventListener("click", (event) => {
  const button = event.target.closest("[data-goto]");
  if (button) goToUnit(Number(button.dataset.goto));
});

elements.search.addEventListener("input", filterResources);
elements.options.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (button) answerQuestion(Number(button.dataset.answer));
});
elements.nextQuestion.addEventListener("click", nextQuestion);
document.querySelector("#reset-quiz").addEventListener("click", resetQuiz);
document.querySelector("#mark-reviewed").addEventListener("click", markCurrentReviewed);
document.querySelector("#reset-progress").addEventListener("click", resetAllProgress);
document.querySelector("#prev-unit").addEventListener("click", () => goToUnit(activeUnit - 1));
document.querySelector("#next-unit").addEventListener("click", () => goToUnit(activeUnit + 1));
document.querySelector("#run-code").addEventListener("click", runCode);
document.querySelector("#reset-code").addEventListener("click", resetCode);
document.querySelector("#copy-code").addEventListener("click", copyCode);
elements.editor.addEventListener("input", () => { codeDrafts[activeUnit] = elements.editor.value; });

document.querySelector("#terminal-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#command-input");
  runCommand(input.value);
  input.value = "";
});

const themeNames = ["", "matrix", "nord"];
const themeLabels = ["MOCHA", "MATRIX", "NORD"];
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "";
  const next = (themeNames.indexOf(current) + 1) % themeNames.length;
  if (themeNames[next]) document.documentElement.dataset.theme = themeNames[next];
  else delete document.documentElement.dataset.theme;
  document.querySelector("#theme-toggle").textContent = `THEME: ${themeLabels[next]}`;
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement.matches("input, textarea")) return;
  if (event.key === "/") { event.preventDefault(); elements.search.focus(); return; }
  if (/^[1-9]$/.test(event.key)) { goToUnit(Number(event.key)); return; }
  if (event.key === "0") { goToUnit(10); return; }
  if (event.key === "-") { goToUnit(11); return; }
  if (event.key.toLowerCase() === "q") { document.querySelector("#seccion-quiz").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  if (event.key.toLowerCase() === "e") { document.querySelector(".exam-panel").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  if (event.key === "?") log("Atajos: 1-9/0/- carga unidades, / busca recursos, q abre el quiz, e el examen.");
});

setInterval(() => {
  document.querySelector("#clock").textContent = new Date().toLocaleTimeString("es-AR", { hour12: false });
}, 1000);

renderModule();
renderExam();
