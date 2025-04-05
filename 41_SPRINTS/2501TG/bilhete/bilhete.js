function classificarIngresso() {
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');
    
    if (idade === '') {
        resultado.textContent = 'Por favor, informe sua idade.';
        resultado.style.color = 'red';
        return;
    }
    
    const idadeNumerica = parseInt(idade);
    
    if (isNaN(idadeNumerica)) {
        resultado.textContent = 'Idade inválida.';
        resultado.style.color = 'red';
        return;
    }
    
    if (idadeNumerica <= 5) {
        resultado.textContent = 'Entrada gratuita';
        resultado.style.color = 'green';
    } else if (idadeNumerica >= 6 && idadeNumerica <= 12) {
        resultado.textContent = 'Ingresso infantil (R$ 10,00)';
        resultado.style.color = 'blue';
    } else if (idadeNumerica >= 13 && idadeNumerica <= 17) {
        resultado.textContent = 'Ingresso juvenil (R$ 15,00)';
        resultado.style.color = 'blue';
    } else if (idadeNumerica >= 18 && idadeNumerica <= 59) {
        resultado.textContent = 'Ingresso adulto (R$ 30,00)';
        resultado.style.color = 'blue';
    } else if (idadeNumerica >= 60) {
        resultado.textContent = 'Entrada gratuita para idosos';
        resultado.style.color = 'green';
    }
}