"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jato_1 = __importDefault(require("./models/jato"));
const turboelice_1 = __importDefault(require("./models/turboelice"));
function acionaJato() {
    console.log("** Jato **");
    const jato = new jato_1.default("F18");
    console.log(JSON.stringify(jato));
    jato.decolar();
    console.log(JSON.stringify(jato));
    jato.acelerar();
    console.log(JSON.stringify(jato));
    jato.desacelerar();
    console.log(JSON.stringify(jato));
    jato.pousar();
    console.log(JSON.stringify(jato));
}
function acionaTurboelice() {
    console.log("** Turboélice **");
    const turboelice = new turboelice_1.default("ATR");
    console.log(JSON.stringify(turboelice));
    turboelice.decolar();
    console.log(JSON.stringify(turboelice));
    turboelice.acelerar();
    console.log(JSON.stringify(turboelice));
    turboelice.desacelerar();
    console.log(JSON.stringify(turboelice));
    turboelice.pousar();
    console.log(JSON.stringify(turboelice));
}
acionaJato();
acionaTurboelice();
