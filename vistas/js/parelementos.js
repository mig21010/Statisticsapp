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

//Funcion Media
function calcularMd(variable, numeroDatos) {
	var suma = 0;
	obtenerVariables(variable).each(function() {
		suma += parseFloat($(this).val());
	});

	return suma/numeroDatos;
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

	//Media X
	var md = calcularMd('x', numeroDatos);

	for(var i = 0; i < numeroDatos; i++) {
		var col1 = $('<td class="año">' + arregloX[i].value + '</td>');
		var col2 = $('<td class="valor">' + arregloY[i].value + '</td>');
		var col3 = $('<td>' + (arregloX[i].value - md) + '</td>');
		var col4 = $('<td>' + ((arregloX[i].value - md) * 2) + '</td>');
		var col5 = $('<td>' + (((arregloX[i].value - md) * 2) * arregloY[i].value) + '</td>');
		var col6 = $('<td>' + (((arregloX[i].value - md) * 2) * ((arregloX[i].value - md) * 2)) + '</td>');

		var fila = $('<tr>');
		fila.append(col1, col2, col3, col4, col5, col6);

		tabla.append(fila)

	}
}

function generarGrafica() {
	var contenedorGrafica = $('#grafica-container');

	var años = $(".año").toArray().map(e => e.innerHTML);
	var valores = $(".valor").toArray().map(e => parseFloat(e.innerHTML));

	contenedorGrafica.highcharts({
		chart: { type: 'line'},
        title:{ text: 'Gráfica de Tendencia Secular'},
		xAxis:{ title: { text: 'Años'}, categories: años},
		yAxis:{ title: 'Porcentaje %', title: { text: 'Valores de Y'}}, plotLines:[{ value: 0, width: 1, color: '#808080' }],
		//tooltip:{ valueSuffix: ''},   //tooltip:{ valueSuffix: '%'},
		//legend:{ layout: 'vertical', align: 'right', verticalAlign: 'middle', borderWidth:0 },
		series:[{ name: 'Serie de tiempo', data: valores }, ],
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true }, enableMouseTracking: false 
        }
    },


  });

}