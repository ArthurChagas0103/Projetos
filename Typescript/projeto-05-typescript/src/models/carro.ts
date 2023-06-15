import IRegistravel from "./registravel.js"

class Carro implements IRegistravel {
    private _modelo: string = "";
    private _velocidadeAtual: number = 0.0;
    private _velocidadeMaxima: number = 0.0;
    public id: number = 0;

    public constructor(modelo: string, velocidadeMaxima: number) {
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    public acelerar(): void {
        if (this._velocidadeAtual < this._velocidadeMaxima) {
            this._velocidadeAtual += 10;
        }
    }

    public freiar(): void {
        if (this._velocidadeAtual > 0) {
            this._velocidadeAtual -= 10;
        }
    }

    public set modelo(modelo: string) {
        this._modelo = modelo.toUpperCase();
    }

    public get modelo(): string {
        return this._modelo;
    }

    public get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    public set velocidadeMaxima(velocidadeMaxima: number) {
        this._velocidadeMaxima = velocidadeMaxima;
    }

    public get velocidadeMaxima(): number {
        return this._velocidadeMaxima;
    }

    public imprimir(): void {
        console.log("O modelo do carro é: ", this.modelo);
    }

    public getId(): number {
        return this.id;
    }
}

export default Carro;