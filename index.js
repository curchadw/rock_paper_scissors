const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const winner_loser = document.getElementById('winner_loser')

document.addEventListener('DOMContentLoaded',(event) => {
    event.preventDefault()
    game()
     
   });


   const computerChoices = ['Rock', 'Paper', 'Scissors']


   //Computer's game choice
   const computerChoice = () =>{
        let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)]
        return randomChoice
   }


   
   const rockMove =()=>{
     let rock = 'Rock'
     return game(rock)
   }

   const paperMove =()=>{
     let paper = 'Paper'
     return game(paper)
   }

  const scissorsMove =()=>{
     let scissors = 'Scissors'
     return game(scissors)
  } 

  

  const playerGame = (choice)=>{
     return choice
  }


  rock.addEventListener('click',rockMove)
  paper.addEventListener('click',paperMove)
  scissors.addEventListener('click',scissorsMove)


   const game = (playerChoice)=>{
        let computer = computerChoice()
        let player = playerGame(playerChoice)

        if (computer === 'Rock' && player === 'Scissors'){
          console.log('Loser')
        }else if(computer === 'Scissors' && player === 'Paper'){
          console.log('Loser')
        }else if(computer === 'Scissors' && player === 'Rock'){
          console.log('Winner')
        }
          

   }
   