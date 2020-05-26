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

  buscarPorEmail: function (email){
      return db.users.findOne({
          where: {
              email: email,
          }
      })
      .then(resultado=> {
          return resultado;
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
            return results
      })
  },
}


module.exports = moduloLogin;