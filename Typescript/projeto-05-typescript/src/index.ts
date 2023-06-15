import Carro from "./models/carro.js"
import IRegistravel from "./models/registravel.js"

const fusca = new Carro("Fusca 92", 110);

console.log(JSON.stringify(fusca))

fusca.acelerar();

console.log(JSON.stringify(fusca));

fusca.freiar();

console.log(JSON.stringify(fusca));

type MinhaFuncao = (teste: string) => number;

const minhaVariavel: MinhaFuncao = (teste: string) => {
    return 5;
}

const teste: IRegistravel = fusca;