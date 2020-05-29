window.onload = function(){


  var registrarse = document.querySelector("form.registrarse")
  var email = document.querySelector("form.registrarse input.email")
  var username = document.querySelector("form.registrarse input.username")

  registrarse.onsubmit = function(event){

    if (username = null){
      event.preventDefault();
      alert("Ingresa un nombre de usuario")
    } else{
      if (email = null){
        event.preventDefault();
        alert("Ingresa un email valido")
      }           
    }

  }
  


  var generoID = new URLSearchParams(location.search).get('idGenero');

  //Esto revisa las condiciones para ejecutar la busqueda del header
  var buscador = document.querySelector("form.buscador");
  var input = document.querySelector("form.buscador input");
  buscador.onsubmit = function(event){
    if (input.value == "") {
      event.preventDefault();
    } else if (input.value.length < 3) {
      event.preventDefault();
      alert("Debe haber un minimo de 3 letras para buscar");
    }
  }


     // js header

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=935b83cf932d87a1deec2a0108c3513e&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var generos = data.genres;
    var listado = document.querySelectorAll("ul.listado-generos li a");

    for (var i = 0; i < listado.length; i++) {
      listado[i].innerHTML = generos[i].name;
      listado[i].href = "/home/SeriesPorGenero?idGenero=" + generos[i].id;
    }

  })

  //Esto muestra el buscador en el responsive
  var boton = document.querySelector("button.mostrar-buscador");
  boton.onclick = function() {
    document.querySelector("button.mostrar-buscador").style.display = "none";
    document.querySelector("form.buscador").style.display = "block";
    document.querySelector("div.ocultar").style.visibility = "hidden";
    document.querySelector("ul.esconder").style.visibility = "hidden";
  }

  var ventana = document.querySelector("main")
  ventana.onclick = function(){
    document.querySelector("button.mostrar-buscador").style.display = "inline-block";
    document.querySelector("form.buscador").style.display = "none";
    document.querySelector("div.ocultar").style.visibility = "visible";
    document.querySelector("ul.esconder").style.visibility = "visible";
  }



}