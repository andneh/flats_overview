"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db = __importStar(require("./modules/db"));
const app = express();
const port = 3000;
function delay(d) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, d);
    });
}
app.get("/api/", async (req, res) => {
    const data = await db.run_async_query("select * from flat_table limit 500;", "Getting items");
    res.json(data.map((flat) => ({ title: flat.title, images: [flat.image1, flat.image2, flat.image3] })));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
