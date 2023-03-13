let getLocalStorage = localStorage.getItem("arrayQuestao4");

let getLocalStorageObjeto = JSON.parse(getLocalStorage);

console.log(getLocalStorageObjeto)

const produtosFiltrados = getLocalStorageObjeto.filter(produto => produto.categoria === "alimento");

//const produtosFiltrados = getLocalStorageObjeto.filter(produto => produto.categoria === "alimento").map(identificador => identificador.id);

console.log(produtosFiltrados)

localStorage.setItem("arrayQuestao5", JSON.stringify(produtosFiltrados));