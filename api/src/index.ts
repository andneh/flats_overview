const express = require("express");
import { json } from 'stream/consumers';
import * as db from './modules/db';
import { flat } from './types/flat';

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
    const data = await db.run_async_query("select * from flat_table limit 500;", "Getting items");
    res.json(
        data.map((flat: any) => ({ title: flat.title, images: [flat.image1, flat.image2, flat.image3] }))
    );
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});