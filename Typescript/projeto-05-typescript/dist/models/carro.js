"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(modelo, velocidadeMaxima) {
        this._modelo = "";
        this._velocidadeAtual = 0.0;
        this._velocidadeMaxima = 0.0;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    acelerar() {
        if (this._velocidadeAtual < this._velocidadeMaxima) {
            this._velocidadeAtual += 10;
        }
    }
    freiar() {
        if (this._velocidadeAtual > 0) {
            this._velocidadeAtual -= 10;
        }
    }
    set modelo(modelo) {
        this._modelo = modelo.toUpperCase();
    }
    get modelo() {
        return this._modelo;
    }
    get velocidadeAtual() {
        return this._velocidadeAtual;
    }
    set velocidadeMaxima(velocidadeMaxima) {
        this._velocidadeMaxima = velocidadeMaxima;
    }
    get velocidadeMaxima() {
        return this._velocidadeMaxima;
    }
}
exports.default = Carro;
