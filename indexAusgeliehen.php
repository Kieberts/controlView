<?php
  include("./php/database.php");
  echo updateAusleihen($_GET['item'],$_GET['name'],$_GET['nameAusleiher'],$_GET['dateAusleiher']);
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
    <p>Erfolgreich ausgeliehen</p>
    <p><a href="index.php">Zurück</a></p>
  </body>
</html>
