let db = require("../database/models");
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

  buscarPorEmail: function (emai){
      return db.users.findOne({
          where: {
              email: req.body.email,
          }
      })
      .then(resultado=> {
          return usuario;
      })
  },

  validar: function (email, pass) {
      return db.users.findOne({
          where:{
              email: email,
              password: pass,
          },
      })
      .then(results=>{
            return results
      })
  },
}


module.exports = moduloLogin;