var loadState = {
    
    preload : function(){
        //Loading all image assests
        game.load.image('banner', 'img/HockeyBanner.png');
        game.load.image('pressStart', 'img/pressSpace.png');
        game.load.image('playTo5', 'img/playTo5.png');
        game.load.image('playTo10', 'img/playTo10.png');
        game.load.image('player1Wins', 'img/player1Wins.png');
        game.load.image('player2Wins', 'img/player2Wins.png');
        game.load.image('ground', 'img/hockeyBoard.png');
        game.load.image('player1', 'img/AirHockeyMallet.png');
        game.load.image('player2', 'img/AirHockeyMallet.png');
        game.load.image('goal1', 'img/goal.png');
        game.load.image('goal', 'img/goal.png');
        game.load.image('puck', 'img/puck.png');
        game.load.audio('puckSound', 'assests/puckSound.wav');

        //Add physics to game
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Set controls variable
        player1Up = game.input.keyboard.addKey(Phaser.Keyboard.A);
        player1Down = game.input.keyboard.addKey(Phaser.Keyboard.Z);

        player2Up = game.input.keyboard.addKey(Phaser.Keyboard.K);
        player2Down = game.input.keyboard.addKey(Phaser.Keyboard.M);

        startButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        select1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        select2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);

        //cross state variables
        player1Score = 0;
        player2Score = 0;
        timer = -1;
        winner = " ";
        playTo = 10;
    },
    
    create : function() {
        game.state.start('menu');
    }
};


