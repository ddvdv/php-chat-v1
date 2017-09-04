<?php

// Connection à la DB
	include 'connectDB.php';

// Récup de la requête

	// Première demande ou msg déjà chargés
	if(isset($_POST['lastMsg'])){
		$lastMsg = $_POST['lastMsg'];
	} else{
		$lastMsg = 0;
	}


	$req = $bdd->query("SELECT * FROM messages INNER JOIN users ON messages.users_idusers = users.idusers WHERE messages.idmessages > '$lastMsg' ORDER BY idmessages");

	$sql_data= $req->fetchAll(PDO::FETCH_ASSOC);

	// Renvoi en JSON pr affichage en JS
	if (isset($sql_data[0])){
		echo(json_encode($sql_data));
	}

?>