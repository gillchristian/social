<?php
header('Access-Control-Allow-Origin: *'); // Allows to do CORS!!!
header ("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
header ("Access-Control-Allow-Headers", "Content-Type");
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');

//Variables for connecting to your database.
//These variable values come from your hosting account.
$hostname = "HOST_NAME_HERE";
$username = "USER_NAME_HERE";
$dbname = "DATA_BASE_NAME_HERE";

//These variable values need to be changed by you before deploying
$password = "PASSWORD_HERE";
$usertable = "TABLE_HERE";

//Connecting to your database
$conection = mysqli_connect($hostname, $username, $password, $dbname) OR DIE ("Unable to SELECT * FROM `post` WHERE 1
connect to database! Please try again later.");

//Fetching from your database table.
$query = "SELECT * FROM $usertable ORDER BY id DESC";
$result = mysqli_query($conection,$query);
$flag = true;

/*$all_rows = array();
while($row=mysqli_fetch_array($result)) {
    $all_rows[] = $row;
}
$all_rows = array_reverse($all_rows);
for ($i=0; $i < count($all_rows); $i++) {
    $data['id'] = $all_rows[$i]["0"];
    $data['user_id'] = $all_rows[$i]["1"];
    $data['content'] = $all_rows[$i]["2"];
    $data['time'] = $all_rows[$i]["3"];
    $data['favorite'] = $all_rows[$i]["4"];
    $data['read'] = $all_rows[$i]["5"];
    if ($flag) {
        echo "[";
        echo json_encode($data);
        $flag = false;    
    }
    else {
        echo ",";
        echo json_encode($data);    
    }
}            
echo "]"; */ 

while($row=mysqli_fetch_array($result) ) {

    $data['id'] = $row["0"];
    $data['user_id'] = $row["1"];
    $data['content'] = $row["2"];
    $data['time'] = $row["3"];
    $data['favorite'] = $row["4"];
    $data['read'] = $row["5"];

    if ($flag) {
        echo "[";
        echo json_encode($data);
        $flag = false;    
    }
    else {
        echo ",";
        echo json_encode($data);    
    }
}
echo "]";

?>