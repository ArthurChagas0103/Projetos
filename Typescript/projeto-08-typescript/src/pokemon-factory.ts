import fs from "fs"
import Pokemon from "./models/pokemon.js"

class PokemonFactory {
    private data: string = "";

    constructor(filename: string) {
        this.data = fs.readFileSync(filename, "utf-8");
    }

    get pokemons(): Pokemon[] {
        const linhas: string[] = this.lerLinhas();
        const resultado: Pokemon[] = [];

        for (let i = 0; i < linhas.length; i++) {
            const colunas: string[] = this.gerarColunas(linhas[i]);

            try {
                const pokemon: Pokemon = this.criarPokemon(colunas);
                resultado.push(pokemon);
            } catch (error) {

            }
        }

        return resultado;
    }

    private lerLinhas() {
        return this.data.split("\n");
    }

    private gerarColunas(linha: string): string[] {
        return linha.split(",");
    }

    private criarPokemon(colunas: string[]): Pokemon {
        if (colunas[0] === "") {
            throw new Error("Linha Inválida!");
        }

        const pokemon = new Pokemon(
            parseInt(colunas[0].trim()),
            colunas[1].trim(),
            parseInt(colunas[11].trim()),
            colunas[12].trim() === "TRUE"
        );

        return pokemon;
    }
}

export default PokemonFactory;