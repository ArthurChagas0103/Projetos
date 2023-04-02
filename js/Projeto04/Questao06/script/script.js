document.addEventListener("DOMContentLoaded", function() {
	let form = document.querySelector("form");
	let resultado = document.querySelector("#resultado");
	
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		var numero = parseInt(document.querySelector("#numero").value);
		
		if (numero === 0) {
			resultado.textContent = "Programa finalizado.";
			return;
		}
		
		if (numero < 0) {
			resultado.textContent = "Digite um número positivo.";
			return;
		}
		
		if (numero % 3 === 0 && numero % 5 === 0) {
			resultado.textContent = "O número " + numero + " é divisível por 3 e 5 ao mesmo tempo.";
		} else {
			resultado.textContent = "O número " + numero + " não é divisível por 3 e 5 ao mesmo tempo.";
		}
		
		document.querySelector("#numero").value = "";
	});
});