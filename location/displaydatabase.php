<?php
$servername = "localhost";
$username = "id507345_matala02";
$password = "9349433";
$dbname = "id507345_matala02";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, latitude, longitude, altitude, model, date FROM gps";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - latitude: " . $row["latitude"]. " -longitude: " . $row["longitude"]." -altitude: " . $row["altitude"]." -model: " . $row["model"]. " -date: " . $row["date"].  "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>