let db = require("../database/models/index");
let op = db.Sequelize.Op;
let moduloLogin = require("../modulos/login");
let bcrypt = require("bcryptjs")

var controlador = {

  home: function(req,res){
    res.render("home")
  },
  buscadorAvanzado: function(req,res){
    res.render("BuscadorAvanzado")
  },
  favoritos: function(req,res){
    res.render("seriesFavoritas")
  },
  detalleSerie: function(req,res){
    var id_serie = req.query.id
    db.reviews.findAll({
      where:{
          id_serie: id_serie,
      },
      include : [
        {association: "user"}
    ]
    })
    .then(function(reviews){           
      var id_serie = req.query.id
    res.render("DetalleDeSerie", {reviews: reviews, id_serie: id_serie})
    })
  },
  porGenero: function(req,res){
    res.render("SeriesPorGenero")
  },
  resultadosBuscadorAvanzado: function(req,res){
    res.render("ResultadosBuscadorAvanzado")
  },
  buscador: function(req,res){
    res.render("ResultadoDeBuscador")
  },
  registrarse: function(req,res) {
    let error
    res.render("registrarse", {error:error})
  },
  crearUsuario: function(req,res){
    let encriptada = bcrypt.hashSync(req.body.password, 10)
    // LOGICA DE REGISTRACION
    db.users.findOne({
      where: {
          email: req.body.email
      }})
    .then(function(usuarios){
      if(usuarios) {
        let error = "Este email ya esta en uso"
        res.render("registrarse", {error:error})
      } else {
        let usuarioNuevo = {
          username: req.body.username,
          email: req.body.email,
          password: encriptada,
          birth_date: req.body.birth_date
        }
        db.users.create(usuarioNuevo)
        res.redirect("/home")
      }
     
    
    
  })},
  nuevaReview: function(req,res){
       db.users.findOne({        
          where:{
              email: req.session.usuarioLogeado,
          },
       })
       .then(function(usuario){
         let id_user = usuario.id_user
         let review = {
           id_serie: req.body.id_serie,
           id_user: id_user,
           puntaje: req.body.puntaje,
           texto: req.body.texto,
           created_at: db.sequelize.literal("CURRENT_DATE"),
           updated_at: db.sequelize.literal("CURRENT_DATE"),
         }  
         db.reviews.create(review)
         .then(function(){
         return res.redirect("/home")
         })                     
       })
  },
  like: function(req,res){
    console.log(req.session.usuarioLogeado);
    let user = db.users.findOne({
      where: {email: req.session.usuarioLogeado}
    })
    .then(function(user){
      let id = user.id_user
      let idreview = req.body.reviews
      let likePrevio = db.megusta.findOne({
        where: {id_user: id, id_review: idreview}
      })
      return likePrevio
      .then(function(likePrevio){
        let id = user.id_user
        if(likePrevio == null){
          let like = {
          id_user: id,
          id_review: idreview,
          }
          db.megusta.create(like)
          .then(function(){
            res.send({status: "Success"})
          })
        }else{
          res.send({status: "Success"})
        }
        
      }) 
    })
},
}


module.exports = controlador;