<?php

// Connection à la DB
include 'connectDB.php';

// Récup de la requête
	$msgSent = $_POST['msgSent'];


	if(isset($_POST['message'])){
	$userId = $_SESSION['userId'];
	$message = $_POST['message'];
	// echo($userId);
	// echo($message);
	// return;
	$req = $bdd->prepare("INSERT INTO messages (content, users_idusers) VALUES (? , ?) ");
	$req->execute(array($message, $userId));



?>