const treinos = [
  {
    dia: "DIA 1 – FULL BODY INTENSO",
    tecnica: "Circuito intenso",
    objetivo: "Aumentar gasto calórico e resistência",
    exercicios: [
      { nome: "Agachamento com barra", series: "3", reps: "15", tecnica: "Circuito", obs: "" },
      { nome: "Flexão de braço", series: "3", reps: "15", tecnica: "Circuito", obs: "" },
      { nome: "Remada curvada", series: "3", reps: "15", tecnica: "Circuito", obs: "" },
      { nome: "Abdominal canivete", series: "3", reps: "20", tecnica: "Circuito", obs: "" },
      { nome: "Corrida 10min", series: "-", reps: "-", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 2 – PERNAS + CARDIO",
    tecnica: "Superset + finalização cardio",
    objetivo: "Tonificar membros inferiores e acelerar metabolismo",
    exercicios: [
      { nome: "Leg press + Cadeira extensora", series: "3", reps: "12 + 15", tecnica: "Superset", obs: "" },
      { nome: "Agachamento sumô com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Stiff com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Panturrilha em pé", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Bike HIIT 12min", series: "-", reps: "-", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 3 – SUPERIOR + CORE",
    tecnica: "Bi-set com pouco descanso",
    objetivo: "Definição muscular e resistência",
    exercicios: [
      { nome: "Supino reto + Crucifixo inclinado", series: "3", reps: "12 + 15", tecnica: "Bi-set", obs: "" },
      { nome: "Puxada alta + Remada baixa", series: "3", reps: "12 + 12", tecnica: "Bi-set", obs: "" },
      { nome: "Rosca direta", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Tríceps coice", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Prancha frontal", series: "3", reps: "45s", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 4 – FUNCIONAL CARDIO",
    tecnica: "Treino contínuo de alta intensidade",
    objetivo: "Alta queima calórica com movimentos dinâmicos",
    exercicios: [
      { nome: "Burpee", series: "3", reps: "12", tecnica: "HIIT", obs: "" },
      { nome: "Mountain climber", series: "3", reps: "40s", tecnica: "", obs: "" },
      { nome: "Agachamento com salto", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Corrida estacionária", series: "3", reps: "40s", tecnica: "", obs: "" },
      { nome: "Pular corda 5min", series: "-", reps: "-", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 5 – GLÚTEO E POSTERIOR",
    tecnica: "Volume alto com intensidade",
    objetivo: "Definir posteriores e glúteos",
    exercicios: [
      { nome: "Avanço no step", series: "3", reps: "15 por perna", tecnica: "", obs: "" },
      { nome: "Stiff com barra", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Glúteo na polia", series: "3", reps: "15 por perna", tecnica: "", obs: "" },
      { nome: "Cadeira flexora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Bike leve 10min", series: "-", reps: "-", tecnica: "Cardio regenerativo", obs: "" }
    ]
  },
  {
    dia: "DIA 6 – OMBRO + ABDÔMEN",
    tecnica: "Bi-set + circuito de abdominal",
    objetivo: "Definição e resistência do core",
    exercicios: [
      { nome: "Elevação lateral + Elevação frontal", series: "3", reps: "15 + 12", tecnica: "Bi-set", obs: "" },
      { nome: "Desenvolvimento militar", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Crucifixo inverso", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Abdominal infra", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Prancha lateral com toque", series: "3", reps: "30s", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 7 – FUNCIONAL + CORRIDA",
    tecnica: "Cardio intercalado com resistência",
    objetivo: "Encerrar a semana com intensidade",
    exercicios: [
      { nome: "Agachamento + Corrida 1min", series: "4", reps: "20 + 60s", tecnica: "Superset dinâmico", obs: "" },
      { nome: "Flexão + Burpee", series: "4", reps: "10 + 10", tecnica: "Bi-set", obs: "" },
      { nome: "Abdominal bicicleta", series: "4", reps: "20", tecnica: "", obs: "" },
      { nome: "Corrida 15min", series: "-", reps: "-", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 8 – FULL BODY REINÍCIO",
    tecnica: "Circuito contínuo",
    objetivo: "Retomar com intensidade gradual",
    exercicios: [
      { nome: "Agachamento", series: "3", reps: "15", tecnica: "Circuito", obs: "" },
      { nome: "Flexão de braço", series: "3", reps: "12", tecnica: "Circuito", obs: "" },
      { nome: "Remada curvada", series: "3", reps: "15", tecnica: "Circuito", obs: "" },
      { nome: "Prancha frontal", series: "3", reps: "40s", tecnica: "", obs: "" },
      { nome: "Corrida 10min", series: "-", reps: "-", tecnica: "Cardio", obs: "" }
    ]
  },
  {
    dia: "DIA 9 – INFERIOR DE CHOQUE",
    tecnica: "Superset e explosão",
    objetivo: "Alta intensidade e foco em pernas",
    exercicios: [
      { nome: "Leg press + Cadeira extensora", series: "4", reps: "12 + 12", tecnica: "Superset", obs: "" },
      { nome: "Agachamento com salto", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Panturrilha sentado", series: "4", reps: "20", tecnica: "", obs: "" },
      { nome: "Corrida leve 12min", series: "-", reps: "-", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 10 – SUPERIOR RÁPIDO",
    tecnica: "Treino em ritmo acelerado",
    objetivo: "Definição e resistência",
    exercicios: [
      { nome: "Supino reto com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Puxada frente", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Rosca alternada", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Tríceps corda", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Abdominal prancha com toque", series: "3", reps: "30s", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 11 – FUNCIONAL DE IMPACTO",
    tecnica: "Cardio intercalado + movimentos compostos",
    objetivo: "Queimar gordura com variação",
    exercicios: [
      { nome: "Burpee + Skipping", series: "3", reps: "10 + 40s", tecnica: "Superset", obs: "" },
      { nome: "Afundo alternado", series: "3", reps: "15 por perna", tecnica: "", obs: "" },
      { nome: "Abdominal remador", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Pular corda 5min", series: "-", reps: "-", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 12 – CORE + CARDIO",
    tecnica: "Circuito abdominal + finalização HIIT",
    objetivo: "Definição abdominal e cardio forte",
    exercicios: [
      { nome: "Abdominal infra", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Prancha frontal", series: "3", reps: "60s", tecnica: "", obs: "" },
      { nome: "Abdominal oblíquo alternado", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Bike HIIT 12min", series: "-", reps: "-", tecnica: "Cardio intenso", obs: "" }
    ]
  },
  {
    dia: "DIA 13 – CIRCUITO FINAL 1",
    tecnica: "Full body com pouco descanso",
    objetivo: "Alta densidade e queima de gordura",
    exercicios: [
      { nome: "Agachamento", series: "3", reps: "20", tecnica: "Circuito", obs: "" },
      { nome: "Flexão", series: "3", reps: "15", tecnica: "Circuito", obs: "" },
      { nome: "Remada curvada", series: "3", reps: "15", tecnica: "Circuito", obs: "" },
      { nome: "Prancha + Elevação de pernas", series: "3", reps: "30s", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 14 – CIRCUITO FINAL 2",
    tecnica: "Full body + cardio longo",
    objetivo: "Fechamento da fase com intensidade",
    exercicios: [
      { nome: "Burpee", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Mountain climber", series: "3", reps: "45s", tecnica: "", obs: "" },
      { nome: "Afundo + Corrida", series: "3", reps: "12 por perna + 3min", tecnica: "Bi-set funcional", obs: "" },
      { nome: "Corrida 15min", series: "-", reps: "-", tecnica: "Cardio longo", obs: "" }
    ]
  }
];




// --- RENDERIZAÇÃO DOS TREINOS ---
const treinoContainer = document.getElementById("treinoContainer");
const progresso = JSON.parse(localStorage.getItem("progresso") || "{}");

treinos.forEach((treino, i) => {
  const card = document.createElement("div");
  card.className = "card";

  let html = `
    <h2>${treino.dia}</h2>
    <p><strong>Técnica:</strong> ${treino.tecnica}</p>
    <p><strong>Objetivo:</strong> ${treino.objetivo}</p>
    <table class="exercise-table">
      <thead>
        <tr>
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
        </tr>
      </thead>
      <tbody>
  `;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `
      <tr class="exercise-row ${doneClass}" data-key="${key}">
        <td><input type="checkbox" ${checked}></td>
        <td>${ex.nome || "-"}</td>
        <td>${ex.series || "-"}</td>
        <td>${ex.reps || "-"}</td>
        <td>${ex.tecnica || "-"}</td>
        <td>${ex.obs || "-"}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

// --- CHECKBOX PROGRESSO ---
document.querySelectorAll(".exercise-row input[type='checkbox']").forEach(input => {
  input.addEventListener("change", function () {
    const row = this.closest(".exercise-row");
    const key = row.dataset.key;
    const feito = this.checked;
    row.classList.toggle("done", feito);
    progresso[key] = { feito };
    localStorage.setItem("progresso", JSON.stringify(progresso));
  });
});

// --- TIMER POR EXERCÍCIO ---
function iniciarTimer(btn) {
  const span = btn.nextElementSibling;
  let tempo = 60;
  span.textContent = formatar(tempo);
  btn.disabled = true;

  const intervalo = setInterval(() => {
    tempo--;
    span.textContent = formatar(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      btn.disabled = false;
      span.textContent = "✔️";
    }
  }, 1000);
}

function formatar(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

// --- FEEDBACK ---
const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});

// --- DARK MODE ---
document.getElementById("darkToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});







