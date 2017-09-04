<?php

// Connection à la DB
	try{
		$bdd = new PDO('mysql:host=localhost;dbname=chatPhp;charset=utf8', 'root', 'root');
	} catch (Exception $e){
		    echo('Erreur : ' . $e->getMessage());
	}

// Récup de la requête
	$lastMsg = $_POST['lastMsg'];

	$req = $bdd->query("SELECT * FROM messages INNER JOIN users ON messages.users_idusers = users.idusers WHERE messages.idmessages > '$lastMsg' ORDER BY idmessages DESC LIMIT 10 ");

	$sql_data= $req->fetchAll(PDO::FETCH_ASSOC);
	// echo('<pre>');
	// print_r($sql_data);
	// echo('<pre>');
	$length = count($sql_data);
	for ($i=0; $i < $length; $i++) {	
		echo('<p id="'.$sql_data[$i]['idmessages'].'"">');
		echo('<span class="time">'.$sql_data[$i]['date'].'</span><br>');
		echo('<span class="name">'.$sql_data[$i]['nom'].'</span> : '.$sql_data[$i]['content']);
		echo('</p>');
	}


?>