function iniciar() {
	var boton= document.getElementById('grabar')
	boton.addEventListener('click', crearItem, false)
	mostrarItem()
}

function crearItem() {
	var materia = document.getElementById('materia').value
	var tipoexamen = document.getElementById('tipoexamen').value
	var fecha = document.getElementById('fecha').value
	var preparacion = document.getElementById('preparacion').value

	var valores = [materia, tipoexamen, fecha, preparacion]

	localStorage.setItem(valores)

	mostrarItem()
}

function mostrarItem(){
	var caja = document.getElementById('mostrardatos')
	caja.innerHTML = '<button>Eliminar</button>'
	for (var i = 0; i<localStorage.length; i++) {
		var id = localStorage.key(i)
		var valor = localStorage.getItem(id)

		caja.innerHTML+= '<div>'+valor+'</div>'
	}
}
window.addEventListener("load", iniciar, false)