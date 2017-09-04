let lastMsg = 0;

// Ajax pr obtenir les derniers messages
var getLastMsg = function(){
	$.ajax({
		url: 'lastMsg.php',
		type: 'POST',
		data: {'lastMsg' : lastMsg},
		success: function(msgLog){
			$('#chatLog').append(displayMsg(msgLog));
		}
	});
};

var displayMsg = function(msgJSON){
	let msgParsed = JSON.parse(msgJSON);
	console.log(msgParsed);
	// let nbMsg = msgParsed.length;
	// let numToDisplay = 10;
	// let startPoint = nbMsg - numToDisplay;
	let msgToDisplay = [];
	for (var i = 0; i < msgParsed.length; i++) {
		let id = +msgParsed[i]['idmessages'];
		console.log(id);
		if (id > lastMsg){
			lastMsg = id;
		}
		let date = msgParsed[i]['date'];
		let nom = msgParsed[i]['nom'];
		let content = msgParsed[i]['content'];
		let msg = `<div id=${id} class="message" <span class="date">${date}</span></br>
								<span class="user">${nom}</span>
					 			<span class="content">${content}</div>` ;
		console.log(msg);
		msgToDisplay.push(msg);
	}
	return msgToDisplay;
}

// Ajax pour envoyer un msg
var sendMsg = function(msgSent){
	let textToSend = $('#message').val();
	$.ajax({
		url: 'msgSent.php',
		type: 'POST',
		data: {'msgSent' : msgSent}
	}).done(function(){
		getLastMsg();
	});
};


// Fonction principale d'exécution
$(document).ready( function(){
	
	// Mise en place de la div vide pr affichage historique messages
	$('body').prepend('<div id="chatLog"></div>');

	// Récup de l'historique de msg
	getLastMsg();
	setInterval('getLastMsg()', 2000);

	// Affichage de l'interface d'input
	$('#chatBox').on('click', '#envoyerMsg', function(){
		event.preventDefault;
		sendMsg();
	});

	// $('#update').on('click', function(){
	// 	getLastMsg();
	// });
	// Ajout d'une requête ajax pour recup les msg à une certaine fréquence
	// $('')

	//Ajout d'un éven pour pousser les nv msg de l'user directement dans le log
	// $('#envoiMsg').

});
