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

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
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
