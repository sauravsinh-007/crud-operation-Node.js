const express = require('express')
const app = express()
const port = 3000
const db = require("./config/db")
const routes = require("./router/userRoute")
const cors = require('cors');

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.use(express.json())
app.use(cors());

app.use("/users", routes)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});