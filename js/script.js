var game = new Phaser.Game(1000, 520, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var player1Score = 0;
var player2Score = 0;


function preload() {

    //*******Loading all image assests*******\\
    game.load.image('ground', 'img/hockeyBoard.png');
    game.load.image('player1', 'img/AirHockeyMallet.png');
    game.load.image('player2', 'img/AirHockeyMallet.png');
    game.load.image('goal1', 'img/goal.png');
    game.load.image('goal', 'img/goal.png');
    game.load.image('puck', 'img/puck.png');
    game.load.audio('puckSound', 'assests/puckSound.wav');
}

function create(){
    
    //*******Add physics to game*******\\
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    //*******Set controls variable*******\\
    player1Up = game.input.keyboard.addKey(Phaser.Keyboard.A);
    player1Down = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    
    player2Up = game.input.keyboard.addKey(Phaser.Keyboard.K);
    player2Down = game.input.keyboard.addKey(Phaser.Keyboard.M);
    
    //*******Add all images to game*******\\
    ground = game.add.sprite(0, 0, 'ground');
    
    player1 = game.add.sprite(205,250, 'player1');
    player2 = game.add.sprite(810,250, 'player1');
    
    goal1 = game.add.sprite(8,250, 'goal');
    
    goal2 = game.add.sprite(990,250, 'goal');
    
    puck = game.add.sprite(400, 250, 'puck');
    
    puckSound = game.add.audio('puckSound');

    
    //*******Layout Code*******\\
    //-------Setting Scale-------\\
    player1.scale.setTo(0.3);
    player2.scale.setTo(0.3);
    puck.scale.setTo(0.3);
    goal1.scale.setTo(0.7);
    goal2.scale.setTo(0.7);
    
    
    //-------Set anchor to center-------\\
    player1.anchor.setTo(0.5);
    player2.anchor.setTo(0.5);
    goal1.anchor.setTo(0.5);
    goal2.anchor.setTo(0.5);
    puck.anchor.setTo(0.5);    
    
    //********Add physics to players, goals and puck*******\\
    game.physics.enable([puck, player1, player2, goal1, goal2], Phaser.Physics.ARCADE);
    puck.body.velocity.setTo(500, 300);
    
    //********Adds collision and bounce********\\
    puck.body.collideWorldBounds = true;
    player1.body.collideWorldBounds = true;
    player2.body.collideWorldBounds = true;
    puck.body.bounce.setTo(1, 0.875);
    
    //*******Set players and goals to immovable*******\\
    player1.body.immovable = true;
    player2.body.immovable = true;
    goal1.body.immovable = true;
    goal2.body.immovable = true;

    goal1.body.checkCollision.down = false;
    goal2.body.checkCollision.up = false;
    
}

function update(){
    
    game.physics.arcade.collide(player1, puck, playPuckSound);
    game.physics.arcade.collide(player2, puck, playPuckSound);
    game.physics.arcade.collide(goal1, puck, addPoint(2));
    game.physics.arcade.collide(goal2, puck, addPoint(1));

    
    if (player1Up.isDown){
        player1.body.velocity.y = -400;
    }
    
    else if (player1Down.isDown){
        player1.body.velocity.y =  400;
    }
    
    else if (player2Up.isDown){
        player2.body.velocity.y =  -400;
    }
    
    else if (player2Down.isDown){
        player2.body.velocity.y =  400;
    }
    
    else{
        player1.body.velocity.setTo(0, 0);
        player2.body.velocity.setTo(0, 0);
    }
}

function playPuckSound(){
    puckSound.play();
}

function addPoint(player) {
    if(player === 1){
        player1Score ++;
        console.log(player2Score);
    }
    else if(player === 2){
        player2Score ++;
        console.log(player2Score);
    }
}










