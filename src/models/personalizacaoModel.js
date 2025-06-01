var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT id, usuario_id, carro_id, cor, dataPersonalizacao FROM personalizacao WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar(usuario_id, carro_id, cor) {

var instrucaoSql = `SELECT personalizacao.id, usuario_id, usuario.nomeCompleto, carro_id,  case 
                                                        when carro_id = 1 then "F40"
                                                        when carro_id = 2 then "La Ferrari"
                                                        when carro_id = 3 then "458 italia"
		                                                  end as modelo, 
                            cor,
                            case 
                              when cor = 'cinza' then '#515151'
                              when cor = 'preto' then '#000000'
                              when cor = 'azul' then '#0000FF'
                              when cor = 'verde' then '#4a9700' 
                              when cor = 'rosa' then '#f40179' 
                              when cor = 'laranja' then '#ff6600'
                              when cor = 'vermelha' then '#b80000'
                            end AS corHexa,
                            dataPersonalizacao 
                      FROM personalizacao
                      LEFT JOIN usuario on usuario.id_usuario = personalizacao.usuario_id
                      WHERE 1=1`;

  if(carro_id){
    instrucaoSql += ` AND carro_id =  ${carro_id}`;
  }

  
  if(usuario_id){
    instrucaoSql += ` AND usuario_id =  ${usuario_id}`;
  }

  
  if(cor){
    instrucaoSql += ` AND cor =  "${cor}"`;
  }


  return database.executar(instrucaoSql);
}

function cadastrar(usuario_id, carro_id, cor) {
  var instrucaoSql = `INSERT INTO personalizacao (usuario_id, carro_id, cor) VALUES (${usuario_id}, ${carro_id}, '${cor}')`;

  return database.executar(instrucaoSql);

}

module.exports = {buscarPorId, cadastrar, listar };
