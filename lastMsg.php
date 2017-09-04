<?php

// Connection à la DB
include 'connectDB.php';


// Récup de la requête
	$lastMsg;
	if(isset($_POST['lastMsg']){
		$lastMsg = $_POST['lastMsg'];
	} else{
		$lastMsg = 0;
	}

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