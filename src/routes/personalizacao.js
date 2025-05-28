var express = require("express");
var router = express.Router();

var personalizacaoController = require("../controllers/personalizacaoController");

router.post("/cadastrar", function (req, res) {
  
    personalizacaoController.cadastrar(req, res);
})

router.get("/buscar/:id", function (req, res) {
  personalizacaoController.buscarPorId(req, res);
});

 router.get("/listar", function (req, res) {
  
   personalizacaoController.listar(req, res);
 });

module.exports = router;