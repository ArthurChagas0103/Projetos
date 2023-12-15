class Municipio {
    private _uf: string = "";
    private _nomeDoMunicipio: string = "";
    private _populacao: number = 0;

    constructor(uf: string, nomeDoMunicipio: string, populacao: number) {
        this._uf = uf.toUpperCase();
        this._nomeDoMunicipio = nomeDoMunicipio.toUpperCase();
        this._populacao = populacao;
    }

    get uf(): string {
        return this._uf;
    }

    get nomeDoMunicipio(): string {
        return this._nomeDoMunicipio;
    }

    get populacao(): number {
        return this._populacao;
    }
}

export default Municipio;  