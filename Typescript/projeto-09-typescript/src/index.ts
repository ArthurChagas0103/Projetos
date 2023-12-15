import MunicipioFactory from "./municipioFactory";
import Municipio from "./models/municipio";

const municipioFactory: Municipio[] = new MunicipioFactory("./data/ibge-municipios.csv").municipios;

function calcularPopulacaoTotal(municipios: Municipio[]): number {
    return municipios.reduce((total, municipio) => total + municipio.populacao, 0);
}

function obterPopulacaoPorUF(municipios: Municipio[], uf: string): number {
    const municipiosUF = municipios.filter((municipio) => municipio.uf === uf);
    return calcularPopulacaoTotal(municipiosUF);
}

function obterPopulacaoPorNomeDoMunicipio(municipios: Municipio[], nomeDoMunicipio: string): number {
    const municipio = municipios.find((municipio) => municipio.nomeDoMunicipio === nomeDoMunicipio);
    return municipio ? municipio.populacao : 0;
}

const populacaoTotalBrasil = calcularPopulacaoTotal(municipioFactory);
const populacaoTotalMinasGerais = obterPopulacaoPorUF(municipioFactory, 'MG');
const populacaoTotalBeloHorizonte = obterPopulacaoPorNomeDoMunicipio(municipioFactory, 'BELO HORIZONTE');
const percentualMG = (populacaoTotalMinasGerais / populacaoTotalBrasil) * 100;

console.log(`População total do Brasil é ${populacaoTotalBrasil}`);
console.log(`População total de Minas Gerais é ${populacaoTotalMinasGerais}`);
console.log(`População total de Belo Horizonte é ${populacaoTotalBeloHorizonte}`);
console.log(`Percentual da população de Minas Gerais em relação à população do Brasil é ${percentualMG.toFixed(2)}%`);