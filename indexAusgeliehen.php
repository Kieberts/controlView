<?php
  include("./php/database.php");
  echo updateAusleihen($_POST['item'],$_POST['name'],$_POST['nameAusleiher'],$_POST['dateAusleiher']);
  header("Location: index.php");
?>

<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Abgabe</title>
    <style type="text/css">
      body {
        width: 700px;
        margin: auto;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
  </body>
</html>
