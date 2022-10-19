import { Connection } from "../types/connection";

const pg = require("pg");

const connection: Connection = {
    host: 'db',
    port: 5432,
    user: String(process.env.POSTGRES_USER),
    password: String(process.env.POSTGRES_PASSWORD),
    database: String(process.env.POSTGRES_DB),
};

export const run_async_query = async (query: string, log_msg: string = "", callback = (res: any) => { }) => {
    console.log(log_msg + ':');
    const client = new pg.Client(connection);
    client.connect((err: any) => console.log(err ? err : "1. DB connected."));

    try {
        const res = await client.query(query);
        console.log("2. DB did: \t" + res.command);
        client.end((err: any) => console.log(err ? err : "3. DB Disconnected.\n"));
        return res.rowAsArray ? [] : res.rows;
    } catch (err) {
        console.log(err);
        client.end((err: any) => console.log(err ? err : "3. DB Disconnected.\n"));
        return []
    }
}

export const drop_flats = async () => {
    await run_async_query("DROP TABLE flat_table;", "Dropping table");
};
