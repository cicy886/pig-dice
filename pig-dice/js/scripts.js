// Business Logic

let rollDice = function () {
  return Math.floor(Math.random()*6);
}
const player1 = "";
const player2 = ""; 


function Player(turn) {
  this.roll = 0;
  // this.tempScore = 0; 
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rolledOne = function () {
  if (this.roll === 1) {
    //this.tempScore = 0;
    alert("HA your rolled a 1, your turn is over.") 
  } else {
    this.totalScore += this.roll;
  }
}
Player.prototype.hold = function () {
  
  this.totalscore += this.roll; //+= this.tempscore;
 // this.tempscore = 0.

  alert(this.playerName + "your turn is over, pass the mouse!");
}
Player.prototype.changeTurns = function () {
  if (this.roll === 1) {
  this.turn = false;
  } else {
  this.turn = true;
  }
}

Player.prototype.checkWinner = function () {
  if (this.totalScore >= 100) {
    
    alert(this.playerName + "You are the winner!")
  }
}

//User logic

$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".newGame").show();
    $(".start-menu").hide();

    const player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    const player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);
    
    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });

  $("button#player1-roll").click(function(event) {
    event.preventDefault();
    player1.roll = rollDice();
    $("#P1turn-total").text(player1.roll);
    Play.rolledOne();
    $("#p1turn-total").text(player1.totalScore)
    //$("#player1Roll").text(tempScore)
  });

  $("button#player2-roll").click(function(event) {
    event.preventDefault();
    player1.roll = rollDice();
    $("#P2turn-total").text(player2.roll);
    Play.rolledOne();
    $("#p2turn-total").text(player2.totalScore)

  });
});
