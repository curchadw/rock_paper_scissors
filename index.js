const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const winner_loser = document.getElementById('winner_loser')

document.addEventListener('DOMContentLoaded',(event) => {
    event.preventDefault()

    let rockChoice = rock.addEventListener('click',rockMove)
    let paperChoice = paper.addEventListener('click',paperMove)
    let scissorsChoice = scissors.addEventListener('click',scissorsMove)

    let playerChoice = rockChoice || paperChoice || scissorsChoice
    game(playerChoice)
     
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


//   let rockChoice = rock.addEventListener('click',rockMove)
//   let paperChoice = paper.addEventListener('click',paperMove)
//   let scissorsChoice = scissors.addEventListener('click',scissorsMove)

//   let playerChoice = rockChoice || paperChoice || scissorsChoice

   const game = (playerChoice)=>{
        computerChoice()
        
        if(playerChoice == 'Rock'){
             console.log('Test')
        }else if(playerChoice == 'Paper'){
             console.log('Test 2')
        }else{
             console.log('Test 3')
        }
          

   }
   