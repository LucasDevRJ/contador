let campoValor = document.getElementById("valor");
const botaoIncremento = document.getElementById("botao-incremento");
const botaoDecremento = document.getElementById("botao-decremento");

let valor = campoValor.value;
valor = 0;
campoValor.textContent = valor;

function incrementaValor() {
	valor++;
	campoValor.textContent = valor;
}

function decrementaValor() {
	valor--;
	campoValor.textContent = valor;
}

botaoIncremento.addEventListener("click", incrementaValor);
botaoDecremento.addEventListener("click", decrementaValor);