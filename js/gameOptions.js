var optionsState = {

    create: function () {
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;

        this.scale.pageAlignVertically = true;

        //*********NEED TO CHECK WHY THIS DOESNT WORK!!!!!
        //this.scale.setScreenSize(true);

        ground = game.add.sprite(0, 0, 'ground');
        playTo5 = game.add.sprite(game.world.centerX, game.world.centerY, 'playTo5');
        playTo5.inputEnabled = true;
        playTo10 = game.add.sprite(game.world.centerX, game.world.centerY + 100, 'playTo10');
        playTo10.inputEnabled = true;
        
        playTo5.anchor.setTo(0.5);
        playTo10.anchor.setTo(0.5);
        
        playTo5.alpha = 0.3;
        playTo10.alpha = 0.3;

        var pulse1 = game.add.tween(playTo5).to( { alpha: 1 }, 500, "Linear", true, 0, -1);
        var pulse2 = game.add.tween(playTo10).to( { alpha: 1 }, 500, "Linear", true, 0, -1);
        pulse1.yoyo(true, 500);
        pulse2.yoyo(true, 500);

        //Boots to play state after options selected
        playTo5.events.onInputDown.addOnce(this.play5, this);
        playTo10.events.onInputDown.addOnce(this.play10, this);
        select1.onDown.addOnce(this.play5, this);
        select2.onDown.addOnce(this.play10, this);
    },

    play5 : function () {
        playTo = 5
        game.state.start('play');
    },
    
    play10 : function() {
        playTo = 10;
        game.state.start('play');
    }

}