window.addEventListener('load', function () {
    fetch('https://restcountries.com/v2/all').then(res => {
        res.json().then(dados => {
            buscaPaises(dados);
        });
    }).catch(erro => {
        console.log(erro + " Erro na requisição dos dados")
    });

    function buscaPaises(dados) {

        console.log(dados)

        const tabelaBody = document.querySelector('#tabelaBody');

        for (let i = 0; i < dados.length; i++) {
            if (dados[i].capital == undefined) {
                tabelaBody.innerHTML += `<tr><td>${i}</td><td>${dados[i].name}</td><td>${dados[i].alpha2Code}</td><td></td></tr>`;
            }
            else {
                tabelaBody.innerHTML += `<tr><td>${i}</td><td>${dados[i].name}</td><td>${dados[i].alpha2Code}</td><td>${dados[i].capital}</td></tr>`;
            }
        }
    }
});