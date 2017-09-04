<?php
	try{
		$bdd = new PDO('mysql:host=localhost;dbname=chatPhp;charset=utf8', 'root', 'root');
	} catch (Exception $e){
		    echo('Erreur : ' . $e->getMessage());
	}

	deuxième test