"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drop_flats = exports.run_async_query = void 0;
const pg = require("pg");
const connection = {
    host: 'db',
    port: 5432,
    user: String(process.env.POSTGRES_USER),
    password: String(process.env.POSTGRES_PASSWORD),
    database: String(process.env.POSTGRES_DB),
};
const run_async_query = async (query, log_msg = "", callback = (res) => { }) => {
    console.log(log_msg + ':');
    const client = new pg.Client(connection);
    client.connect((err) => console.log(err ? err : "1. DB connected."));
    try {
        const res = await client.query(query);
        console.log("2. DB did: \t" + res.command);
        client.end((err) => console.log(err ? err : "3. DB Disconnected.\n"));
        return res.rowAsArray ? [] : res.rows;
    }
    catch (err) {
        console.log(err);
        client.end((err) => console.log(err ? err : "3. DB Disconnected.\n"));
        return [];
    }
};
exports.run_async_query = run_async_query;
const drop_flats = async () => {
    await (0, exports.run_async_query)("DROP TABLE flat_table;", "Dropping table");
};
exports.drop_flats = drop_flats;
