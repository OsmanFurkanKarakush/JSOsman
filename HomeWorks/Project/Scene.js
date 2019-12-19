let canvas = document.getElementById('gameScreen');
let ct = canvas.getContext('2d');
const gameWidth = 800;
const gameHeight = 600;

// Player
class Player {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight
        this.gameWidth = gameWidth;
        this.width = 30;
        this.height = 30;
        this.maxSpeed = 7;
        this.xspeed = 0;
        this.yspeed = 0

        this.position = {

            x: 30,
            y: gameHeight / 2

        }


    }

    moveLeft() {
        this.xspeed = -this.maxSpeed;
    }
    moveRigth() {
        this.xspeed = this.maxSpeed;
    }
    moveUp() {
        this.yspeed = this.maxSpeed;
    }
    moveDown() {
        this.yspeed = -this.maxSpeed;
    }
    stopx() {
        this.xspeed = 0;
    }

    stopy() {
        this.yspeed = 0;
    }



    draw(ct) {
        ct.beginPath();

        ct.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
        ct.fillStyle = 'red'
        ct.fill()
        // ct.fillRect(this.position.x,this.position.y,this.width,this.height);
        ct.strokeStyle = 'red';

        ct.stroke();
    }

    update(deltatime) {
        if (!deltatime) return;

        this.position.x += this.xspeed;
        if (this.position.x - this.width < 0) this.position.x = this.width
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width
        if (this.position.x + this.width > 400) this.position.x = 400 - this.width
        this.position.y += this.yspeed;
        if (this.position.y - this.height < 0) this.position.y = this.height;
        if (this.position.y + this.height > this.gameHeight) this.position.y = this.gameHeight - this.height;


    }

}

// Player 2
class Player2 {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight
        this.gameWidth = gameWidth;
        this.width = 30;
        this.height = 30;
        this.maxSpeed = 7;
        this.xspeed = 0;
        this.yspeed = 0

        this.position = {

            x: gameWidth - this.width,
            y: gameHeight / 2

        }


    }

    moveLeft() {
        this.xspeed = -this.maxSpeed;
    }
    moveRigth() {
        this.xspeed = this.maxSpeed;
    }
    moveUp() {
        this.yspeed = this.maxSpeed;
    }
    moveDown() {
        this.yspeed = -this.maxSpeed;
    }

    stopx() {
        this.xspeed = 0;
    }

    stopy() {
        this.yspeed = 0;
    }


    draw(ct) {
        ct.beginPath();

        ct.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
        ct.fillStyle = 'blue'
        ct.fill()
        // ct.fillRect(this.position.x,this.position.y,this.width,this.height);
        ct.strokeStyle = 'blue';

        ct.stroke();
    }

    update(deltatime) {
        if (!deltatime) return;

        this.position.x += this.xspeed;
        if (this.position.x - this.width < 0) this.position.x = this.width
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width
        if (this.position.x - this.width < 400) this.position.x = 400 + this.width
        this.position.y += this.yspeed;
        if (this.position.y - this.height < 0) this.position.y = this.height;
        if (this.position.y + this.height > this.gameHeight) this.position.y = this.gameHeight - this.height;



    }

}


class KeyInput {
    constructor(player) {
        document.addEventListener("keydown", event => {

            switch (event.keyCode) {
                case 37: // left 
                    player.moveLeft();
                    break;
                case 39: // rigth
                    player.moveRigth()
                    break;
                case 38: // down
                    player.moveDown()
                    break;

                case 40: // up
                    player.moveUp()
                    break;
            }



        });

        document.addEventListener("keyup", event => {

            switch (event.keyCode) {
                case 37: // left
                    if (player.xspeed < 0)
                        player.stopx();
                    break;
                case 39: // rigth
                    if (player.xspeed > 0)
                        player.stopx()
                    break;
                case 38: // down
                    if (player.yspeed < 0)
                        player.stopy()
                    break;

                case 40: // up
                    if (player.yspeed > 0)
                        player.stopy()
                    break;
            }



        })

    }

}

class KeyInput2 {
    constructor(player2) {
        document.addEventListener("keydown", event => {

            switch (event.keyCode) {
                case 65: // left 
                    player2.moveLeft();
                    break;
                case 68: // rigth
                    player2.moveRigth()
                    break;
                case 87: // down
                    player2.moveDown()
                    break;

                case 83: // up
                    player2.moveUp()
                    break;
            }



        })

        document.addEventListener("keyup", event => {

            switch (event.keyCode) {
                case 65: // left
                    if (player2.xspeed < 0)
                        player2.stopx();
                    break;
                case 68: // rigth
                    if (player2.xspeed > 0)
                        player2.stopx()
                    break;
                case 87: // down
                    if (player2.yspeed < 0)
                        player2.stopy()
                    break;

                case 83: // up
                    if (player2.yspeed > 0)
                        player2.stopy()
                    break;
            }



        })

    }

}

var count1 = 0;
var count2 = 0;
class Ball {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight
        this.gameWidth = gameWidth;
        this.width = 15;
        this.height = 15;
        this.maxSpeed = 7;
        this.xspeed = 0;
        this.yspeed = 0
        this.friction = -0.7
        //   this.randomNumX = Math.random() * 800;
        // this.randomNumY = Math.random() * 600;
        this.position = {

            x: gameWidth / 2,
            y: gameHeight / 2

        }


    }
    draw(ct) {
        ct.beginPath();

        ct.arc(this.position.x, this.position.y, 15, 0, 2 * Math.PI);
        ct.fillStyle = 'brown'
        ct.fill()
        // ct.fillRect(this.position.x,this.position.y,this.width,this.height);
        ct.strokeStyle = 'brown';

        ct.stroke();
    }


    rotate(x, y, sin, cos, reverse) {
        return {
            x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
            y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
        };
    }


    checkCollision(player) {
        let a = player.width+this.width ;
        let x = Math.abs(player.position.x - this.position.x);
        let y = Math.abs(player.position.y - this.position.y);

        if (a > Math.sqrt((x * x) + (y * y))) {
            console.log("Collision");
            var angle = Math.atan2(y, x),
                sin = Math.sin(angle),
                cos = Math.cos(angle),
                pos0 = {
                    x: 0,
                    y: 0
                },
                pos1 = this.rotate(x, y, sin, cos, true),
                vel0 = this.rotate(player.xspeed, player.yspeed, sin, cos, true),
                vel1 = this.rotate(this.xspeed, this.yspeed, sin, cos, true),
                XvelocityTotal = vel0.x - vel1.x;
            vel0.x = ((player.maxSpeed - this.maxSpeed) * vel0.x + 2 * this.maxSpeed * vel1.x) / (player.maxSpeed + this.maxSpeed);
            vel1.x = XvelocityTotal + vel0.x;
            var absV = Math.abs(vel0.x) + Math.abs(vel1.x),
            overlap = (player.width-this.width) - (Math.abs(pos0.x - pos1.x));
            pos0.x += vel0.x / absV * overlap;
            pos1.x += vel1.x / absV * overlap;
            var pos0F = this.rotate(pos0.x, pos0.y, sin, cos, false),
            pos1F = this.rotate(pos1.x, pos1.y, sin, cos, false);
            this.x = player.x + pos1F.x;
            this.y = player.y + pos1F.y;
            player.x = player.x + pos0F.x;
            player.y = player.y + pos0F.y;

            var vel0F = this.rotate(vel0.x, vel0.y, sin, cos, false),
                vel1F = this.rotate(vel1.x, vel1.y, sin, cos, false);

            player.xspeed = vel0F.x;
            player.yspeed = vel0F.y;

            this.xspeed = vel1F.x;
            this.yspeed = vel1F.y;


        }

    }

    update(deltatime, player,player2) {

        if (!deltatime) return;
        this.position.x += this.xspeed;
        this.position.y += this.yspeed;

        if (this.position.x - this.width < 0) {
            this.position.x = this.width;
            this.xspeed = -this.xspeed;
        }

        if (this.position.x - this.width <= 0 && this.position.y > 175 && this.position.y < 425) {
            count1++;
            console.log("count1 = " + count1);
            this.position.x= gameWidth/2;
            this.position.y=gameHeight/2;
            this.xspeed=0;
            this.yspeed=0;
            player2.position.x = gameWidth - player2.width;
            player2.position.y =gameHeight/2;
            player2.xspeed=0;
            player2.yspeed=0;

            player.position.x = 30;
            player.position.y =gameHeight/2;
            player.xspeed=0;
            player.yspeed=0;

        }



        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
            this.xspeed = -this.xspeed;
        }

        if (this.position.x + this.width >= this.gameWidth && this.position.y > 175 && this.position.y < 425) {
            count2++;
            console.log("count2 = " + count2)
            this.position.x= gameWidth/2;
            this.position.y=gameHeight/2;
            this.xspeed=0;
            this.yspeed=0;
            player2.position.x = gameWidth - player2.width;
            player2.position.y =gameHeight/2;
            player2.xspeed=0;
            player2.yspeed=0;

            player.position.x = 30;
            player.position.y =gameHeight/2;
            player.xspeed=0;
            player.yspeed=0;

        }

        if (this.position.y - this.height < 0) {
            this.position.y = this.height;
            this.yspeed = -this.yspeed;
        }
        if (this.position.y + this.height > this.gameHeight) {
            this.position.y = this.gameHeight - this.height;
            this.yspeed = -this.yspeed;

        }
        if (this.y > (gameHeight - this.width) || this.y < this.width) {

            // Stop puck from getting stuck
            if (this.position.y > (gameHeight - this.width)) {
                this.position.y = gameHeight - this.width;
            } else {
                this.position.y = this.width;
            }

            // Reverse direction
            this.yspeed = -this.yspeed;
        }


        // this.position.x = this.randomNumX
        // this.position.y = this.randomNumY
        this.checkCollision(player);
        this.checkCollision(player2);
    }




}


function drawLine(ct) {
    ct.beginPath();
    ct.moveTo(400, 0);
    ct.lineTo(400, 600);
    ct.strokeStyle = 'blue';
    ct.stroke();

}
function drawCircle(ct) {
    ct.beginPath();

    ct.arc(400, 300, 50, 0, 2 * Math.PI);

    // ct.fillRect(this.position.x,this.position.y,this.width,this.height);
    ct.strokeStyle = 'purple';

    ct.stroke();
}

function drawHalfCircle(ct, x, y, start, end) {
    ct.beginPath();
    ct.arc(x, y, 125, start * Math.PI, end * Math.PI);
    ct.strokeStyle = "green"
    ct.stroke();
}

function drawScoreBoard(ct){
    ct.font = "16px Arial";
    ct.fillStyle = "#0095DD";
    ct.fillText("Score: "+count2, 8, 20);
    ct.fillText("Score: "+count1, 730, 20);
}

function ballMove(ball) {

    ball.move();


}

let player = new Player(gameWidth, gameHeight)
let player2 = new Player2(gameWidth, gameHeight)
let ball = new Ball(gameWidth, gameHeight)
new KeyInput(player)
new KeyInput2(player2)
//ballMove(ball);

function drawStart(ct) {
    drawLine(ct);
    drawCircle(ct);
    drawHalfCircle(ct, 0, 300, 0.5, 1.5);
    drawHalfCircle(ct, 750, 300, 1.5, 0.5);
    drawScoreBoard(ct);
    player.draw(ct);
    player2.draw(ct);
    ball.draw(ct);
}

drawStart(ct);



let lastTime = 0

function gameLoop(passedTime) {
    let deltatime = passedTime - lastTime;
    lastTime = passedTime;
    ct.clearRect(0, 0, 800, 600);
    player.update(deltatime);
    player2.update(deltatime);
    ball.update(deltatime, player,player2);
    ball.update(deltatime,player,player2);

    drawLine(ct);
    drawCircle(ct);
    drawHalfCircle(ct, 0, 300, 1.5, 0.5);
    drawHalfCircle(ct, 800, 300, 0.5, 1.5);
    drawScoreBoard(ct);
    player.draw(ct);
    player2.draw(ct);
    ball.draw(ct);
    requestAnimationFrame(gameLoop);

}
gameLoop();
var countCheck1=0;
var countCheck2=0;





