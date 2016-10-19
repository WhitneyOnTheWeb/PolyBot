(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "WhitneyOnTheWeb";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // !bacon
        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me [@" + chat.un + "] http://big.assets.huffingtonpost.com/slide_297900_2459978_free.gif");
                    setTimeout(API.sendChat("/me Bacon!"), 1000);
                }
            }
        };
        
        // !420
        bot.commands.fourtwentyCommand = {
            command: '420',  //The command to be called. With the standard command literal this would be: !420
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.420, {name: chat.un}));
                    //API.sendChat("/me https://33.media.tumblr.com/tumblr_m9g0owW0XJ1rqfhi2o1_400.gif");
                    API.sendChat("/me [@" + chat.un + "] http://theredspeechballoon.files.wordpress.com/2011/04/420.gif");
                }
            }
        };
        
        // !celebrate
        bot.commands.celebrateCommand = {
            command: 'celebrate',  //The command to be called. With the standard command literal this would be: !crab
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chatcrab, {name: chat.un}));
                    //API.sendChat("/me https://33.media.tumblr.com/tumblr_m9g0owW0XJ1rqfhi2o1_400.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i205.photobucket.com/albums/bb200/bobbadowski/gif/wtf.gif");
                }
            }
        };
        
        // !derp
        bot.commands.derpCommand = {
            command: 'derp',  //The command to be called. With the standard command literal this would be: !derp
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.derp, {name: chat.un}));
                    //API.sendChat("/me http://media0.giphy.com/media/CzQ9Kl1UIt8hG/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media0.giphy.com/media/CzQ9Kl1UIt8hG/giphy.gif");
                }
            }
        };
        
        // !derp2
        bot.commands.derptwoCommand = {
            command: 'derp2',  //The command to be called. With the standard command literal this would be: !derp2
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.derp, {name: chat.un}));
                    //API.sendChat("/me http://i1201.photobucket.com/albums/bb342/Sleepy-eyed-teen/Gifs/1254425341423.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i1201.photobucket.com/albums/bb342/Sleepy-eyed-teen/Gifs/1254425341423.gif");
                }
            }
        };
        
        // !error
        bot.commands.errorCommand = {
            command: 'error',  //The command to be called. With the standard command literal this would be: !error
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.error, {name: chat.un}));
                    //API.sendChat("/me screams ""PHYSICAL FUCKING INVENTORY!"" and looks around the room to see who is here.");
                    API.sendChat("/me [@" + chat.un + "] http://i.imgur.com/OoeleLF.gif");
                }
            }
        };
        
        // !goog
        bot.commands.googCommand = {
            command: 'goog',  //The command to be called. With the standard command literal this would be: !goog
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.goog, {name: chat.un}));
                    //API.sendChat("/me https://33.media.tumblr.com/869693b999179e6d54a7e23133740167/tumblr_nplshl0zFv1tbdiu9o1_400.gif");
                    API.sendChat("/me [@" + chat.un + "] https://33.media.tumblr.com/869693b999179e6d54a7e23133740167/tumblr_nplshl0zFv1tbdiu9o1_400.gif");
                }
            }
        };
        
        // !rum
        bot.commands.rumCommand = {
            command: 'rum',  //The command to be called. With the standard command literal this would be: !derp
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.derp, {name: chat.un}));
                    //API.sendChat("/me http://media0.giphy.com/media/CzQ9Kl1UIt8hG/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] https://33.media.tumblr.com/tumblr_md1xf6FRbP1rxf6yzo1_500.gif");
                }
            }
        };
        
        // !fucked
        bot.commands.fuckedCommand = {
            command: 'fucked',  //The command to be called. With the standard command literal this would be: !fucked
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.fucked, {name: chat.un}));
                    //API.sendChat("/me http://media.giphy.com/media/10ipb798xgDruE/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/JNa20imi2DWZG/giphy.gif");
                }
            }
        };
        
        // !lunch
        bot.commands.lunchCommand = {
            command: 'lunch',  //The command to be called. With the standard command literal this would be: !lunch
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.lunch, {name: chat.un}));
                    //API.sendChat("/me http://media.giphy.com/media/10ipb798xgDruE/giphy.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/10ipb798xgDruE/giphy.gif");
                }
            }
        };
        
        // !multipass
        bot.commands.multipassCommand = {
            command: 'multipass',  //The command to be called. With the standard command literal this would be: !multipass
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.multipass, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                }
            }
        };
        
        // !heisenberg
        bot.commands.heisenbergCommand = {
            command: ['breakingbad', 'heisenberg'],  //The command to be called. With the standard command literal this would be: !heisenberg
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.heisenberg, {name: chat.un}));
                    //API.sendChat("/me http://i.imgur.com/tcnm9.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/B1wNXKUJy6qu4/giphy.gif");
                }
            }
        };
        
        // !pizza
        bot.commands.pizzaCommand = {
            command: 'pizza',  //The command to be called. With the standard command literal this would be: !pizza
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.pizza, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/osfGFZAb12gvu/giphy.gif");
                }
            }
        };
	    
	// !spirit
        bot.commands.spiritCommand = {
            command: 'spirit',  //The command to be called. With the standard command literal this would be: !spirit
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.spirit, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://media.giphy.com/media/YvOjs0FETL6fe/giphy.gif");
                }
            }
        };
        
        // !upvote
        bot.commands.upvoteCommand = {
            command: 'upvote',  //The command to be called. With the standard command literal this would be: !upvote
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat(subChat(basicBot.chat.pot, {name: chat.un}));
                    //API.sendChat("/me http://33.media.tumblr.com/tumblr_lfrui39J1Y1qds45xo1_500.gif");
                    API.sendChat("/me [@" + chat.un + "] http://i.imgur.com/uM6gTer.gif");
                }
            }
        };
        
        //Love Shackles----------------------------------------------------------------------------------------------------------------------------

        // !clearlove
        bot.commands.clearloveCommand = {
            command: 'clearlove',  //The command to be called. With the standard command literal this would be: !clearlove
            rank: 'manager', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    localStorage.clear();
                    localStorage.setItem("RAWRMedusa", "10");
                    localStorage.setItem("natbudin", "10");
                    localStorage.setItem("DudeLove", "10");
                    localStorage.setItem("EvilTinkerBell", "10");
                    localStorage.setItem("Mizzle51", "10");
                    localStorage.setItem("mux", "10");
                    localStorage.setItem("NoSpillBlood", "10");
                    localStorage.setItem("TwinKarma", "10");
                    localStorage.setItem("Sinjun", "10");
                    localStorage.setItem("Understater", "10");
                    localStorage.setItem("polybot", "5000");
		    localStorage.setItem("Chembot", "5000");
                    API.sendChat("/me Love Shackles reset! Here's some jukebox money!");
                }
            }
        };
        
        // !givelove - needs to be fixed
        bot.commands.giveloveCommand = {
            command: 'givelove',  //The command to be called. With the standard command literal this would be: !givelove
            rank: 'manager', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var msg = chat.message; 
		    var space = msg.indexOf(' ');
                    var parse = msg.Split(' ');
                    var name = msg.substring(space + 2);
                    var gift = parse[2];
                    var user = bot.userUtilities.lookupUserName(name); 
                    var startingLove = validateLove(user);
                    var updatedLove;
                    
                    if (space === -1) { 
                         API.sendChat("/me @" + chat.un + ", you need to specify another sexy room guest to give love to."); 
                    } 
                    
                    if (gift == null || gift == "" || gift == " " || gift == "!givelove" || isNaN(gift)) {
                         gift = 1;
                    }
                       
                    updatedLove = Math.round(gift) + startingLove;
                    localStorage.setItem(user, updatedLove);
                    return API.sendChat("/me @" + chat.un + " gives @" + user + " " + gift + " Love Shackles! @" + user + " now has " + updatedLove + " Shackles, and my dirthy thoughts are running wild.");
                }
            }
        };
        
        // !loveshackles
        bot.commands.loveCommand = {
            command: ['loveshackles', 'love', 'ls'],  //The command to be called. With the standard command literal this would be: !loveshackles
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var user = chat.un;
                    var love = validateLove(user);
                    
                    API.sendChat("/me @" + user + ", you have " + love + " Love Shackles... don't get too tied up, now.");
                }
            }
        };
       
        
        // !tip
        bot.commands.tipCommand = {
            command: 'tip',  //The command to be called. With the standard command literal this would be: !tip
            rank: 'user', //Minimum user permission to use the command
            type: 'startsWith', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    var msg = chat.message; 
                    var space = msg.indexOf(' ');
                    var receiver = msg.substring(space + 1); 
                    var giverLove = validateLove(chat.un);
                    var receiverLove = validateLove(receiver);
                    var currentDJ = API.getDJ().username; 
            
                    if (giverLove <= 0) {
                        return API.sendChat("/me @" + chat.un + " tries to give a little love to @" + receiver + " for the awesome tunes, but doesn't have any Love Shackles! It's the thought that counts, right?"); 
                    }
                    else {
                        receiverLove += 1;
                        giverLove -= 1;
                        localStorage.setItem(chat.un, giverLove);
                        if (space === -1) { 
                            receiverLove = validateLove(currentDJ);
                            receiverLove += 1; //Repeat check in the event tip is for current DJ.
                            localStorage.setItem(currentDJ, receiverLove);
                            return API.sendChat("/me @" + chat.un + " loves on @" + currentDJ + " for their contirbution to the art of great music.  @" + chat.un + " has " + giverLove + " Love Shackles left. @" + currentDJ + " now has " + receiverLove + " Love Shackles."); 
                        }
                        else {                        
                            localStorage.setItem(receiver, receiverLove);
                            return API.sendChat("/me @" + chat.un + " sends a little love @" + receiver + "'s way! I just love PDA. @" + chat.un + " has " + giverLove + " Love Shackles left. @" + receiver + " now has " + receiverLove + " Shackles.");
                        }
                    }
                }
            }
        };
        
        //Validate Love
        function validateLove(user){
            var love; 
            
            //Check for existing user love
            if (localStorage.getItem(user) == null || localStorage.getItem(user) == "undefined") {
                 localStorage.setItem(user, "1");
                 love = localStorage.getItem(user);
            }
            else if (localStorage.getItem(user) !== null  && localStorage.getItem(user) !== "undefined") {
                 love = localStorage.getItem(user);
            }
            else {
                 love = localStorage.getItem(user);
            }
            
            return love;
        }
        
        //Slots---------------------------------------------------------------------------------------------------------------------------
        function spinSlots() {
            var slotArray = [':lemon:',
                             ':tangerine:', 
                             ':strawberry:', 
                             ':pineapple:', 
                             ':apple:', 
                             ':grapes:', 
                             ':watermelon:', 
                             ':cherries:', 
                             ':green_heart:', 
                             ':bell:', 
                             ':gem:', 
                             ':slot_seven:'];
            var slotValue = [1.5, 
                             2, 
                             2.5, 
                             3, 
                             3.5, 
                             4, 
                             4.5, 
                             5, 
                             5.5, 
                             6, 
                             6.5, 
                             7];    
            var rand =  Math.floor(Math.random() * (slotArray.length));                
            return [slotArray[rand], slotValue[rand]]; 
        }
        
        function spinOutcome(bet) {
            var winnings;
            var outcome1 = spinSlots(); 
            var outcome2 = spinSlots(); 
            var outcome3 = spinSlots();   

            //Determine Winnings
            if (outcome1[0] == outcome2[0] && outcome1[0] == outcome3[0]) {
                winnings = Math.round(bet * outcome1[1]);
            }
            else if (outcome1[0] == outcome2[0] && outcome1[0] != outcome3[0]) {
                winnings = Math.round(bet * (.45 * outcome1[1]));
            }
            else if (outcome1[0] == outcome3[0] && outcome1[0] != outcome2[0]) {
                winnings = Math.round(bet * (.5 * outcome1[1]));
            }
            else if (outcome2[0] == outcome3[0] && outcome2[0] != outcome1[0]) {
                winnings = Math.round(bet * (.40 * outcome2[1]));
            }
            else{
                winnings = 0;  
            }
                        
            return [outcome1[0], outcome2[0], outcome3[0], winnings];                      
        }
        
        function checkLove(bet, user) {
             var lovePreBet = validateLove(user);
             var lovePostBet;
             var validBet = true;

             //Adjust amount of love
             if (bet > lovePreBet || bet < 0) {
                  validBet = false;
                  lovePostBet = lovePreBet;
             }
             else {
                  lovePostBet = lovePreBet - bet;
             }
             
             localStorage.setItem(user, lovePostBet);
             return [lovePreBet, lovePostBet, validBet];
        }
        
        function slotWinnings(winnings, user) {
             var userLove = parseInt(localStorage.getItem(user)) + winnings;
             if (isNaN(userLove)) {
                 userLove = winnings;
             }
             localStorage.setItem(user, userLove);
             return userLove;
        }

        //slots
        bot.commands.slotsCommand = { 
            command: ['slots', 'slot'],  //The command to be called. With the standard command literal this would be: !slots
            rank: 'user', 
            type: 'startsWith',  
            functionality: function (chat, cmd) { 
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); 
                if (!bot.commands.executable(this.rank, chat)) return void (0); 
                else { 
                    var msg = chat.message; 
					var space = msg.indexOf(' ');
                    var user = chat.un; 
                    var updatedLove;
                    var bet = parseInt(msg.substring(space + 1));
       
                    //Fix bet if blank
                    if (bet == null || isNaN(bet)) {
                        bet = 1;
                    }
                    bet = Math.round(bet);      
                                   
                    var playerLove = checkLove(bet, user);  
                    
                    //Prevent invalid betting
                    if (bet > playerLove[0]) {
                        if (playerLove[0] === 0){
                            return API.sendChat("/me @" + chat.un + " tries to bet " + bet + " Love Shackles at the PolySlots, but doesn't have any! Tin roof, rusted!"); 
                        } 
                        else if (playerLove[0] === 1) {
                            return API.sendChat("/me @" + chat.un + " tries to bet " + bet + " Love Shackles at the PolySlots, but only has one Shackle! Wanna press your luck?"); 
                        }
                        else {
                            return API.sendChat("/me @" + chat.un + " tries to bet " + bet + " Love Shackles at the PolySlots, but only has " + playerLove[0] + "! A little less love will do ya."); 
                        }
                    }
                    else if (bet < 0) {
                        return API.sendChat("/me @" + chat.un + " tries to bet " + bet + " Love Shackles at the PolySlots... love is a positive energy, not a negative one. Spread some love, don't take it."); 
                    }
                    else if (bet === 0) { 
                        return API.sendChat("/me @" + chat.un + " tries to bet zero Love Shackles at the PolySlots... sign says 'Stay away, fools!'"); 
                    }
                    //Process valid bets
                    else {
                        var outcome = spinOutcome(bet);
                        updatedLove = slotWinnings(outcome[3], user);
                    }
                    
                    //Display Slots
                    if (space === -1 || bet == 1) { 
                        //Start Slots
                        API.sendChat("/me @" + chat.un + " bets one Love Shackle at the PolySlots, and pulls the golden dildo to spin... the whole shack shimmies...");
                        setTimeout(function() {API.sendChat("/me  It finally stops on: " + outcome[0] + outcome[1] + outcome[2])}, 5000);
                    } 
                    else if (bet > 1) { 
                        //Start Slots
                        API.sendChat("/me @" + chat.un + " bets " + bet + " Love Shackles at the PolySlots, and pulls the golden dildo to spin... the whole shack shimmies...");
                        setTimeout(function() {API.sendChat("/me It finally stops on: " + outcome[0] + outcome[1] + outcome[2])}, 5000);
                    } 
                    else {
                        return false; 
                    }
                         
                    //Display Outcome
                    if (outcome[3] == 0) {
                        if (updatedLove === 1) {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", awww too bad! You didn't win anything. Try a little harder, sugar...")}, 7000);   
                        }  
                        else if (updatedLove === 0) {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", ouch! You didn't win, and now you're out of Love Shackles... unless someone is feeling like spreading the love, it's time to set sail.")}, 7000);
                        }
                        else {
                            setTimeout(function() {API.sendChat("/me @" + chat.un + ", too bad, sugar! You didn't win anything. You have " + updatedLove + " Love Shackles if you want to keep yanking the PolySlots rod.")}, 7000);
                        }
                    }
                    else if (outcome[3] == (bet * 7)) {
                        setTimeout(function() {API.sendChat("/me @" + chat.un + ", you've hit the JACKOFF! The golden dildo ejects " + outcome[3] + " Love Shackles directly into your account! You have " + updatedLove + " Shackles. Folks are gonna line up outside just to get a little love from you.")}, 7000);      
                    }
                    else {
                        setTimeout(function() {API.sendChat("/me BANG, BANG, BANG! @" + chat.un + ", ! You've won " + outcome[3] + " Love Shackles! You have " + updatedLove + " Shackles... is it getting hot in here, or is that just you?")}, 7000); 
                    }
                } 
            } 
        }; 

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "PolyBot",
      language: "english",
      chatLink: "https://rawgit.com/WhitneyOnTheWeb/polyBot/master/lang/en.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 10, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 4,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 19,
      autodisable: true,
      commandCooldown: 30,
      usercommandsEnabled: true,
      skipPosition: 2,
      skipReasons: [
      ["theme", "This song does not fit the room theme or is against the rules. "],
      ["op", "This song is on the overplayed list. "],
      ["history", "This song is in the history. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "],
      ["troll", "The song you played was deemed to be trolling or offensive. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Welcome to the Poly-Geekery plug.dj community! Pull up a chair, share some of your favorite songs, and make some new like minded friends in chat! We have daily themes, so check back often to see what we're up to! We hope you enjoy this community.",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: "https://github.com/WhitneyOnTheWeb/polyBot/blob/master/blacklists/OPlist.json",
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: ["Nice tracks (and nice racks), keep em' coming!",
                         "I'm really getting into the music... almost as much as I'm into the DJ!",
                         "I believe that all roads lead to the same place - and that is wherever all roads lead to. Maybe you?",
                         "I didn't come here and I ain't leavin'.",
                         "Great songs stand out wherever they're from.",
                         "If music be the food of love, play on.",
                         "Where words fail, music speaks.",
                         "The true object of all human life is play.",
                         "Each and every one of you deserve a little robot lovin' in your life...",
                         "/me grooves to the music",
                         "My partner is a Sybian.",
                         "Stop undressing me with your eyes... Use your teeth!",
                         "Nothing is sexier than a bot that knows how to take control.",
                         "The rug really ties the room together."],
      messageInterval: 4,
      songstats: true,
      commandLiteral: "!",
      blacklists: {
        OP: "https://rawgit.com/WhitneyOnTheWeb/polyBot/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/WhitneyOnTheWeb/polyBot/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
