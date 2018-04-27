<?php 
require 'header.html';
 ?>

 <!-- Page wrapper  -->
<!-- ============================================================== -->
<div class="page-wrapper">
    <!-- ============================================================== -->
    <!-- Container fluid  -->
    <!-- ============================================================== -->
    <div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <h3 class="text-themecolor">Gráficas para datos categóricos (pastel, pareto y barras)</h3>
            </div>
            <!--<div class="col-md-7 align-self-center">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item">pages</li>
                    <li class="breadcrumb-item active">Starter kit</li>
                </ol>
            </div>
            <div>
                <button class="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings text-white"></i></button>
            </div>-->
        </div>
        <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->

        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        	<p>Una vez recolectados los datos estos deben consolidarse y resumirse para mostrar la siguiente información:</p>
                            <li>Que valores de la variable han sido medidos.</li>
                            <li>Con que frecuencia se presenta cada uno de los valores.</li><br>
                            <p>Para este fin, se construye una tabla estadística para mostrar gráficamente los datos como una distribución de datos. El  tipo de grafica que se elija depende  del tipo de variable que se haya medido.</p>
                            <p>Cuando la variable de interés es cualitativa  o categórica  la tabla estadística es una lista de las categorías incluidas junto con una medida de la frecuencia con que se presenta cada valor. Es posible medir la “frecuencia” en tres formas diferentes:</p>
                            <li>En la frecuencia o número de mediciones en cada categoría.</li>
                            <li>La frecuencia relativa o proporción de mediciones en cada categoría.</li>
                            <li>El porcentaje de mediciones en cada categoría.</li><br>
                            <p>Encontrará que la suma de las frecuencias es siempre n (total), la suma de la frecuencia relativa es 1 y la suma de los porcentajes es 100%.</p>
                            <p>Las categorías para una variable cualitativa deben elegirse de modo que:</p>
                            <li>Una medición pertenecerá a una sola y solo a una categoría.</li>
                            <li>Cada medición tiene una categoría a la que se le asigna.</li><br>
                            <p>Por ejemplo, si se clasifican las calificaciones de acuerdo al tipo de aprovechamiento la categorías serian; A, B, C Y D con valor de 10, 9, 8 y 7 respectivamente.</p>
                            <p>Una vez que las mediciones se les haya dado categoría y se resumieron en una tabla estadística, se utiliza ya sea una gráfica de pastel o una gráfica de barras para mostrar la distribución de datos.</p>
                            <p>Una gráfica de pastel es la conocida grafica circular que muestra la forma en que están distribuidas las medidas entre las categorías. Se usa para mostar las relaciones de las partes respecto al todo.</p>
                            <p>Una gráfica de barras muestra la misma distribucion de las medidas en las categorías; la altura de la barra mide la frecuencia observada de una categoría en particular. Se usa para destacar la cantidad real o frecuencia para cada categoría.</p>
                            <p>Una gráfica de barras, en la que las barras están ordenadas de mayor a menor se denomina Grafica de Pareto.</p>
                        <h4 class="card-title">Ejemplo</h4>
                        <img src="../public/imagenes/img1.jpg" class="card-img-top img-responsive" alt="Card image cap">
                        <img src="../public/imagenes/img2.jpg" class="card-img-top img-responsive" alt="Card image cap">
                        <img src="../public/imagenes/img3.jpg" class="card-img-top img-responsive" alt="Card image cap">
                        <img src="../public/imagenes/img4.jpg" class="card-img-top img-responsive" alt="Card image cap">
                        
                            
                    </div>
                </div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End PAge Content -->
        <!-- ============================================================== -->
       
    </div>
    <!-- ============================================================== -->
    <!-- End Container fluid  -->
    <!-- ============================================================== -->
    		<?php 
            require 'footer.html';
            ?>
</div>
<!-- ============================================================== -->
<!-- End Page wrapper  -->
<!-- ============================================================== -->   