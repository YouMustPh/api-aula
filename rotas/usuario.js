const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json([
    {
      nome: "Paulo",
      id: 1
    },
    {
      nome: "Guilherme",
      id: 2
    },
  ]);
});

router.post("/", (req, res) => {
    console.log(req.body)
  res.send("rota para criar recurso");
});

router.put("/:id", (req, res) => {
    let id = req.params.id
  res.send(`rota para atualizar recurso +${id}`);
});

router.delete("/:id", (req, res) => {
    let id = req.params.id
  res.send(`rota para remover recurso + ${id}`);
});
module.exports = router;
