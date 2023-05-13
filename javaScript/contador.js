let campoValor = document.getElementById("valor");
const botaoIncremento = document.getElementById("botao-incremento");
const botaoDecremento = document.getElementById("botao-decremento");

let valor = campoValor.value;
valor = 0;
campoValor.textContent = valor;

function incrementaValor() {
	valor++;
	campoValor.textContent = valor;
	trocaCor();
}

function decrementaValor() {
	valor--;
	campoValor.textContent = valor;
	trocaCor();
}

function trocaCor() {
	if (valor > 0) {
		campoValor.style.color = "limeGreen";
	} else if (valor < 0){
		campoValor.style.color = "red";
	} else {
		campoValor.style.color = "black";
	}
}

botaoIncremento.addEventListener("click", incrementaValor);
botaoDecremento.addEventListener("click", decrementaValor);