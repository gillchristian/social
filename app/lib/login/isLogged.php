<?php
header('Access-Control-Allow-Origin: *'); // Allows to do CORS!!!
header ("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
// header ("Access-Control-Allow-Headers", "Content-Type");
// header('Access-Control-Allow-Headers: X-Requested-With');
// header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');
//Nico Test
header('Access-Control-Allow-Headers: *');
session_start();
echo json_encode($_SESSION["user"]);
?>