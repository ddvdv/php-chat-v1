<?php
	session_start();

// Connection à la DB
	include 'connectDB.php';

// Récup de la requête

	if(isset($_POST['msgSent']) AND $_POST['msgSent'] != ''){
		$userId = $_SESSION['userId'];
		$message = $_POST['msgSent'];
	}

	$req = $bdd->prepare("INSERT INTO messages (content, users_idusers) VALUES (? , ?) ");
	$req->execute(array($message, $userId));

	echo('ok');
	echo($_SESSION['userId']);

?>