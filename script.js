
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')

const updateGame = (p1,p2,gameState) => {
  
  p1NameDiv.innerText = p1.name
  p2NameDiv.innerText = p2.name
  
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


class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike (player, enemy, attackDmg) {
        let damageAmount=Math.floor(Math.random()*attackDmg)
        enemy.health-=damageAmount;
       updateGame(p1,p2,game.isOver)
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

  reset(p1,p2) {
   p1.health = 100
   p2.health = 100
   this.isOver =false
   resultDiv.innerText = ''
   updateGame(p1,p2,this.isOver);

  }

  play(p1, p2) {
    
     this.reset(p1,p2)

    while (!this.isOver) {
     p1.strike(p1,p2,p1.attackDmg)
     p2.heal(p2)
     p2.strike(p2,p1,p2.attackDmg)
     p1.heal(p1)
    }
    
    return this.declareWinner(this.isOver,p1, p2);  

  }

}

let player1 = new Player("Nikhil",100,10)
let player2 = new Player("Rahul",100,10)


let p1 = player1;
let p2 = player2;


let game = new Game() 

updateGame(p1,p2,game.isOver)


let gameState = game.isOver;

playButton.onclick=()=>{
  game.play(p1,p2)
}

document.addEventListener('keydown', function(e) {

   if(e.key == "q")
   { 
    document.getElementById('p1attack').play()
    if(p2HealthDiv.innerText >=0 && game.isOver == false)
    {console.log(  player1.strike(player1,p2,player1.attackDmg))

      updateGame(p1,p2,game.isOver) 
      
    }
   }

    

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


document.addEventListener('keydown', function(e) {
 
  if(e.key == "p")
    { 
     document.getElementById('p2attack').play()
     if(p1HealthDiv.innerText >=0 && game.isOver == false)
     {console.log(  player2.strike(player2,p1,player2.attackDmg))
       updateGame(p1,p2,game.isOver)
     }
    } 


});

document.addEventListener('keydown', function(e) {
 
  if(e.key == "l")
    {
     document.getElementById('p2heal').play()
     if(p2HealthDiv.innerText >=0 && game.isOver == false)
     {
      console.log(player2.heal(player2))
      updateGame(p1,p2,game.isOver)
      
     }
    }
  
});



