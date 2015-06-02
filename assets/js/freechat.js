angular.module('freeChat', ["firebase"])
	.controller('chatController', function($timeout, $firebaseObject, $firebaseArray, $firebaseAuth) {
		var Data = this;		

		var firebaseData = new Firebase("https://dazzling-fire-3713.firebaseio.com/freechatusers");

		Data.data = $firebaseObject(firebaseData);

		Data.messages = $firebaseArray(firebaseData);

		Data.sendMessage = function() {
			
			firebaseData.push({Message:Data.message});

			Data.message = "";
		};

		firebaseData.on('value', function(snapshot) {
			$timeout(function() {
				Data.messageList = snapshot.val();
			});
		});

		

	/*	firebaseData.authWithPassword({
		  email    : "bobtony@firebase.com",
		  password : "correcthorsebatterystaple"
		}, function(error, userData) {
		  if (error) {
		    console.log("Error creating user:", error);
		  } else {
		    console.log("Successfully created user account with uid:", userData.uid);
		  }
		});*/
	


	})

	.controller('usercontroller', function() {
		var user = this;

		var ref = new Firebase("https://dazzling-fire-3713.firebaseio.com/freechatusers");

		//Creating User Accounts

		user.create = function() {
			ref.createUser({
			  email    : user.userEamil,
			  password : user.userPassword
			}, function(error, userData) {
			  if (error) {
			    console.log("Error creating user:", error);
			  } else {
			    console.log("Successfully created user account with uid:", userData.uid);
			  }
			});

			console.log('clicked');

			user.userEamil = "";
			user.userPassword = "";
		}

		
	});