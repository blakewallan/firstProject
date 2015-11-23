var loadState = {
    
    preload : function(){
        //*******Loading all image assests*******\\
        game.load.image('ground', 'img/hockeyBoard.png');
        game.load.image('player1', 'img/AirHockeyMallet.png');
        game.load.image('player2', 'img/AirHockeyMallet.png');
        game.load.image('goal1', 'img/goal.png');
        game.load.image('goal', 'img/goal.png');
        game.load.image('puck', 'img/puck.png');
        game.load.audio('puckSound', 'assests/puckSound.wav');

        //*******Add physics to game*******\\
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //*******Set controls variable*******\\
        player1Up = game.input.keyboard.addKey(Phaser.Keyboard.A);
        player1Down = game.input.keyboard.addKey(Phaser.Keyboard.Z);

        player2Up = game.input.keyboard.addKey(Phaser.Keyboard.K);
        player2Down = game.input.keyboard.addKey(Phaser.Keyboard.M);

        startButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        hasScored = false;
        player1Score = 0;
        player2Score = 0;
        timer = -1;
        winner = " ";
        playTo = 10;
        
    },
    
    create : function() {
        game.state.start('play');
    }
};


