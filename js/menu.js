var menuState = {

    create: function () {
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;

        this.scale.pageAlignVertically = true;

        //*********NEED TO CHECK WHY THIS DOESNT WORK!!!!!
        //this.scale.setScreenSize(true);
        
        ground = game.add.sprite(0, 0, 'ground');
        startPrompt = game.add.sprite(game.world.centerX, 440, 'pressStart');
        banner = game.add.sprite(game.world.centerX, game.world.centerY, 'banner');
        banner.anchor.setTo(0.5);
        startPrompt.anchor.setTo(0.5);
        startPrompt.alpha = 0.3;
        
        var pulse = game.add.tween(startPrompt).to( { alpha: 1 }, 500, "Linear", true, 0, -1);
        pulse.yoyo(true, 500);
        
        //Boots to play state on spacebar press
        this.input.onDown.addOnce(this.start, this);
        startButton.onDown.addOnce(this.start, this);
    },

    start: function () {
        game.state.start('options');
    }

}