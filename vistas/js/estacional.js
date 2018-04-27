// 1. Detectar cuando le dan click al boton aceptar
var botonAceptar = $('#boton-aceptar');
botonAceptar.click(function() {
	// 2. Obtener el numero de datos
	var numeroDatos = parseInt($('#numero-datos').val());

	var formulario = $('#variables');
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



function obtenerVariables(variable) {
	return $('.' + variable);
}

// Funcion de generar tabla
function generarTabla(numeroDatos) {

	var tabla = $('#tabla');

	// Obtener todas las X
	var arregloX = obtenerVariables('x');

	// Obtener todas las Y
	var arregloY = obtenerVariables('y');

	var arregloSumaTrimestres = sumaTrimestres(arregloX, arregloY);
	var arregloPromedio = arregloSumaTrimestres.map(e => e / 4);
	//prueba
	var frAcumulada = 0;

	var fRelativaAcumulada = 0;

	for(var i = 0; i < numeroDatos; i++) {

		frAcumulada += parseFloat(arregloSumaTrimestres);

		var col1 = $('<td class"tri">' + arregloX[i].value + '</td>');
		var col2 = $('<td>' + ((i % 4) + 1)  + '</td>');
		var col3 = $('<td class"flu">' + arregloY[i].value + '</td>');
		
		if(i == 0) {
			var col4 = $('<td>' + '-' + '</td>');
			var col5 = $('<td>' + '-' + '</td>');
		} else {
			var col4 = $('<td>' + arregloSumaTrimestres[i - 1] + '</td>');
			var col5 = $('<td>' + arregloPromedio[i - 1] + '</td>');
		}

			//var fres = $(".fre").toArray().map(e => parseFloat(e.innerHTML));
			//fRelativaAcumulada += parseFloat(()/2);

		if (i<2) {
			var col6 = $('<td>' + '-' + '</td>');
			var col7 = $('<td>' + '-' + '</td>');
		} else {
			var valor = (arregloPromedio[i - 2] + arregloPromedio[i - 1]) / 2;
			var col6 = $('<td class"cen">' + valor + '</td>');
			var col7 = $('<td>' + ((arregloY[i].value / valor ) * 100)+ '</td>');
		}
		

		var fila = $('<tr>');
		fila.append(col1, col2, col3, col4, col5, col6, col7);

		tabla.append(fila)

	}
}

function sumaTrimestres(arregloX, arregloY) {
	var iLimite = arregloX.toArray().map(e => e.value).length / 4;
	var datos = arregloY.toArray().map(e => parseFloat(e.value));
	var numeroDatos = arregloY.length;
	var arregloSuma = [];
	for(var i = 0; i < iLimite; i++) {
		for(var j = 0; j < 4; j++) {
			var jInicio = i * 4 + j;
			var jFin = jInicio + 4;
			if(jFin <= numeroDatos) {
				var suma = datos.slice(jInicio, jFin).reduce((p, c) => p + c, 0);
				arregloSuma.push(suma);
			} else {
				arregloSuma.push('-');
			}
		}
	}
	return arregloSuma;
}

