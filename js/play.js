
var playState = {
    
    create : function() {
        
        //*******Add all images to game*******\\
        ground = game.add.sprite(0, 0, 'ground');
        player1 = game.add.sprite(205, 250, 'player1');
        player2 = game.add.sprite(810, 250, 'player1');
        goal1 = game.add.sprite(8, 250, 'goal');
        goal2 = game.add.sprite(990, 250, 'goal');
        puck = game.add.sprite(505, 253, 'puck');

        //Sounds
        puckSound = game.add.audio('puckSound');

        //Scores
        player1text = game.add.text(50, 50, player1Score);
        player2text = game.add.text(920, 50, player2Score);

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
        startPuck();

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

        goal1.body.checkCollision.left = false;
        goal1.body.checkCollision.right = false;
        goal2.body.checkCollision.left = false;
        goal2.body.checkCollision.right = false;
    },
    
    update : function(){
        game.physics.arcade.collide(player1, puck, playPuckSound);
        game.physics.arcade.collide(player2, puck, playPuckSound);

        checkGoal();

        if (player1Up.isDown) {
            player1.body.velocity.y = -400;
        } 
        else if (player1Down.isDown) {
            player1.body.velocity.y = 400;
        } 
        else if (player2Up.isDown) {
            player2.body.velocity.y = -400;
        } 
        else if (player2Down.isDown) {
            player2.body.velocity.y = 400;
        } 
        else {
            player1.body.velocity.setTo(0);
            player2.body.velocity.setTo(0);
        }
    }
}


function playPuckSound() {
    puckSound.play();
}

function addPoint(player) {

    if (player === 1) {
        player1Score++;
        player1text.text = player1Score;
    } 
    else if (player === 2) {
        player2Score++;
        player2text.text = player2Score;
    }
}

function startPuck() {
    //if (startButton.isDown) {
        puck.body.velocity.setTo(500, 300);
        puck.body.x = 505;
        puck.body.y = 253;
    //}
}

function checkGoal() {
    if (game.physics.arcade.overlap(goal1, puck)) {
        addPoint(2);
        startPuck();
    }

    if (game.physics.arcade.overlap(goal2, puck)) {
        addPoint(1);
        startPuck();
    }
}