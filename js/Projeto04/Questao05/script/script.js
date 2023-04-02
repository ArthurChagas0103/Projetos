document.addEventListener("DOMContentLoaded", function() {
	let paragrafo = document.querySelector("#paragrafo");
	let botao = document.querySelector("#botao");
	
	botao.addEventListener("click", function() {
		if (paragrafo.style.display === "none") {
			paragrafo.style.display = "block";
			botao.textContent = "Ocultar";
		} else {
			paragrafo.style.display = "none";
			botao.textContent = "Mostrar";
		}
	});
});