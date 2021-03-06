<?php
header('Access-Control-Allow-Origin: *'); // Allows to do CORS!!!
header ("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
// header ("Access-Control-Allow-Headers", "Content-Type");
// header('Access-Control-Allow-Headers: X-Requested-With');
// header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');

// Test allow all headers.
header('Access-Control-Allow-Headers: *');

//Variables for connecting to your database.
//These variable values come from your hosting account.
$hostname = "HOST_NAME_HERE";
$username = "USER_NAME_HERE";
$dbname = "DATA_BASE_NAME_HERE";

//These variable values need to be changed by you before deploying
$password = "PASSWORD_HERE";
$usertable = "TABLE_HERE";

//Connecting to your database
$conection = mysqli_connect($hostname, $username, $password, $dbname) OR DIE ("Unable to 
connect to database! Please try again later.");


if (isset($_POST['username']) && isset($_POST['password'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];   

    $query = "SELECT * FROM $usertable WHERE username like '$username' AND password like '$password';";

    $result = mysqli_query($conection,$query);
	$row = mysqli_fetch_array($result);

	if($row["username"] != null){

		$data['id'] = $row["0"];
		$data['name'] = $row["1"];
		$data['last_name'] = $row["2"];
		$data['bio'] = $row["3"];
		$data['username'] = $row["4"];
		
		session_start();
		$_SESSION["user"] = $data;
		print json_encode($_SESSION["user"]);
	}
}
?>