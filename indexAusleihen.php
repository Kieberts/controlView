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

    <form id="formID">
        <div>
          <label>Name:</label>
          <input id="name" name="name" type="text">
        </div>
        <div>
          <label>Datum:</label>
          <input id="datum" name="date" type="date">
        </div>
        <div>
          <input id="ausleihen" type="submit" name="update" value="Ausleihen"> <!-- Sends status to MYSQL DATABASE -->
          <input id="abbrechen" type="submit" name="cancel" value="Abbrechen"> <!-- Returns to index.php -->
        </div>
     </form>
  </body>
</html>
