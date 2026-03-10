let currentSolution = 0;
let currentEquationText = "";

function generateExercise() {
    // Tipos de ecuaciones aleatorias
    const type = Math.floor(Math.random() * 2);
    let a, b, c, x;

    if (type === 0) {
        // Forma: ax + b = c
        a = Math.floor(Math.random() * 12) + 2;
        x = Math.floor(Math.random() * 15) - 5; // Puede ser negativo
        b = Math.floor(Math.random() * 30);
        c = (a * x) + b;
        currentEquationText = `${a}x + ${b} = ${c}`;
    } else {
        // Forma: ax - b = c
        a = Math.floor(Math.random() * 10) + 2;
        x = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 20) + 1;
        c = (a * x) - b;
        currentEquationText = `${a}x - ${b} = ${c}`;
    }

    currentSolution = x;
    document.getElementById('exercise-display').innerHTML = `<div class="formula">${currentEquationText}</div>`;
    document.getElementById('user-answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const userVal = parseFloat(document.getElementById('user-answer').value);
    const feedback = document.getElementById('feedback');
    const historyList = document.getElementById('history-list');

    if (isNaN(userVal)) return;

    // Eliminar mensaje de "vacío"
    if (document.querySelector('.empty-msg')) {
        historyList.innerHTML = '';
    }

    const li = document.createElement('li');
    li.className = 'history-item';

    if (userVal === currentSolution) {
        feedback.innerText = "¡Brillante! Resultado correcto. 🌟";
        feedback.className = "correct";
        li.innerHTML = `<span>${currentEquationText}</span> <span style="color:green">✓</span>`;
    } else {
        feedback.innerText = `Casi... la respuesta era ${currentSolution}. ¡Intenta otro!`;
        feedback.className = "incorrect";
        li.innerHTML = `<span>${currentEquationText}</span> <span style="color:red">✗</span>`;
    }

    historyList.prepend(li); // Agregar al inicio de la lista
    setTimeout(generateExercise, 2000); // Generar uno nuevo automáticamente tras 2 segundos
}

window.onload = generateExercise;