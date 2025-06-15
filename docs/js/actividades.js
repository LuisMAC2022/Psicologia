const preguntas = [
  {
    texto: "¿Cuál de las siguientes es una cualidad de la atención?",
    opciones: ["Elasticidad", "Conmutación", "Apatía"],
    correcta: 1
  },
  {
    texto: "La memoria sensorial retiene la información...",
    opciones: ["Durante instantes", "Durante varios minutos", "De forma permanente"],
    correcta: 0
  },
  {
    texto: "Según los modelos, la memoria de trabajo incluye...",
    opciones: ["Bucle fonológico", "Amígdala", "Sistema reticular"],
    correcta: 0
  }
];

function crearCuestionario() {
  const contenedor = document.getElementById('quiz-container');
  preguntas.forEach((p, i) => {
    const seccion = document.createElement('section');
    const titulo = document.createElement('h2');
    titulo.textContent = `Pregunta ${i + 1}`;
    seccion.appendChild(titulo);

    const enunciado = document.createElement('p');
    enunciado.textContent = p.texto;
    seccion.appendChild(enunciado);

    p.opciones.forEach((op, j) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `preg${i}`;
      input.value = j;
      label.appendChild(input);
      label.appendChild(document.createTextNode(op));
      seccion.appendChild(label);
      seccion.appendChild(document.createElement('br'));
    });

    contenedor.appendChild(seccion);
  });
}

function comprobarRespuestas() {
  let aciertos = 0;
  preguntas.forEach((p, i) => {
    const seleccion = document.querySelector(`input[name=preg${i}]:checked`);
    if (seleccion && Number(seleccion.value) === p.correcta) {
      aciertos++;
    }
  });
  const resultado = document.getElementById('result');
  resultado.textContent = `Respuestas correctas: ${aciertos} de ${preguntas.length}`;
}

document.getElementById('submit-btn').addEventListener('click', comprobarRespuestas);
crearCuestionario();
