let db = require("../database/models/index");
let op = db.Sequelize.Op;

var moduloLogin = {
  chequearUsuario: function (email) {
      return db.users.findOne({
          where: {
              email: req.body.email
          }
      })
      .then(function(usuario) {
          return usuario != null;
      })
  },

  buscarPorEmail: function (emailUsuario){
      return db.users.findOne({
          where: {
              email: emailUsuario,
          }
      })
      .then(resultado=> {
          return usuario;
      })
  },

  validar: function (email, password) {
      return db.users.findOne({
          where:{
              email: email,
              password: password,
          },
      })
      .then(results=>{
          let resultado = results.id_user
          return resultado;
      })
  },
}


module.exports = moduloLogin;