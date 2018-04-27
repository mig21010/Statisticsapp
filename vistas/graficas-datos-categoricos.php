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
        <div class="col-md-5 align-self-center">
            <h3 class="text-themecolor">Gráficas para datos categóricos</h3>
        </div>
        <label>Inserta el número de categorías:</label>
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" placeholder="Número de datos" id="numero-datos">
            </div>
            <div class="control">
                <a class="button is-info" id="boton-aceptar">
                    Aceptar
                </a>
            </div>
        </div>
        
        <div class="form" id="variables">
        </div>
        <div class="row">
            <!-- column -->
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Basic Table</h4>
                        <!-- display:none sirve para no mostrar el elemento en la pagina
                            para posteriormente con javascript mostrarlo
                        -->
                        <div class="table-responsive" id="table-container" style="display: none;">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Categoría</th>
                                        <th>Frecuencia</th>
                                        <th>Frecuencia Relativa</th>
                                        <th>Porcentaje</th>
                                        <th>Ángulo</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla">
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="grafica-container">
        </div></br>
        <div id="grafica-container2">
        </div></br>
        <div id="grafica-container3">
        </div></br>
        <!-- ============================================================== -->
        <!-- End PAge Content -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Container fluid  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <?php
    require 'footer.html';
    ?>
</div>
<!-- ============================================================== -->
<!-- End Page wrapper  -->
<!-- ============================================================== -->
</div>
<!-- ============================================================== -->
<!-- End Wrapper -->
<!-- ============================================================== -->
<!-- ============================================================== -->
<script type="text/javascript" src="js/datoscategoricos.js"></script>