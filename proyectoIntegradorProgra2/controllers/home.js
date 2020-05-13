const fetch = require("node-fetch");

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
   
    fetch("https://api.themoviedb.org/3/tv/" + req.params.id + "?api_key=935b83cf932d87a1deec2a0108c3513e&language=en-US")
    .then(function(response) {
      return response.json();
    })
    .then(function(detalleserie) {
      res.render("DetalleDeSerie", {detalleserie:detalleserie})
    })

  
  }
}

module.exports = controlador;