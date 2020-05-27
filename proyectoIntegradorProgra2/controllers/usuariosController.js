let db = require("../database/models");
let op = db.Sequelize.Op;
let controlador = {

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
        }






}





module.exports = controlador