// Ajax pr obtenir les derniers messages
var getLastMsg = function(){
	let lastMsg = $('#chatLog p:last-child').attr('id');
	$.ajax({
		url: 'lastMsg.php',
		type: 'POST',
		data: {'lastMsg' : lastMsg},
		success: function(msgLog){
			$('#chatLog').find('#temp').remove();
			$('#chatLog').prepend(msgLog);
		}
	});
};

// Ajax pour envoyer un msg
var sendMsg = function(msgSent){
	let textToSend = $('#envoiMsg').val();
	$('#chatLog').prepend(textToSend);
	$.ajax({
		url: 'msgSent.php',
		type: 'POST',
		data: {'msgSent' : msgSent, 'userId': userId},
		success: getLastMsg()
	});
}

// Fonction principale d'exécution
$(document).ready( function(){
	
	// Mise en place de la div vide pr affichage historique messages
	$('body').prepend('<div id="chatLog"></div>');

	// Récup de l'historique de msg
	getLastMsg();
	setInterval('getLastMsg()', 2000);

	// Affichage de l'interface d'input
	$.ajax({
		url: 'chatBox.php',
		success: function(msgLog){
			$('#chatBox').append(msgLog);
		}
	});

	// $('#update').on('click', function(){
	// 	getLastMsg();
	// });
	// Ajout d'une requête ajax pour recup les msg à une certaine fréquence
	// $('')

	//Ajout d'un éven pour pousser les nv msg de l'user directement dans le log
	// $('#envoiMsg').

});
