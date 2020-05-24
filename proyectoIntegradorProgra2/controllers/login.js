let db = require("../database/models/index");
let op = db.Sequelize.Op;
let bcrypt = require("../node_modules/bcrypt/bcrypt")

var moduloLogin = {
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
  },
  nuevaReview: function(req,res){
    let idSerie = req.params.id
    let usuarioId = this.buscarPorEmail.id_user

    let review = {
      id_serie: idSerie,
      id_user: usuarioId,
      puntaje: req.body.puntaje,
      texto: req.body.texto,
    }
    db.reviews.create(review)
    res.redirect("/home")
  }
}


module.exports = moduloLogin;