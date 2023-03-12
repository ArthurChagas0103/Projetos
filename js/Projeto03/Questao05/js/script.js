let getLocalStorage = localStorage.getItem("arrayQuestao4");

let getLocalStorageObjeto = JSON.parse(getLocalStorage);

console.log(getLocalStorageObjeto)

const produtosFiltrados = getLocalStorageObjeto.filter((produto) => {
    return produto.categoria === "alimento";
});

console.log(produtosFiltrados)

localStorage.setItem("arrayQuestao5", JSON.stringify(produtosFiltrados));