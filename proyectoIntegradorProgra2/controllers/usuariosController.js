let db = require("../database/models/index");
let op = db.Sequelize.Op;
let moduloLogin = require("../modulos/login");

let controladorUsuarios = {

    buscarUsuario: function(req,res){
        res.render("BuscadorDeUsuarios")
    }, //Abre el formulario de busqueda por GET
    ResultadosBuscadorUsuarios: function(req,res) {
        let loBuscado = req.query.buscador //Agarra lo que se busco en la query
        db.users.findAll({
                where: {
                  [op.or]: [
                    { username: { [op.like] : "%" + loBuscado + "%" }},
                    { email: { [op.like] : "%" + loBuscado + "%" } }
                  ]
                } }) // Filtra en la base de datos por usuario o email
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
            ) //Traigo el usuario con su id desde la query y traigo tmb las reviews asociadas a ese id
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
            let error
            res.render("formularioLogin", {error: error})
        }
    },
    login: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado=> {        
            if(resultado != null){
                req.session.usuarioLogeado = req.body.email
                if(req.body.recordame != undefined){
                    res.cookie("recordame", req.body.email, {maxAge: 3000000})
                }
                res.redirect("/home/myReviews")
          } else{
              let error = "Por favor ingresa un usario y contraseña validos"
            return res.render("formularioLogin", {error: error})
          }
          })

    },
    logOut: function(req,res){
        req.session.destroy();
        res.redirect("/home")
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
        if (req.session.usuarioLogeado) {
            id = req.body.id_review;
            db.reviews.update({
                texto: req.body.texto,
                puntaje: req.body.puntaje,
                updated_at: db.sequelize.literal("CURRENT_DATE"),
            },
            {
                where: {id_review: id}
            })
            .then(function(){
            res.redirect("/home/myReviews")
            })
        } else {
            res.redirect("/home/login")
        }
       
    },
    deleteReview: function(req,res){
        if (req.session.usuarioLogeado) {
            let id = req.query.id
       db.reviews.destroy({
           where: {id_review: id}
       })
       .then(function(){
           res.redirect("/home/myReviews")
       })
        } else {
            res.redirect("/home/login")
        }
       
    },



}

module.exports = controladorUsuarios