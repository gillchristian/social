<?php
header('Access-Control-Allow-Origin: *'); // Allows to do CORS!!!
header ("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
header ("Access-Control-Allow-Headers", "Content-Type");
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');

//Variables for connecting to your database.
//These variable values come from your hosting account.
$hostname = "SocialAppData.db.11105068.hostedresource.com";
$username = "SocialAppData";
$dbname = "SocialAppData";

//These variable values need to be changed by you before deploying
$password = "T1nydoto@";
$usertable = "SocialAppData.post";
$yourfield = "SocialAppData";

//Connecting to your database
$conection = mysqli_connect($hostname, $username, $password, $dbname) OR DIE ("Unable to 
connect to database! Please try again later.");

if (isset($_GET['content'])) {

    $content = $_GET['content'];
    $user_id = $_GET['user_id'];    

    $time = date("Y-m-d h:i:s");

    $query = "INSERT INTO $usertable (`id`, `user_id`, `content`, `time`, `favorite`, `read`) VALUES (NULL, '$user_id', '$content', '$time', 0, 0);";
    $result = mysqli_query($conection,$query);
}

$query = "SELECT * FROM $usertable WHERE id = LAST_INSERT_ID();";
$result = mysqli_query($conection,$query);
/*$user_id = mysqli_fetch_array($result);

$query = "SELECT FROM $usertable WHERE 'id'=$user_id";
$result = mysqli_query($conection,$query);*/

$row = mysqli_fetch_array($result);

$data['id'] = $row["0"];
$data['user_id'] = $row["1"];
$data['content'] = $row["2"];
$data['time'] = $row["3"];
$data['favorite'] = $row["4"];
$data['read'] = $row["5"];

echo json_encode($data);
?>