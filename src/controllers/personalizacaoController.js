var personalizacaoModel = require("../models/personalizacaoModel");

function listar(req, res) {

  const usuarioId = req.params.usuario_id || null;
  const carroId = req.params.carro_id || null;
  const cor = req.params.cor || null;

  personalizacaoModel.listar(usuarioId, carroId, cor).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  personalizacaoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {

  var cor = req.body.cor;
  var carro_id = req.body.carro_id;
  var usuario_id = req.body.usuario_id;

  personalizacaoModel.listar(usuario_id, carro_id, cor).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `Esta personalização já existe` });
    } else {
      personalizacaoModel.cadastrar(usuario_id, carro_id, cor).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {

  buscarPorId,
  cadastrar,
  listar
};
