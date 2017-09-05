// Variable stockant l'id du dernier msg reçu, initialisaiton à 0
let lastMsg = 0;


// Ajax pr obtenir les derniers messages
var getLastMsg = function(){
	$.ajax({
		url: 'lastMsg.php',
		type: 'POST',
		data: {'lastMsg' : lastMsg},
		success: function(msgLog){
			if (msgLog != ''){
				$('#chatLog').append(displayMsg(msgLog));
				let toTheBottom = +$('#chatLog')[0].scrollHeight;
				$('#chatLog').animate({ scrollTop: toTheBottom }, 'slow');
							$('.date').fadeOut(10);
				$('.message').hover(
					function(){
						$(this).find('.date').fadeIn(10);
					},	function(){
						$(this).find('.date').fadeOut(10);
					}
				);
				console.log('ajax recup msg');
				}
		}
	});
	
	let routine = setTimeout('getLastMsg()', 1000);
};

// Ajax pr afficher les msg obtenus par getLastMsg
var displayMsg = function(msgJSON){
	// parsing de la réponse puis boucle d'affichage
	let msgParsed = JSON.parse(msgJSON);
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
		let myName = $('#myName').text();
		let msgClass = "message";
		myName == nom ? (msgClass += " fromMe", nom = 'you') : msgClass += " fromYou"; 
		let msg = `	<div id=${id} class="${msgClass}">
						<p class="user"> ${nom} said: <span class="date">at ${date} </span> </p>
			 			<p class="content"> ${content} </p>
					</div>
					`;
		msgToDisplay.push(msg);
	}
	return msgToDisplay;
}

// Ajax pour envoyer un msg
var sendMsg = function(){
	let textToSend = $('#message').val();
	$.ajax({
		url: 'msgSent.php',
		type: 'POST',
		data: {'msgSent' : textToSend},
		success: function(htmlBack){
			console.log("sendMsg dans Ajax");
		}
	});

};

// Ajax pour récupérer le bas du chat (form) et ajouter les event listener
var getChatBox = function(){
	$.ajax({
		url: 'chatBox.php',
		type: 'POST',
		success: function(interface){
			$('#chatBox').html(interface);
			// Envoi de msg ajax
			$('#chatBox').on('click', '#envoiMsg', function(event){
				event.preventDefault();
				sendMsg();
				$('#message').val('');
			});

			// Ajax pr login
			$('#chatBox').on('click', '#LogIn', function(event){
				event.preventDefault();
				let email = $('#email').val();
				let password = $('#password').val();
				$.ajax({
					url: 'chatBox.php',
					type: 'POST',
					data: {'LogIn' : 'LogIn', 'email' : email, 'password' : password},
					success: function(htmlBack){
						$('#chatBox').html(htmlBack);
						lastMsg = 0;
						$('#chatLog').html('');
					}
				});
			});

			// Ajax pr logout
			$('#chatBox').on('click', '#deconnect', function(event){
				event.preventDefault();
				$.ajax({
					url: 'chatBox.php',
					type: 'POST',
					data: {'deconnect' : 'deconnect'},
					success: function(htmlBack){
						$('#chatBox').html(htmlBack);
						lastMsg = 0;
						$('#chatLog').html('');
					}
				});
			});

			// Ajax pour signup
			$('#chatBox').on('click', '#SignUp', function(event){
				event.preventDefault();
				let name = $('#SUname').val();
				let email = $('#SUemail').val();
				let password1 = $('#SUpassword1').val();
				let password2 = $('#SUpassword2').val();
				$.ajax({
					url: 'chatBox.php',
					type: 'POST',
					data: {'SignUp' : 'SignUp', 'name' : name, 'email' : email, 'password1' : password1, 'password2' : password2},
					success: function(htmlBack){
						$('#chatBox').html(htmlBack);
						lastMsg = 0;
						$('#chatLog').html('');
					}
				});
			});

		}
	});
};


// Fonction principale d'exécution après chargement
$(document).ready( function(){
	
	// Mise en place de la div vide pr affichage historique messages
	$('.conversation').append('<div id="chatLog"></div>');

	// Mise en place de la div vide pr interface box
	$('.conversation').append('<div id="chatBox"></div>');

	// Récup de l'historique de msg
	getLastMsg();
	// Récup interface box
	getChatBox();

});
