window.addEventListener('load', chamarApi);
const btnAmerica = document.querySelector("#btnAmerica")
const btnAfrica = document.querySelector("#btnAfrica")
const btnAsia = document.querySelector("#btnAsia")
const btnEuropa = document.querySelector("#btnEuropa")
const btnOceania = document.querySelector("#btnOceania")
const btnAntardida = document.querySelector("#btnAntardida")

async function chamarApi() {
  try {
    const response = await fetch('https://restcountries.com/v2/all');
    const dados = await response.json();
    exibir(dados);
  } catch (error) {
    console.log(`${error} - Erro na requisição`);
  }
}

let continente = []

function exibir(dados) {
  const tabela1 = document.querySelector('#tabela1');
  const tabela2 = document.querySelector('#tabela2');
  const populacaoTotal1Text = document.querySelector('#populacaoTotal1');
  const populacaoTotal2Text = document.querySelector('#populacaoTotal2');
  const totalPaises1 = document.querySelector('#totalPaises1');
  const totalPaises2 = document.querySelector('#totalPaises2');

  let paises1 = dados.slice(); // Copia dos dados iniciais
  let paises2 = [];

  function atualizarTabela1() {
    tabela1.innerHTML = `
          <tr class="table-dark table-hover table-striped">
            <th scope="col">#</th>
            <th scope="col">Adicionar aos favoritos</th>
            <th scope="col">Bandeira</th>
            <th scope="col">Nome</th>
            <th scope="col">População</th>
          </tr>
        `;

    paises1.sort((a, b) => a.name.localeCompare(b.name)); // Ordenar em ordem alfabética

    paises1.forEach((pais, index) => {
      continente.push(pais.region)
      tabela1.innerHTML += `
            <tr>
              <td>${index + 1}</td>
              <td><button class="btnAdd" data-index="${index}">+</button></td>
              <td><img src="${pais.flag}" alt="Bandeira" class="bandeira"></td>
              <td>${pais.name}</td>
              <td>${pais.population.toLocaleString()}</td>
            </tr>
          `;
    });

    totalPaises1.textContent = paises1.length.toLocaleString();
    populacaoTotal1Text.textContent = paises1.reduce((total, pais) => total + pais.population, 0).toLocaleString();
  }


  function atualizarTabela2() {
    tabela2.innerHTML = `
      <tr class="table-dark table-hover table-striped">
        <th scope="col">#</th>
        <th scope="col">Bandeira</th>
        <th scope="col">Nome</th>
        <th scope="col">População</th>
        <th scope="col">Excluir</th>
      </tr>
    `;
    paises2.sort((a, b) => a.name.localeCompare(b.name)); // Ordenar em ordem alfabética
    paises2.forEach((pais, index) => {
      tabela2.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td><img src="${pais.flag}" alt="Bandeira" class="bandeira"></td>
          <td>${pais.name}</td>
          <td>${pais.population.toLocaleString()}</td>
          <td><button class="btnRemove" data-index="${index}">Excluir</button></td>
        </tr>
      `;
    });
    totalPaises2.textContent = paises2.length.toLocaleString();
    populacaoTotal2Text.textContent = paises2.reduce((total, pais) => total + pais.population, 0).toLocaleString();
  }

  atualizarTabela1();
  atualizarTabela2();

  tabela1.addEventListener('click', (event) => {
    if (event.target.classList.contains('btnAdd')) {
      const index = event.target.getAttribute('data-index');
      const pais = paises1[index];

      paises1.splice(index, 1);
      paises2.push(pais);

      atualizarTabela1();
      atualizarTabela2();
    }
  });

  tabela2.addEventListener('click', (event) => {
    if (event.target.classList.contains('btnRemove')) {
      const index = event.target.getAttribute('data-index');
      const pais = paises2[index];

      paises2.splice(index, 1);
      paises1.push(pais);

      atualizarTabela1();
      atualizarTabela2();
    }
  });

  btnAmerica.addEventListener('click', () => {
    const paisesAmerica = dados.filter(pais => pais.region === "Americas");
    paises1 = paisesAmerica;
    atualizarTabela1();
  });

  btnAfrica.addEventListener('click', () => {
    const paisesAfrica = dados.filter(pais => pais.region === "Africa");
    paises1 = paisesAfrica;
    atualizarTabela1();
  });

  btnAsia.addEventListener('click', () => {
    const paisesAsia = dados.filter(pais => pais.region === "Asia");
    paises1 = paisesAsia;
    atualizarTabela1();
  });

  btnEuropa.addEventListener('click', () => {
    const paisesEuropa = dados.filter(pais => pais.region === "Europe");
    paises1 = paisesEuropa;
    atualizarTabela1();
  });

  btnOceania.addEventListener('click', () => {
    const paisesOceania = dados.filter(pais => pais.region === "Oceania");
    paises1 = paisesOceania;
    atualizarTabela1();
  });

  btnAntardida.addEventListener('click', () => {
    const paisesAntardida = dados.filter(pais => pais.region === "Polar");
    paises1 = paisesAntardida;
    atualizarTabela1();
  });
}