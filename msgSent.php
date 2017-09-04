<?php

// Connection à la DB
	include 'connectDB.php';

// Récup de la requête

	if(isset($_POST['msgSent'])){
		$userId = $_SESSION['userId'];
		$message = $_POST['message'];
	}

	$req = $bdd->prepare("INSERT INTO messages (content, users_idusers) VALUES (? , ?) ");
	$req->execute(array($message, $userId));

	echo('ok');


?>