let db = require("../database/models");
let op = db.Sequelize.Op;
let controlador = {

buscarUsuario: function(req,res) {
    let usersEncontrados = []
    db.users.findAll({
        where: [
            { username: { [op.like] : "%" + req.params.busqueda + "%" }
           }
            
        ]
    })
    .then ( function(resultado){
        res.render("ResultadoDeUsuarios", {resultado:resultado})
    })
   
}

}


module.exports = controlador