//define state 
var playState = {
    
    create : function() {
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;

        this.scale.pageAlignVertically = true;
        
        //*********NEED TO CHECK WHY THIS DOESNT WORK!!!!!
        //this.scale.setScreenSize(true);
        
        //add all assests to the game board
        ground = game.add.sprite(0, 0, 'ground');
        player1 = game.add.sprite(205, 250, 'player1');
        player2 = game.add.sprite(810, 250, 'player1');
        goal1 = game.add.sprite(8, 250, 'goal');
        goal2 = game.add.sprite(990, 250, 'goal');
        puck = game.add.sprite(game.world.centerX, game.world.centerY, 'puck');
        
        
        puck.inputEnabled = true;
        puck.events.onInputDown.add(firePuck);
        

        //Add Sounds
        puckSound = game.add.audio('puckSound');

        //Add Scores
        player1text = game.add.text(50, 50, player1Score);
        player2text = game.add.text(920, 50, player2Score);
        
        //Add Timer
        game.time.events.loop(1000, timerFunc);
        timerText = game.add.text(game.world.centerX, 50, '0');
        timerText.anchor.setTo(0.5, 0.5);
        
        
        //Layout Code
        //Setting Scale
        player1.scale.setTo(0.3);
        player2.scale.setTo(0.3);
        puck.scale.setTo(0.3);
        goal1.scale.setTo(0.7);
        goal2.scale.setTo(0.7);
        //Set anchor to center for easier positioning
        player1.anchor.setTo(0.5);
        player2.anchor.setTo(0.5);
        goal1.anchor.setTo(0.5);
        goal2.anchor.setTo(0.5);
        puck.anchor.setTo(0.5);
        
        movingUp = false;
        movingDown = false;
        
        //Add physics to players, goals and puck
        game.physics.enable([puck, player1, player2, goal1, goal2], Phaser.Physics.ARCADE);
        
        //Dont let players or puck leave the world bounds
        puck.body.collideWorldBounds = true;
        player1.body.collideWorldBounds = true;
        player2.body.collideWorldBounds = true;
        
        //Smaller y bounce for better play
        //Slightly increase X to speed up the pace
        puck.body.bounce.setTo(1.03, 0.875);

        //Set players and goals to immovable
        player1.body.immovable = true;
        player2.body.immovable = true;
        goal1.body.immovable = true;
        goal2.body.immovable = true;

        //Allow overlap to simulate puck going into goal
        goal1.body.checkCollision.left = false;
        goal1.body.checkCollision.right = false;
        goal2.body.checkCollision.left = false;
        goal2.body.checkCollision.right = false;
        
        if(!game.device.desktop){
            arrowUp = game.add.sprite(120,50, 'arrow');
            arrowDown = game.add.sprite(120,470, 'arrow');

            arrowUp.inputEnabled = true;
            arrowDown.inputEnabled = true;

            arrowDown.anchor.setTo(0.5);
            arrowUp.anchor.setTo(0.5);

            arrowUp.angle = -270;
            arrowDown.angle = -90;

            arrowUp.events.onInputDown.add(moveUp, this);
            arrowUp.events.onInputUp.add(stopMove, this);

            arrowDown.events.onInputDown.add(moveDown, this);
            arrowDown.events.onInputUp.add(stopMove, this);
        }
        
    },
    
    update : function(){
        
        //plays sound on collision
        game.physics.arcade.collide(player1, puck, playPuckSound);
        game.physics.arcade.collide(player2, puck, playPuckSound);
        
        //Check if puck overlaps goal area
        checkGoal();
        
        //creates player controls
        if (player1Up.isDown || movingUp) {
            player1.body.velocity.y = -500;
        } 
        else if (player1Down.isDown || movingDown) {
            player1.body.velocity.y = 500;
        } 
        else if (player2Up.isDown) {
            player2.body.velocity.y = -500;
        } 
        else if (player2Down.isDown) {
            player2.body.velocity.y = 500;
        } 
        //if player isnt pressing button dont you dare move
        else {
            player1.body.velocity.setTo(0);
            player2.body.velocity.setTo(0);
        }
        
        //if puck is reset press space to start it again
        if (startButton.isDown && puck.body.velocity.x === 0) {
            //TODO randomize these funciton parameters
            firePuck();
        }
    }
}


//Helper functions
// Just a simple timer to display on the gameboard
function timerFunc() {
    timer ++;
    timerText.text = timer;
}

//Called to play sound when puck hits a player
function playPuckSound() {
    puckSound.play();
}

function firePuck() {
    puck.body.velocity.setTo(getRandomNum(400,1000), getRandomNum(400,1000));
}

//checks which player to add score and updates score and text
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

//checks if puck overlaps goal area
//calls add point, resets puck position and stops its movement
//also checks if a player has won
function checkGoal() {
    if (game.physics.arcade.overlap(goal1, puck)) {
        addPoint(2);
        puck.body.x = 480;
        puck.body.y = 235;
        puck.body.velocity.setTo(0);        
    }

    if (game.physics.arcade.overlap(goal2, puck)) {
        addPoint(1);
        puck.body.x = 480;
        puck.body.y = 235;
        puck.body.velocity.setTo(0);        
    }
    
    //checks for a winner each time a point is scored
    if (player1Score === playTo){
        winner = "player1";
        game.state.start('gameOver');
    }
    else if (player2Score === playTo) {
        winner = "player2";
        game.state.start('gameOver');
    }
}

function moveUp() {
    movingUp = true;
}

function moveDown() {
    movingDown = true;
}

function stopMove() {
    movingUp = false;
    movingDown = false;
}

function getRandomNum(min, max) {
    var num = Math.floor(Math.random() * (max - min) + min);
    if(num % 2 === 0) {
        return num - (num * 2);
    }
    else {return num;}
    
}












