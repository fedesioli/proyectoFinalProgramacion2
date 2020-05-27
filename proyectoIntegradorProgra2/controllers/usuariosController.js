let db = require("../database/models/index");
let op = db.Sequelize.Op;
let moduloLogin = require("../modulos/login");

let controladorUsuarios = {

    buscarUsuario: function(req,res){
        res.render("BuscadorDeUsuarios")
    },
    ResultadosBuscadorUsuarios: function(req,res) {
        let loBuscado = req.query.buscador
        db.users.findAll({
                where: {
                  [op.or]: [
                    { username: { [op.like] : "%" + loBuscado + "%" }},
                    { email: { [op.like] : "%" + loBuscado + "%" } }
                  ]
                } })
        .then (function(resultado){
                res.render("ResultadoDeUsuarios",{resultado:resultado})
            })
        },
    DetalleUsuario: function(req,res){
        db.users.findByPk(req.query.user, {
            include : [
                {association: 'reviews'}
            ]
        }
            )
        .then (function(resultado){
            res.render('DetalleUsuario', {resultado:resultado})
        })
    },
    myReviewsLogin: function(req,res){
        res.render("myReviewsLogin")
    },
    myReviews: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado=> {        
            if(resultado != null){
                let id_user = req.query.id_user
                db.reviews.findAll({
                    where:{
                        id_user: id_user,
                    }
                })
        .then(function(){
          return res.render("myReviews", {review: reviews})
          }) 
          } else{
            return res.send("error")
          }
          })

    },






}

module.exports = controladorUsuarios