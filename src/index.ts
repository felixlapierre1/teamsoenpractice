import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(8000, () => {
    // tslint:disable-next-line:no-console
    console.log("Started server on port 8000");
});
