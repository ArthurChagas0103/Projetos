import express, { Request, Response } from "express";

const port = 3000;
const app = express();

function dobrar(numero: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 5000);
    });
}

app.get("/dobrar", async (req: Request, res: Response) => {
    try {
        const numero = req.query.numero;
        let resultado: number = 0;

        if (typeof numero === "string") {
            resultado = await dobrar(parseInt(numero));

            res.status(200).json({ valor: `O dobro de ${numero} é ${resultado}` });
        }
        else {
            res.status(400).json({ error: `Parâmetro inválido` });
        }
    }
    catch (error) {
        console.log(error)
    }
});

app.listen(port, () => {
    console.log(`O servidor está sendo executado na porta ${port}`);
});