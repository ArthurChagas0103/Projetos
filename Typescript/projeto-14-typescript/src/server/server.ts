import { MongoClient, ObjectId } from 'mongodb';
import express, { Request, Response } from 'express';
import getMongoConn from '../database/connection';
import cors from "cors"
import Pais from '../models/pais';

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.get('/paises', async (req: Request, res: Response) => {
    const { populacao } = req.query;
    let populacaoNumber = 0;
    try {
        if (typeof populacao !== "string") {
            throw new Error("O parametro populacao nao foi informado");
        }

        populacaoNumber = parseInt(populacao);

        if (isNaN(populacaoNumber)) {
            throw new Error("O parametro populacao nao é um numero");
        }

        // if (populacao != null && typeof populacao === 'string') {
        //     const conn: MongoClient = await getMongoConn();
        //     const db = conn.db();
        //     const paisesArray = db.collection("paises");
        //     const numberPopulacao = parseInt(populacao);
        //     const data = await paisesArray.find({ populacao: { $gte: numberPopulacao } }).toArray();

        //     res.status(200).json({ resultado: data });
        // } else {
        //     res.status(400).json("Número inválido! Por favor, tente novamente.");
        // }
    } catch (err) {
        res.status(404).json({ Erro: `${(err as Error).message}` });
    }

    let conn: MongoClient | null = null;
    try {
        conn = await getMongoConn();

        const db = conn.db();
        const paises = db.collection("paises");
        const docs = await paises.find({
            populacao: { $gte: populacaoNumber }
        }).toArray();

        res.status(200).json({ resultado: docs });
        return;
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    } finally {
        conn?.close();
    }
});

app.post("/paises", async (req: Request, res: Response) => {
    const record = req.body;

    try {
        if (typeof record.nome === "undefined") {
            throw new Error("Nome não foi informado");
        }
        if (typeof record.nome !== "string") {
            throw new Error("Nome não é válido");
        }
        if (record.nome === "") {
            throw new Error("Nome não pode ser vazio");
        }
        if (typeof record.populacao === "undefined") {
            throw new Error("População não foi informada");
        }
        if (typeof record.populacao === "number") {
            throw new Error("População deve ser um número");
        }
        if (record.populacao < 0) {
            throw new Error("População deve ser maior ou igual a zero");
        }
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
        return
    }

    let conn: MongoClient | null = null;
    try {
        conn = await getMongoConn();

        const db = conn.db();
        const paises = db.collection("paises");
        const pais = new Pais(record.nome, record.populacao);

        await paises.insertOne(pais);
        res.status(201).json(pais)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    } finally {
        conn?.close();
    }
});

app.put("/paises/:id", async (req: Request, res: Response) => {
    let objectId: ObjectId;
    try {
        objectId = new ObjectId(req.params.id);
    } catch (error) {
        res.status(400).json({ message: "O id não é válido" });
        return;
    }

    let conn: MongoClient | null = null;
    try {
        conn = await getMongoConn();

        const db = conn.db();
        const paises = db.collection("paises");

        if (await paises.find({ _id: objectId }).count() === 0) {
            res.status(404).json({ message: "Não existe documento com esse id" });
        }

        const record = req.body;
        try {
            if (typeof record.nome === "undefined") {
                throw new Error("Nome não foi informado");
            }
            if (typeof record.nome !== "string") {
                throw new Error("Nome não é válido");
            }
            if (record.nome === "") {
                throw new Error("Nome não pode ser vazio");
            }
            if (typeof record.populacao === "undefined") {
                throw new Error("População não foi informada");
            }
            if (typeof record.populacao === "number") {
                throw new Error("População deve ser um número");
            }
            if (record.populacao < 0) {
                throw new Error("População deve ser maior ou igual a zero");
            }
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
            return
        }

        const pais = new Pais(record.nome, record.populacao);

        await paises.updateOne({ 
            _id: objectId 
        }, {
            $set: pais
        });

        res.status(200).json(pais);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    } finally {
        conn?.close;
    }
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});