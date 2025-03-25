const express = require("express");
const dotenv = require('dotenv');

const indexRouter = require("./routes");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 2000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})