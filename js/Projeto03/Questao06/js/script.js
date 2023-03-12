let getLocalStorage = localStorage.getItem("arrayQuestao5");

let getLocalStorageObjeto = JSON.parse(getLocalStorage);

console.log(getLocalStorageObjeto)

function getID(item) {
    return item.id;
  }

console.log(getLocalStorageObjeto.map(getID))