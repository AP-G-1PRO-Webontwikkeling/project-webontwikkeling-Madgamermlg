import ejs from "ejs";
import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/cards", async (req, res) => {
    res.render("cards");
});
app.listen(app.get("port"), () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
})