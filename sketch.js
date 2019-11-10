let ballX = 0;
let ballY = 0;
let ballW = 100;

let backX = false;
let backY = false;

//S'éxécuter une fois
function setup() {
    createCanvas(windowWidth, windowHeight);  
}

//S'éxécuter plusieurs fois par seconde
function draw() {
    background(220);

    fill(255, 0, 0);
    noStroke();
    ellipse(ballX, ballY, ballW);

    if (ballY >= height - ballW / 2) {
        backY = true;
    } else if (ballY <= ballW / 2) {
        backY = false;
    }

    if (ballX >= width - ballW / 2) {
        backX = true;
    } else if (ballX <= ballW / 2) {
        backX = false;
    }

    if (backX) {
        ballX -= 3;
    } else {
        ballX += 3;
    }

    if (backY) {
        ballY -= 3;
    } else {
        ballY += 3;
    }
}
