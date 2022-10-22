const express = require("express");
import * as db from './modules/db';

const app = express();
const port = 3000;

function delay(d: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, d);
    });
}

app.get("/api/", async (req: any, res: any) => {
    await res.json(
        await db.run_async_query("select * from flat_table limit 500;", "Getting items")
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});