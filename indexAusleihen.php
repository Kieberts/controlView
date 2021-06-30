<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Test</title>

    <script src="./js/jquery/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="./css/stylesDetail.css">
    <script src="./js/DetailView.js" charset="utf-8"></script>

  </head>
  <body>
    <h1 id="headerName"></h1>

    <form id="formID" method="post" action="indexAusgeliehen.php">
        <div>
          <input id="idTag" name="item" type="hidden" value="<?php echo $_GET['item']; ?>">
        </div>
        <div>
          <input id="geraetTag" name="name" type="hidden" value="<?php echo $_GET['name']; ?>">
        </div>
        <div>
          <label>Name:</label>
          <input name="nameAusleiher" type="text">
        </div>
        <div>
          <label>Datum:</label>
          <input name="dateAusleiher" type="date">
        </div>
        <div>
          <input type="submit" value="Ausleihen"> <!-- Sends status to MYSQL DATABASE -->
          <button type="button" name="button" onclick="window.location.href='index.php'">Abbrechen</button>
        </div>
     </form>
  </body>
</html>
