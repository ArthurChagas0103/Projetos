"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_js_1 = __importDefault(require("./models/carro.js"));
const fusca = new carro_js_1.default("Fusca 92", 110);
console.log(JSON.stringify(fusca));
fusca.acelerar();
console.log(JSON.stringify(fusca));
fusca.freiar();
console.log(JSON.stringify(fusca));
const minhaVariavel = (teste) => {
    return 5;
};
const teste = fusca;
