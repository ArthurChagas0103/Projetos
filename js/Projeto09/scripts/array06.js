function uppar() {
    let pokemons = [];
    let pokemonsUppados = "";

    pokemons.push(
        {
            id: 1,
            nome: 'Eevee',
            tipo: 'normal',
            registro: 133,
            CP: 300,
        },
        {
            id: 2,
            nome: 'Charmander',
            tipo: 'fire',
            registro: 004,
            CP: 500,
        },
        {
            id: 3,
            nome: 'Abra',
            tipo: 'psíquico',
            registro: 063,
            CP: 350
        }
    );

    pokemonsUppados = pokemons.map(function (pokemon) {
        return `<li><i>${pokemon.nome} - ${pokemon.CP + 50}</i></li>`;
    });

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${pokemonsUppados.join('')}</b>`
    });
}

document.getElementById('btnUppar').addEventListener('click', uppar);