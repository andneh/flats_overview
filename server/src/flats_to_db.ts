// import { fetchHouses } from 'sreality-client';
const sr = require("sreality-client");
import * as db from './modules/db';
import { flat } from './types/flat';

// New table

const create_table_query = `
    CREATE TABLE flat_table (
        title varchar, 
        image1 varchar, 
        image2 varchar, 
        image3 varchar 
    );`;

let insert_items_query = `INSERT INTO flat_table (title, image1, image2, image3) VALUES \n`;

db.run_async_querry(create_table_query, "Creating Table").finally(() => {
    sr.fetchHouses(1, 10, 'municipality', 3468).then((data: flat[]) => {
        // console.log('My Houses...', data);
        let i = 1;
        data.forEach((flat: flat) => {
            insert_items_query += `('${flat.description}', 
                '${flat.images[0] ? flat.images[0] : ''}', 
                '${flat.images[1] ? flat.images[1] : ''}', 
                '${flat.images[2] ? flat.images[2] : ''}')${(data.length != i) ? ',' : ';'} \n`;
            i += 1
        });


        db.run_async_querry(insert_items_query, "Inserting items")
            .finally(() => {
                // db.run_async_querry("SELECT * FROM flat_table;", "Selecting").then((res: any) => { console.log(res) })
                // db.drop_flats()
            });
    });
});
