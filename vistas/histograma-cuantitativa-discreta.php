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
                <h3 class="text-themecolor">Histograma para variables cuantitativas discretas</h3>
            </div>
        <label>Inserta el número de intervalos:</label>
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
                    <div class="table-responsive" id="table-container" style="display: none;">
                     <table class="table">
                    <thead>
                    <tr>
                    <th>Intervalos de Clase</th>
                    <th>Frecuencia Absoluta</th>
                    <th>Frecuencia Relativa</th>
                    <th>Frecuencia Acumulada</th>
                    <th>Frecuencia Relativa Acumulada</th>
                    <th>Porcentaje</th>
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
        </div>
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

<script type="text/javascript" src="js/cuantitativadisdreta.js"></script>