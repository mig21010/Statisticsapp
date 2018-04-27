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
		// Insertar datos en la tabla
		generarTabla(numeroDatos);

		// Insertar boton al final del HTML que contiene la tabla 
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

	for(var i = 0; i < numeroDatos; i++) {
		var col1 = $('<td class="categoria">' + arregloX[i].value + '</td>');
		var col2 = $('<td class="frecuencia">' + arregloY[i].value + '</td>');
		var col3 = $('<td>' + (arregloY[i].value / fr) + '</td>');
		var col4 = $('<td>' + (arregloY[i].value / fr)*100 + '</td>');
		var col5 = $('<td>' + (arregloY[i].value / fr)*360 + '</td>');

		var fila = $('<tr>');
		fila.append(col1, col2, col3, col4, col5);

		tabla.append(fila)
	}
}

function generarGrafica() {
	var contenedorGrafica = $('#grafica-container');
	var contenedorGrafica2 = $('#grafica-container2');
	var contenedorGrafica3 = $('#grafica-container3');

	var categorias = $(".categoria").toArray().map(e => e.innerHTML);
	var frecuencias = $(".frecuencia").toArray().map(e => parseFloat(e.innerHTML));   

	contenedorGrafica.highcharts({
		title:{ text: 'Grafica de Barras datos categoricos'},
		xAxis:{ title: { text: 'Categorias'}, categories: categorias},
		yAxis:{ title: 'Porcentaje %', title: { text: 'Frecuencias'}}, plotLines:[{ value: 0, width: 1, color: '#808080' }],
		tooltip:{ valueSuffix: ''},   //tooltip:{ valueSuffix: '%'}, 
		legend:{ layout: 'vertical', align: 'right', verticalAlign: 'middle', borderWidth:0 },
		series:[{ type: 'column', name: 'Frecuencia', colorByPoint: true, data: frecuencias }, 
 		],
    plotOptions:{line:{dataLabels:{enabled:true}}}

    });

    //PRUEBAS PASTEL
    contenedorGrafica2.highcharts({
    	chart: { plotBackgroundColor: null, plotBorderWidth: null, plotShadow: false, type: 'pie'},
    	title: { text: 'Grafica de Pastel datos categoricos' },
    	plotOptions: {        
        	pie: { allowPointSelect: true, cursor: 'pointer',
        	    dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        	        style: { color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black' }
        	    }
        	}
    	},
    	series: [{ name: 'Frecuencia', colorByPoint: true,
	        //data: [{ name: 'IE', y: 6 }, { name: 'Chrome', y: 3, }, { name: 'Firefox', y: 3 }, { name: 'Safari', y: 2 }, { name: 'Opera', y: 2 }, { name: 'Other', y: 5 }]
	        data: frecuencias
	    }]
	 });
    //FIN PASTEL

    // PRUEBAS PARETO
		function comparar ( a, b ){ return b - a; }
		frecuencias.sort( comparar );
    
	contenedorGrafica3.highcharts({
		title:{ text: 'Grafica de Pareto datos categoricos'},
		xAxis:{ title: { text: 'Categorias'}, categories: categorias},
		yAxis:{ title: 'Porcentaje %', title: { text: 'Frecuencias'}}, plotLines:[{ value: 0, width: 1, color: '#808080' }],
		tooltip:{ valueSuffix: ''},   //tooltip:{ valueSuffix: '%'}, 
		legend:{ layout: 'vertical', align: 'right', verticalAlign: 'middle', borderWidth:0 },
		series:[{ type: 'column', name: 'Frecuencia', colorByPoint: true, data: frecuencias }, 
		// {name: 'C',data: [20,18, 19]}, 
		// {type: 'column',name: 'C++',data: [15, 17,11]}, 
		// {type: 'spline',name: 'C#',data: [0, 4, 4]},
		// {name: 'Objective-C',data: [0,1, 1.5]}
 		],
    plotOptions:{line:{dataLabels:{enabled:true}}}
    
  }); //FIN PARETO

}
