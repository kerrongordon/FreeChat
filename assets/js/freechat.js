angular.module('freeChat', ["firebase"])
	.controller('chatController', function($timeout) {
		var Data = this;		

		var firebaseData = new Firebase("https://dazzling-fire-3713.firebaseio.com/freechatusers");

		Data.sendMessage = function() {
			
			firebaseData.push({Message:Data.message});

			Data.message = "";
		};

		firebaseData.on('value', function(snapshot) {
			$timeout(function() {
				Data.messageList = snapshot.val();
			});
		});

		

	});
