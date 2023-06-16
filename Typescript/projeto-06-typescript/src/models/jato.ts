import IAviao from "./aviao.js"

class Carro implements IAviao {
    private _nome: string = "";
    private _velocidadeAtual: number = 0.0;
    private _velocidadeMinima: number = 200;

    public constructor(nome: string) {
        this.nome = nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this.nome;
    }

    public get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    public decolar(): void {
        if(this._velocidadeAtual == 0){
            this._velocidadeAtual = 200;
        }
    }

    public acelerar(): void {
        if(this._velocidadeAtual >= this._velocidadeMinima){
            this._velocidadeAtual += 10;
        }
    }

    public desacelerar(): void {
        if(this._velocidadeAtual >= this._velocidadeMinima){
            this._velocidadeAtual -= 10;
        }
    }

    public pousar(): void {
        if(this._velocidadeAtual == this._velocidadeMinima){
            console.log("Pode pousar!")
        }
    }
}

export default Carro;