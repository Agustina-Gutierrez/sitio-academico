
function mostrarElemento(lista) {
    var elemento = document.getElementById(lista)

    if(elemento.style.display=='none'){
        elemento.style.display='block'
    } else {
        elemento.style.display='none'
    }
}
 var video = document.querySelector('#videorrecorrido')
 var reproducir= document.querySelector ('#reproducir')
 
 function avanzar (){
 	if (video.paused) {
 	video.play()
 	reproducir.innerHTML='<span class="icon-pause"></span>'
 } else {
 	video.pause()
 	reproducir.innerHTML='<span class="icon-play"></span>'
 }
 }

function parar() {
	video.currentTime=0
	video.pause()
	reproducir.innerHTML='<span class="icon-play"></span>'
}

function saltar(valor){
	video.currentTime+=valor
}



