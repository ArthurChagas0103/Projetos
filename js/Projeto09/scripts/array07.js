function buscar() {
    let pokemons = [];
    let filtroCharmander = "";
    let listaCharmander = "";

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

    filtroCharmander = pokemons.filter(charizard => charizard.nome == 'Charmander');

    for (let i = 0; i < filtroCharmander.length; i++) {
        listaCharmander += `<li>id: ${filtroCharmander[i].id}</li> <li>nome: ${filtroCharmander[i].nome}</li> <li>tipo: ${filtroCharmander[i].tipo}</li> <li>registro: ${filtroCharmander[i].registro}</li> <li>CP: ${filtroCharmander[i].CP}</li>`
    }

    bootbox.alert({
        title: 'Resultado',
        message: `<b>${listaCharmander}</b>`
    });
}

document.getElementById('btnBuscar').addEventListener('click', buscar);