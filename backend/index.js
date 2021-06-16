require('dotenv').config()
const express = require("express");

const cors = require("cors");
const authRoutes = require("./routes/auth");
const client = require("./conifgs/db");


const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    console.log("runnnign");
    res.status(200).send("inside of / end point ");
});

client.connect(() => {
    console.log("connected database sucesfully");
})
app.use("/auth", authRoutes);

app.listen(port, () => {
    console.log(`backends server is runnnig on port ${port}`);
});
