const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.send("hello world")
})

app.get("/vercel", (req,res) => {
    res.send("you are on vercel")
})

app.listen(4000 , (req, res) => {
 console.log(`app running on port ${4000}`);
})

module.exports = app;
