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
          return resultado
      })
  },

  validar: function (email, pass) {
      return db.users.findOne({
          where:{
              email: req.body.email,
              password: req.body.password
          },
      })
      .then(results=>{
          return results;
      })
  },
}


module.exports = moduloLogin;