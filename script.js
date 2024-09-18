/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Name' = Div that holds player 1's Name
#4 ID 👉 'p2Name' = Div that holds player 2's Name
#5 ID 👉 'p1Health' = Div that holds player 1's health
#6 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
// const game = new  Game
// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1,p2,gameState) => {
  // Update the DOM with the names and the latest health of players
  p1NameDiv.innerText = p1.name
  p2NameDiv.innerText = p2.name
  // Condition IF either player health is <= 0 then set isOver to true and declareWinner
  p1HealthDiv.innerText = p1.health
  p2HealthDiv.innerText = p2.health
if(p1.health<=0 || p2.health <=0)
{
  game.isOver = true
  gameState  = game.isOver
  resultDiv.innerText = game.declareWinner(game.isOver,p1,p2)
  return gameState;
}
}

// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = new Player('Qazi', 100, 7)
// qazi.name 👉 'Qazi'
// qazi.health 👉 100
// qazi.attackDmg 👉 7
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike (player, enemy, attackDmg) {
        let damageAmount=Math.floor(Math.random()*attackDmg)
        enemy.health-=damageAmount;
       updateGame(player,enemy,game.isOver)
   return `${player.name} attacks ${enemy.name} for ${damageAmount}`
  }

  heal (player) {
    let healAmount=Math.floor(Math.random()*5)
    player.health+=healAmount;
    updateGame(p1,p2,game.isOver);
    return `${player.name} heals for ${healAmount}`
  }
}
class Game {
  constructor() {
    this.isOver = false;
  }

  declareWinner(isOver,p1, p2) {
    
    
let message;

if(isOver == true  && p1.health <=0)
{
  message = `${p2.name} WINS!`
}
else if(isOver == true && p2.health <= 0)
{
  message = `${p1.name} WINS!`
}
   
document.getElementById('victory').play()
 
return message
  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1,p2) {
    // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()

  }
  
  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {
    // Reset to make sure player health is back to full before starting

    // Make sure the players take turns untill isOver is TRUE
    while (!this.isOver) {
      //Make sure both players get strike() and heal() once each loop

    }
    // Once isOver is TRUE run the declareWinner() method 
    
  }

}

// ** Create 2 players using the player class **
let player1 = new Player("Nikhil",100,10)
let player2 = new Player("Rahul",100,10)

// ** Save original Player Data into a variable in order to reset **
let p1 = player1;
let p2 = player2;

// ** Create the game object from the Game class **
let game = new Game() 
// ** Intialize the game by calling updateGame() **
updateGame(p1,p2,game.isOver)

// ** Save intial isOver from the game object inside this variable **
let gameState = game.isOver;


// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **


// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {

   if(e.key == "q")
   { 
    document.getElementById('p1attack').play()
    if(p2HealthDiv.innerText >=0 && game.isOver == false)
    {console.log(  player1.strike(player1,p2,player1.attackDmg))

      updateGame(p1,p2,game.isOver) 
      
    }
   }

    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
  

  if(e.key == "a")
    {
      document.getElementById('p1heal').play()
     if(p1HealthDiv.innerText >=0 && game.isOver == false)
     {
      console.log(player1.heal(player1))
      updateGame(p1,p2,game.isOver)
     }
    }
    

});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {
 
  if(e.key == "p")
    {
     if(p1HealthDiv.innerText >=0 && game.isOver == false)
     {console.log(  player2.strike(player2,p1,player2.attackDmg))
       updateGame(p1,p2,game.isOver)
       document.getElementById('p2attack').play()
     }
    } 

    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
 
  if(e.key == "l")
    {
     if(p2HealthDiv.innerText >=0 && game.isOver == false)
     {
      console.log(player2.heal(player2))
      updateGame(p1,p2,game.isOver)
      document.getElementById('p2heal').play()
     }
    }
    // After healing then play heal sound

});

// console.log(p1.strike(p1,p2,10))

