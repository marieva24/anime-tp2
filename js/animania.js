window.addEventListener("load", paginaCargada);

function paginaCargada(){
	// DOM para la búsqueda
	const formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", buscar);
	console.log(formulario);
}
function buscar(evento){
    //console.log(evento);
    evento.preventDefault();
    // guardamos la 
    const form = new FormData(this);
    const busqueda = form.get("input");
    //console.log(busqueda);
    const url = "https://api.jikan.moe/v3";

    fetch(`${url}/search/anime?q=${busqueda}&page=1`)
    .then(response=>response.json())
    .then(datos)
    .catch(error=>console.warn(error.message));
}
 function datos(info){
     //console.log(info.results);
 	const resultadoDeBusqueda = document.getElementById("result");

     console.log(resultadoDeBusqueda);
 	//Datos a mostrar: 
    resultadoDeBusqueda.innerHTML = info.results
    .map(anime=>{
        return `
            <section class="card col-lg-3 col-md-3 col-sm-12 col-xs-12 justify-content-center card-body my-3">
                        <img src="${anime.image_url}" class="card-img-top img-fluid" alt="anime">    
                        <h5 class="card-title mt-3">${anime.title}</h5>
                        <p class="card-text">${anime.synopsis}</p>
                        <p><span class="text">Score: </span>${anime.score}</p>
                        <a href="${anime.url}" class="btn btn-primary bg2" target="_blank">Link a la página</a>
            </section>
            `
    }).join("\n");
    
}





