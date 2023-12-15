import express, {Request, Response} from "express";

const port = 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
    const nome = req.query.nome;
    const idade = req.query.idade;

    res.status(200).json({ msg: `O meu nome é ${nome} e minha idade é ${idade} anos` });
});

app.get("/somaNome", (req: Request, res: Response) => {
    const { numero1, numero2, nome } = req.query;
    
    let soma = 0;
    
    if(typeof numero1 === "string" && typeof numero2 === "string") {
        soma = parseInt(numero1) + parseInt(numero2)    
    }

    let nomeMaiusculo = "";
    if(typeof nome === "string") {
        nomeMaiusculo = nome.toUpperCase();
    }

    res.status(200).json({ resultado: `O valor da soma é ${soma}`, msg: `O nome é ${nomeMaiusculo}` });
});

app.get("/somar", (req: Request, res: Response) => {
    const { numero1, numero2 } = req.query;
    
    let soma = 0;
    
    if(typeof numero1 === "string" && typeof numero2 === "string") {
        soma = parseInt(numero1) + parseInt(numero2)    
    }

    res.status(200).json({ resultado: soma });
});

app.get("/multiplicar", (req: Request, res: Response) => {
    const { numero1, numero2 } = req.query;
    
    let multiplicacao = 0;
    
    if(typeof numero1 === "string" && typeof numero2 === "string") {
        multiplicacao = parseInt(numero1) * parseInt(numero2)    
    }

    res.status(200).json({ resultado: multiplicacao });
});

app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}`);
});