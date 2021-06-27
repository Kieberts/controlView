<?php

$dbServername = "164.68.126.121";
$dbName = "ControlView";
$dbUsername = "sebastian";
$dbPassword = "123qweASD#";
$dbPort = "3306";

$conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName, $dbPort);


function fetch_posts() {
  global $conn;
  return $conn->query("SELECT * FROM `Camera`");
}

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
