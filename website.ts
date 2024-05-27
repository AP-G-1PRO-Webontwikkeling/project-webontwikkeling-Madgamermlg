import ejs from "ejs";
import express from "express";
import { infoCards } from "./database";

const app = express();
async function main() {
    const cards = await infoCards();
    app.set("view engine", "ejs");
    app.set("port", 3000);
    app.use(express.static("public"));


    app.get("/", (req, res) => {
        res.render("index");
    })
    app.get("/cards", (req, res) => {
        res.render("cards", { cards });
    });
    app.get("/detail", (req, res) => {
        res.render("detail");
    });
    app.listen(app.get("port"), () => {
        console.log(`Server is running on http://localhost:${app.get("port")}`);
    })

}

main();