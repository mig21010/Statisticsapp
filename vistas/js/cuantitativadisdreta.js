// 1. Detectar cuando le dan click al boton aceptar
var botonAceptar = $('#boton-aceptar');
var contenedorTabla = $('#table-container');
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
 	 				<input class="input x" type="text" placeholder="Intervalos">
  			</p>
  			<p class="control">
	 				<input class="input y" type="text" placeholder="Frecuencia">
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
		// Insertar boton al final del HTML que contiene la tabla linea 40, 59 y 60
		contenedorTabla.append(`
			<div class="control">
	  		<button class="button is-primary" id="grafica">Generar Grafica</button>
			</div>
		`
		);
		
		// Obtener el boton de generar grafica
		var botonGrafica = $('#grafica');
		// Indicar al boton que tiene que hacer
		botonGrafica.click(generarGrafica);
		// Mostrar la tabla 
		contenedorTabla.show();
	});
});

//Funcion Frecuencia Total
function calcularFr(variable) {
	var suma = 0;
	obtenerVariables(variable).each(function() {
		suma += parseFloat($(this).val());
	});

	return suma;
}


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

	//prueba
	var fr = calcularFr('y');

	// inicializar la variable que contendra los valores de la frecuencia acumulada
	var frAcumulada = 0;
	var fRelativaAcumulada = 0;

	for(var i = 0; i < numeroDatos; i++) {
		// a la frecuencia acumulada añadirle el valor de Y
		// Por ejemplo: para la frecuencia acumulada [4, 8, 3]
		// 0 + 4 = 4
		// En la siguiente vuelta del ciclo sera: 4 + 8 = 12
		// Finalmente en la tercer vuelta sera: 12 + 3 = 15
		frAcumulada += parseFloat(arregloY[i].value);
		

		var col1 = $('<td class="intervalo">' + arregloX[i].value + '</td>');
		var col2 = $('<td class="frecuenciaa">' + arregloY[i].value + '</td>');
		var col3 = $('<td>' + (arregloY[i].value / fr) + '</td>');
		var col4 = $('<td>' + frAcumulada + '</td>');
		
				fRelativaAcumulada += parseFloat((arregloY[i].value / fr));


		var col5 = $('<td>' + fRelativaAcumulada + '</td>');
		var col6 = $('<td>' + (arregloY[i].value / fr)*100 + '</td>');

		var fila = $('<tr>');
		fila.append(col1, col2, col3, col4, col5, col6);

		tabla.append(fila)		

	}

}

function generarGrafica() {
	var contenedorGrafica = $('#grafica-container');

	var intervalos = $(".intervalo").toArray().map(e => e.innerHTML);
	var frecuenciass = $(".frecuenciaa").toArray().map(e => parseFloat(e.innerHTML));

	contenedorGrafica.highcharts({
		title:{ text: 'Histograma para variables cuantitativas discretas'},
		xAxis:{ title: { text: 'Intervalos'}, categories: intervalos},
		yAxis:{ title: 'Porcentaje %', title: { text: 'Frecuencias'}}, plotLines:[{ value: 0, width: 1, color: '#808080' }],
		tooltip:{ valueSuffix: ''},   //tooltip:{ valueSuffix: '%'},
		legend:{ layout: 'vertical', align: 'right', verticalAlign: 'middle', borderWidth:0 },
		series:[{ type: 'column', name: 'Frecuencia Absoluta', colorByPoint: true, data: frecuenciass }, ],
    plotOptions:{line:{dataLabels:{enabled:true}}}

  });

}
