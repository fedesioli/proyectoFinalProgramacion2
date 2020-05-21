let db = require("../database/models/index");
let op = db.Sequelize.Op;
let bcrypt = require("../node_modules/bcrypt/bcrypt")

let moduloLogin = {
  chequearUsuario: function (email) {
      return db.usuario.findOne({
          where: {
              email: req.body.email
          }
      })
      .then(function(usuario) {
          return usuario != null;
      })
  },

  buscarPorEmail: function (email){
      return db.usuario.findOne({
          where: {
              email: req.body.email
          }
      })
      .then(resultado=> {
          return resultado
      })
  },

  validar: function (email, pass) {
      return db.usuario.findOne({
          where:{
              email: req.body.email,
              password: req.body.password
          },
      })
      .then(results=>{
          return results;
      })
  }
}


module.exports = moduloLogin;