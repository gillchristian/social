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
$hostname = "SocialAppData.db.11105068.hostedresource.com";
$username = "SocialAppData";
$dbname = "SocialAppData";

//These variable values need to be changed by you before deploying
$password = "T1nydoto@";
$usertable = "SocialAppData.users";
$yourfield = "SocialAppData";

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
		$data['picture'] = $row["3"];
		$data['bio'] = $row["4"];
		$data['username'] = $row["5"];
		
		session_start();
		$_SESSION["user"] = $data;
		print json_encode($_SESSION["user"]);
	}
}
?>