import fs from "fs";
import Municipio from "./models/municipio";

class MunicipioFactory {
    private _municipios: Municipio[] = [];

    constructor(csvFilePath: string) {
        try {
            const fileContents = fs.readFileSync(csvFilePath, "utf-8");
            const lines = fileContents.split("\n");
            const headers = lines[0].split(",");

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].split(',');
                if (line.length === headers.length) {
                    const municipio = this.createMunicipioFromLine(headers, line);
                    if (municipio) {
                        this._municipios.push(municipio);
                    }
                }
            }

            console.log("Leitura do arquivo concluída.");
        } catch (error) {
            console.error("Erro ao abrir o arquivo:", error);
        }
    }

    private createMunicipioFromLine(headers: string[], line: string[]): Municipio | null {
        const ufIndex = headers.findIndex((header) => header.toLowerCase() === "uf");
        const nomeDoMunicipioIndex = headers.findIndex((header) => header.toLowerCase() === "nome do município");
        const populacaoIndex = headers.findIndex((header) => header.toLowerCase().trim() === "população");

        const uf = line[ufIndex];
        const nomeDoMunicipio = line[nomeDoMunicipioIndex];
        const populacao = parseInt(line[populacaoIndex], 10);

        if (uf && nomeDoMunicipio && !isNaN(populacao)) {
            return new Municipio(uf, nomeDoMunicipio, populacao);
        }
        return null;
    }

    get municipios(): Municipio[] {
        return this._municipios;
    }
}

export default MunicipioFactory;