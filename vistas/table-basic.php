
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
                <h3 class="text-themecolor">Ejemplo</h3>
            </div>
        <label>Inserta el número de datos:</label>
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
        
        <div class="form" id="incognitas">
        </div>

     <div class="row">
            <!-- column -->
        <div class="col-lg-12">
         <div class="card">
            <div class="card-body">
            <h4 class="card-title">Basic Table</h4>
                    <div class="table-responsive">
                     <table class="table">
                    <thead>
                    <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>X - Media</th>
                    <th>(X - Media) * 2</th>
                    <th>((X - Media) * 2) * Y</th>
                    <th>((X - Media) * 2) ^ 2</th>
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

<script type="text/javascript" src="js/app.js"></script>
