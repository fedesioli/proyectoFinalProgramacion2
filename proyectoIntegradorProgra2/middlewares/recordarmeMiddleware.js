let modulo = require("../modulos/login")

function recordarmeMiddleware(req, res, next){
next();
  if(req.cookies.recordarme != undefined && req.session.usuarioLogeado != undefined ){
    modulo.buscarPorEmail(req.cookies.recordarme)
    .then(function(resultado){
      console.log(resultado);
      req.session.usuarioLogeado = resultado.email;
    })

  }
}

module.exports = recordarmeMiddleware;