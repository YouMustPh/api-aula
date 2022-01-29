const express = require("express");

const app = express();
const usuario = require("./rotas/usuario")
const {sequelize} = require('./BD')
app.use(express.json())

app.get("/", (req, res) => {
  res.send({ mensagem: "Welcome" });
});

app.use('/usuario', usuario)


app.listen(3000, () => {
  console.log("initialized application");
});
