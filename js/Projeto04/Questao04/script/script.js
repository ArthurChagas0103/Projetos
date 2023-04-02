document.addEventListener("DOMContentLoaded", function() {
	let corFundo = "#f8f9fa";
	let selectCor = document.querySelector("#selectCor");
	
	selectCor.addEventListener("change", function() {
		var corSelecionada = selectCor.value;
	
		switch (corSelecionada) {
			case "vermelho":
				corFundo = "#dc3545";
				break;
			case "azul":
				corFundo = "#007bff";
				break;
			case "verde":
				corFundo = "#28a745";
				break;
			default:
				corFundo = "#f8f9fa";
				break;
		}
		document.querySelector("body").style.backgroundColor = corFundo;
	});
});





