var board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var turn = "X";
var count = 0;

function addSymbol(id) {
  if (board[id] != "X" && board[id] != "O") {
    board[id] = turn;
    $("#" + id).text(turn);
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    count += 1;
  } else {
    alert("This space has already been marked.");
  }
}

function checkDiagonal() {
  if (board[0] === board[4] && board[4] === board[8]) {
    return true;
  }
  if (board[2] === board[4] && board[4] === board[6]) {
    return true;
  }
  return false;
}

function checkAcross() {
  if (board[0] === board[1] && board[1] === board[2]) {
    return true;
  }
  if (board[3] === board[4] && board[4] === board[5]) {
    return true;
  }
  if (board[6] === board[7] && board[7] === board[8]) {
    return true;
  }
  return false;
}

function checkDown() {
  if (board[0] === board[3] && board[3] === board[6]) {
    return true;
  }
  if (board[1] === board[4] && board[4] === board[7]) {
    return true;
  }
  if (board[2] === board[5] && board[5] === board[8]) {
    return true;
  }
  return false;
}

function checkWinner() {
  if(checkAcross() || checkDown() || checkDiagonal()) {
    console.log("should have won");
    winner = "";
    if(turn === "X") {
      winner = "Player 2";
    } else {
      winner = "Player 1";
    }
    $(".title").text(winner + " won the game!");
  } else if (count === 9) {
    $(".title").text("Tie Game!");
  }
}

$(".btn").click(function() {
  addSymbol(this.id);
  checkWinner();
});
