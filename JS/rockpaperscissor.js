let img1 = document.getElementById("player_1");
let img2 = document.getElementById("player_2");

let score_1 = document.querySelector("#score-1");
let score_2 = document.querySelector("#score-2");

const btn_player = document.getElementById("btn-player");
const start = document.getElementById("btn-start");
const reset = document.getElementById("btn-reset");

btn_player.disabled = reset.disabled = true;

let score1 = 0;
let score2 = 0;

let GamePlay = function(player1, player2) {
    if (player1 === player2) {
        console.log("Tie");
    }
    else if ((player1 == 1 && player2 == 3) || (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2)) {
        console.log("player 1 win");
        if (score1 < 10) {
            score1++;
        }

        score_1.textContent = score1;
    }
    else {
        console.log("player 2 win");
        if (score2 < 10) {
            score2++;
        }

        score_2.textContent = score2;
    }

    Winner(score1, score2);
}

function Winner(playerScores1, playerScores2) {
    if (playerScores1 == 10) {
        alert("Player 1 wins");
        btn_player.disabled = true;
    }
    else if (playerScores2 == 10) {
        alert("Player 2 wins");
        btn_player.disabled = true;
    }
}

function Game() {
    let random1 = Math.floor(Math.random() * 3) + 1;
    let random2 = Math.floor(Math.random() * 3) + 1;
    
    img1.src = `./Images/p-${random1}.png`;
    img2.src = `./Images/p-${random2}.png`;

    GamePlay(random1, random2);
}

function StartGame() {
    btn_player.disabled = false;
    start.disabled = true;
    reset.disabled = false;
}

function ResetGame() {
    reset.disabled = true;
    btn_player.disabled = true;
    start.disabled = false;
    score1 = 0;
    score_1.textContent = score1;
    score2 = 0;
    score_2.textContent = score2;

    img1.src = "";
    img2.src = "";
}

function SetLocalStorage() {
    localStorage.setItem("game", )
}

start.addEventListener("click", StartGame);
reset.addEventListener("click", ResetGame);
btn_player.addEventListener("click", Game);



    // else if (player1 == 1) { // 1
    //     if (player2 == 2) { // 2
    //         console.log("player 2 win");
    //         score2++;
    //         score_2.textContent = score2;
    //     }
    //     else {
    //         console.log("player 1 win");
    //         score1++;
    //         score_1.textContent = score1;
    //     }
    // }

    // else if (player2 == 2) { // 2
    //     if (player1 == 3) { // 1
    //         console.log("player 1 win");
    //         score1++;
    //         score_1.textContent = score1;
    //     }
    //     else {
    //         console.log("player 2 win");
    //         score2++;
    //         score_2.textContent = score2;
    //     }
    // }

    // else if (player1 == 3) { // 1
    //     if (player2 == 1) { // 2
    //         console.log("player 2 win");
    //         score2++;
    //         score_2.textContent = score2;
    //     }
    //     else {
    //         console.log("player 1 win");
    //         score1++;
    //         score_1.textContent = score1;
    //     }
    // }
    
    // else if (player1 == 2) { // 1
    //     if (player2 == 1) { // 2
    //         console.log("player 1 win");
    //         score1++;
    //         score_1.textContent = score1;
    //     }
    //     else {
    //         console.log("player 2 win");
    //         score2++;
    //         score_2.textContent = score2;
    //     }
    // }