<?php include("./php/database.php");
    echo convertHeadsetToJSON();
    echo convertCameraToJSON();
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control View</title>

    <!-- stylesheet -->
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/jquery.dataTables.min.css">

    <!-- Bootstrap5 -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">


    <!-- Scripts -->

    <!-- jquery -->
    <script src="./js/jquery/jquery-3.6.0.min.js"></script>
    <script src="./js/jquery/jquery.dataTables.min.js"></script>

    <!-- Data Files -->
    <script src="./json/camera.json"></script>
    <script src="./json/headset.json"></script>

    <!-- Table -->
    <script src="./js/tablesCamera.js"></script>
    <script src="./js/tablesHeadset.js"></script>


</head>

<body>

<div id="container">
    <section id="title">
        <h1>Control View</h1>
    </section>
    <section>
      <div>
          <table id="tableCamera" class="table table-striped" style="width: 100%;">
              <thead>
                  <tr>
                      <th>Kamera</th>
                      <th>Verfügbar</th>
                      <th>Ausgeleihen von</th>
                      <th>ausleihen</th>
                    </tr>
                  </thead>
                </table>
        </div>
    </section>
    <section>
      <div>
          <table id="tableHeadset" class="table table-striped" style="width: 100%;">
              <thead>
                  <tr>
                      <th>Headset</th>
                      <th>Verfügbar</th>
                      <th>Ausgeleihen von</th>
                      <th>ausleihen</th>
                  </tr>
              </thead>
          </table>
      </div>
    </section>
</div>

</body>
</html>
