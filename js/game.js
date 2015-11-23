var game = new Phaser.Game(1000, 520, Phaser.AUTO, 'game');
game.state.add('load', loadState);
//game.state.add('menu', menuState);
game.state.add('play', playState);
//game.state.add('gameOver', gameOverState);

game.state.start('load');
