import { MongoClient } from 'mongodb';
import getMongoConn from "./database/connection";
import paisesArray from './data/data';

const main = async () => {
    let conn: MongoClient | null = null;
    try {
        conn = await getMongoConn();
        const db = conn.db();
        const paises = db.collection("paises");

        //deletando todo mundo
        paises.deleteMany({});

        //deletando específico
        // paises.deleteMany({
        //     $and: [
        //         { nome: "Brasil" },
        //         { populacao: { $gte: 100000000 } }
        //     ]
        // });

        //inserindo os documentos todos de uma vez
        await paises.insertMany(paisesArray)

        //inserindo os documentos um a um
        // for (let pais of paisesArray) {
        //     await paises.insertOne(pais);
        // }
    } catch (err) {
        console.log(err);
    } finally {
        conn?.close();
    }
}

main();