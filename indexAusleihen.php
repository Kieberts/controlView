<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Ausleih Formular</title>

    <script src="./js/jquery/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="./css/stylesDetail.css">
    <script src="./js/DetailView.js" charset="utf-8"></script>

  </head>
  <body>
    <div id="content">
      <div>
        <h1>Ausleihformular</h1>
      </div>
      <div >
        <p id="headerName">Gerätname: </p>
        <p class="hint">Hier könnten noch mehr Informationen wie ID des Geräts aufgelisten werden</p>
        <form method="post" action="indexAusgeliehen.php">
            <div class="formID-input">
              <input id="idTag" name="item" type="hidden" value="<?php echo $_GET['item']; ?>">
            </div>
            <div class="formID-input">
              <input id="geraetTag" name="name" type="hidden" value="<?php echo $_GET['name']; ?>">
            </div>
            <div class="formID-input">
              <label id="pflichtFeldName">Name*:</label>
              <input id="inputName" name="nameAusleiher" type="text" onchange="checkInput()" placeholder="Max Mustermann">
            </div>
            <div class="formID-input">
              <label id="pflichtFeldDatum">Datum*:</label>
              <input id="inputDate" name="dateAusleiher" type="date" onchange="checkInput()">
            </div>
            <div class="formID-input">
              <input id="send" type="submit" value="Ausleihen"> <!-- Sends status to MYSQL DATABASE -->
              <button type="button" name="button" onclick="window.location.href='index.php'">Abbrechen</button>
            </div>
         </form>
         <div>
           <p id="pflicht">*Pflichtfeld</p>
         </div>
      </div>
    </div>

  </body>
</html>
