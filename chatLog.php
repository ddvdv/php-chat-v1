<?php

	include 'connectDB.php';

	$req = $bdd->query('SELECT * FROM messages INNER JOIN users ON messages.users_idusers = users.idusers ORDER BY idmessages DESC LIMIT 10');

	$sql_data= $req->fetchAll(PDO::FETCH_ASSOC);

	$length = count($sql_data);
	for ($i=0; $i < $length; $i++) {	
		echo('<p>');
		echo('<span class="time">'.$sql_data[$i]['date'].'</span><br>');
		echo('<span class="name">'.$sql_data[$i]['nom'].'</span> : '.$sql_data[$i]['content']);
		echo('</p>');
	}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
	<link rel="stylesheet" href="style.css">

	<noscript>
		<meta http-equiv="refresh" content="1">	
	</noscript>		
	<title>Document</title>
</head>
<body>
	
</body>
</html>