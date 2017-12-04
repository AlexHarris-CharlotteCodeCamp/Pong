
// Need to make paddle

// need to make collision logic for top, sides, and paddle

// Need a game over 

// Need to increment movement

// Variables
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var canvasWidth = 360;
var canvasHeight = 360;
var ballRadius = 10;
var ballX = canvasWidth / 2;
var ballY = canvasHeight - 30;
var dx = 2;
var dy = -2;
var paddleY;
var paddleWidth = 75;
var paddleHeight = 20;
var center = canvasWidth / 2;
var paddleX = (center - (paddleWidth / 2));
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)



// functions 

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, (canvasHeight - 30), paddleWidth, paddleHeight)
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
}

// Left Arrow: 37   Right Arrow: 39

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if(e.keyCode == 37) {
        leftPressed = false;
    }
}




// Game Loop
setInterval(function(){ 
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);   
    document.addEventListener("keydown", keyDownHandler, false)
    document.addEventListener("keyup", keyUpHandler, false) 
    drawBall();
    drawPaddle();
    // Collision Logic
    if(ballX >= (canvasWidth - ballRadius) || ballX <= 0) {
        dx = -dx;
    }

    if(ballY <= (0 + ballRadius)) {
        dy = -dy;
    }

    // Paddle Movement Logic
    if(rightPressed == true) {
        paddleX += 5;
    } 
    if(leftPressed == true) {
        paddleX -= 5;
    }



    ballX += dx;
    ballY += dy;    
}, 10);