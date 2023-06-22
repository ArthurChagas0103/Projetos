"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turboelice {
    constructor(nome) {
        this._velocidadeAtualDeVoo = 0.0;
        this._velocidadeMinimaDeVoo = 300.0;
        this._velocidadeAceleracao = 5.0;
        this._nome = "";
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    decolar() {
        if (this._velocidadeAtualDeVoo == 0) {
            this._velocidadeAtualDeVoo = this._velocidadeMinimaDeVoo;
        }
    }
    acelerar() {
        this._velocidadeAtualDeVoo += this._velocidadeAceleracao;
    }
    desacelerar() {
        if (this._velocidadeAtualDeVoo > this._velocidadeMinimaDeVoo) {
            this._velocidadeAtualDeVoo -= this._velocidadeAceleracao;
        }
    }
    pousar() {
        if (this._velocidadeAtualDeVoo == this._velocidadeMinimaDeVoo) {
            this._velocidadeAtualDeVoo = 0;
        }
    }
}
exports.default = Turboelice;
