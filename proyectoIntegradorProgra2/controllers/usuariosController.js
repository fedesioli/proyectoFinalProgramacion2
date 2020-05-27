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
    formularioLogin: function(req,res){
        console.log(req.session.usuarioLogeado);
        
        if(req.session.usuarioLogeado){
            moduloLogin.buscarPorEmail(req.session.usuarioLogeado)
            .then(function(usuario){
                res.redirect("/home/myReviews")
            })
        }else{
            res.render("formularioLogin")
        }
    },
    login: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado=> {        
            if(resultado != null){
                req.session.usuarioLogeado = req.body.email
                res.redirect("/home/myReviews")
          } else{
            return res.send("error")
          }
          })

    },
    myReviews: function(req,res){
        if(req.session.usuarioLogeado){
            moduloLogin.buscarPorEmail(req.session.usuarioLogeado)
            .then(function(resultado){
                console.log(resultado);
                let id = resultado.id_user
                console.log(id);           
                return id
            })          
            .then(function(id){
                console.log(id);
                let reviews = db.reviews.findAll({
                    where : {id_user: id}
                    })   
                return reviews
            })       
            .then(function(reviews){
                res.render("myReviews", {reviews: reviews})
            })        
        }else{
            res.redirect("/home/login")
        }
    },
    editReviewsForm: function(req,res){
        var id_review = req.query.id
        res.render("editReviewsForm", {id_review: id_review})
    },
    editReviews: function(req,res){       
        id = req.body.id_review;
        db.reviews.update({
            texto: req.body.texto,
            puntaje: req.body.puntaje,
        },
        {
            where: {id_review: id}
        })
        .then(function(){
        res.redirect("/home/myReviews")
        })
    },



}

module.exports = controladorUsuarios