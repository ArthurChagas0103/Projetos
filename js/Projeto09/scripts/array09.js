function somar() {
    let pokemons = [];
    let valorInicial = 0;
    let somaCP = 0;

    pokemons.push(
        {
            id: 1,
            nome: 'Eevee',
            tipo: 'normal',
            registro: '133',
            CP: 300,
        },
        {
            id: 2,
            nome: 'Charmander',
            tipo: 'fire',
            registro: '004',
            CP: 500,
        },
        {
            id: 3,
            nome: 'Abra',
            tipo: 'psíquico',
            registro: '063',
            CP: 350
        }
    );

    somaCP = pokemons.reduce(
        (acumulador, valorCorrente) => acumulador + valorCorrente.CP,
        valorInicial
    );

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${somaCP} CP</b>`
    });
}

document.getElementById('btnSomar').addEventListener('click', somar);