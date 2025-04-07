const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");

const indexRouter = require("./routes");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 2000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/", indexRouter);

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database connected successfully...");
    }).catch((err) => {
        console.log("Database connection failed...", err);
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})