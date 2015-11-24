var gameOverState = {


    create: function () {

        ground = game.add.sprite(0, 0, 'ground');
        startPrompt = game.add.sprite(game.world.centerX, 440, 'pressStart');
        startPrompt.anchor.setTo(0.5);
        startPrompt.alpha = 0.3;
        
        var pulse = game.add.tween(startPrompt).to( { alpha: 1 }, 500, "Linear", true, 0, -1);
        pulse.yoyo(true, 500);
        
        if(winner === 'player1') {
            player1Wins = game.add.sprite(game.world.centerX, game.world.centerY, 'player1Wins');
            player1Wins.anchor.setTo(0.5);
            player1Wins.anchor.setTo(0.5);
        }
        
        else if(winner === 'player2') {
            player2Wins = game.add.sprite(game.world.centerX, game.world.centerY, 'player2Wins');
            player2Wins.anchor.setTo(0.5);
            player2Wins.anchor.setTo(0.5);
        }
        
        //Boots to play state on spacebar press
        startButton.onDown.addOnce(this.start, this);
    },

    start: function () {
        game.state.start('load');
    }

}