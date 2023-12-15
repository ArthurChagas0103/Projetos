import { MongoClient } from "mongodb";
import getMongoConn from "./db";

const main = async () => {
  let conn: MongoClient | null = null;

  try {
    conn = await getMongoConn();
  } catch (err) {
    console.log(err)
  } finally {
    if(conn) {
      conn.close();
    }
  }
};

main();