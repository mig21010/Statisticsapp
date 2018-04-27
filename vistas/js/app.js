// 1. Detectar cuando le dan click al boton aceptar
var botonAceptar = $('#boton-aceptar');
botonAceptar.click(function() {
	// 2. Obtener el numero de datos
	var numeroDatos = parseInt($('#numero-datos').val());

	var formulario = $('#incognitas');
	formulario.empty();
	// 3. Generar filas de X y Y
	for(var i = 1; i <= numeroDatos; i++) {
		formulario.append(`
			<div class="field is-grouped" id="fila_${i}">
  			<p class="control">
 	 				<input class="input x" type="text" placeholder="Número de datos">
  			</p>
  			<p class="control">
	 				<input class="input y" type="text" placeholder="Número de datos">
  			</p>
			</div>`);
	}

	// 4. Agregar boton al formulario
	formulario.append(`
		<div class="control">
  		<button class="button is-primary" id="generar">Generar Tabla</button>
		</div>
	`);

	// 5. Detectar cuando le dan click al boton generar tabla
	var botonGenerar = $('#generar');
	botonGenerar.click(function() {
		generarTabla(numeroDatos);
	});
});

// Funcion calcular media
function calcularMedia(incognita, numeroDatos) {
	var suma = 0;
	obtenerIncognitas(incognita).each(function() {
		suma += parseFloat($(this).val());
	});

	return suma / numeroDatos;
}

function obtenerIncognitas(incognita) {
	return $('.' + incognita);
}

// Funcion de generar tabla
function generarTabla(numeroDatos) {
	// 6. Calcular la media de X
	var mediaX = calcularMedia('x', numeroDatos);

	// 7. Calcular la media de Y
	var mediaY = calcularMedia('y', numeroDatos);

	var tabla = $('#tabla');

	// Obtener todas las X
	var arregloX = obtenerIncognitas('x');
	// Obtener todas las Y
	var arregloY = obtenerIncognitas('y');


	for(var i = 0; i < numeroDatos; i++) {
		var col1 = $('<td>' + arregloX[i].value + '</td>');
		var col2 = $('<td>' + arregloY[i].value + '</td>');
		var col3 = $('<td>' +  + '</td>');
		var col4 = $('<td>' +  + '</td>');
		var col5 = $('<td>' +  + '</td>');
		var col6 = $('<td>' +  + '</td>');

		var fila = $('<tr>');
		fila.append(col1, col2, col3, col4, col5, col6);

		tabla.append(fila)

	}
}