function Move(move) {
    console.log(move.keyCode);

    if (move.keyCode == 39) {//right


        player1Left += 5;
player1.style.left = player1Left + 'px';


    }

    if (move.keyCode == 37) {//left
        player1Left -= 5;
        player1.style.left = player1Left + 'px';
    }
    if (move.keyCode == 40) {// up
        player1Top += 5
        player1.style.top = player1Top + 'px';
    }
    if (move.keyCode == 38) {//down
        player1Top -= 5
        player1.style.top = player1Top + 'px';

    }

}


document.onkeydown = Move;


