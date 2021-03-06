let db = require("../database/models/index");
let op = db.Sequelize.Op;
let bcrypt = require("bcryptjs")

var moduloLogin = {
  chequearUsuario: function (email) {
      return db.users.findOne({
          where: {
              email: email
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
          },
      })
      .then(results=>{
          if(results && bcrypt.compareSync(password, results.password)){

              return results
          } else{
            return null
          }
      })
  },
}


module.exports = moduloLogin;