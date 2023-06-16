let idPokemon = document.querySelectorAll('#idPokemon')[0];

function buscar() {
    let pokemons = [];
    let filtroPokemon = "";
    let listaPokemon = "";

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

    filtroPokemon = pokemons.find(pokemon => pokemon.id == parseInt(idPokemon.value));

    listaPokemon += `<li>id: ${filtroPokemon.id}</li> <li>nome: ${filtroPokemon.nome}</li> <li>tipo: ${filtroPokemon.tipo}</li> <li>registro: ${filtroPokemon.registro}</li> <li>CP: ${filtroPokemon.CP}</li>`

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${listaPokemon}</b>`
    });
}

document.getElementById('btnBuscar').addEventListener('click', buscar);