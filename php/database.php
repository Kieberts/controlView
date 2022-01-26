<?php
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


$dbServername = $_ENV['db_Servername'];
$dbName = $_ENV['db_Name'];
$dbUsername = $_ENV['db_Username'];
$dbPassword = $_ENV['db_Password'];
$dbPort = $_ENV['db_Port'];

$conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName, $dbPort);

function convertCameraToJSON()
{
  global $conn;
  $myArray = array();
  if ($result = $conn->query("SELECT * FROM `Camera`")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }

    $json = json_encode($myArray);
    $ans = "{\"data\":{$json}}";


    $fp = fopen('./json/camera.json', 'w');
    fwrite($fp, $ans);
    fclose($fp);
  }
}

function convertHeadsetToJSON()
{
    global $conn;
    $myArray = array();
    if ($result = $conn->query("SELECT * FROM `Headset`")) {

        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
        }

        $json = json_encode($myArray);
        $ans = "{\"data\":{$json}}";


        $fp = fopen('./json/headset.json', 'w');
        fwrite($fp, $ans);
        fclose($fp);
    }
}

function delete($id,$geraet)
{
  // not needed
    global $conn;
    $conn->query("DELETE FROM `ControlView`.`$geraet` WHERE (`id` = '$id');");
}

function updateAbgeben($id,$geraet)
{
  global $conn;
  $conn->query("UPDATE `ControlView`.`$geraet` SET `ausgeliehen`=FALSE,`ausleiher`=null, `datum`=null where (`id` = '$id');");
}

function updateAusleihen($id,$geraet,$name,$date)
{
  global $conn;
  $conn->query("UPDATE `ControlView`.`$geraet` SET `ausgeliehen`=TRUE,`ausleiher`='$name', `datum`='$date' where (`id` = '$id');");
}
