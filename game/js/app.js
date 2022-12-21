// Global Variables Here

//score values for player 1/2 we'll have to update these in our winner function
let firstPlayerScore = 0
let secondPlayerScore = 0
let score1Update = document.querySelector(`.score1`)
let score2Update = document.querySelector(`.score2`)

//selects all grid boxes - this is how we'll alter the text within our boxes and set them up to fill with x/o
const boxes = document.querySelectorAll(`.gridOption`)

//selects our restart button, to use to restart the game in a later function
const restartButton = document.querySelector(`.restartButton`)

//selects our turnprompt h2 we're going to fill this with the text of who's turn it is in a later function
const turn = document.querySelector(`.turnPrompt`)

//will be used later to compare our win conditions test
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
//updates per turn and checks if winConditions are true
let placeholder = [``, ``, ``, ``, ``, ``, ``, ``, ``]
//tracks our current player
let currentPlayer = `O`
let winner = false
click = 0

//initiates turn prompt
if (click == 0) {
  turn.innerHTML = "O Player's Turn"
}

////////////////////////////////
// Functions For Game Logic Here

//displays player turn and checks for winner
function game() {
  let i = this.getAttribute(`index`)
  // if click is even, 0's turn else its X
  // add O or X to placeholder array per turn
  if (click % 2 == 0) {
    this.innerHTML = `O`
    this.style.color = '#4ECDC4'
    placeholder[i] = `O`
    this.removeEventListener(`click`, game)
    turn.innerHTML = "X Player's Turn"
    checkWin()
  } else {
    this.innerHTML = `X`
    this.style.color = '#FF6B6B'
    placeholder[i] = `X`
    this.removeEventListener(`click`, game)
    turn.innerHTML = "O Player's Turn"
    checkWin()
  }
  click += 1
  //concludes draw if there is no winner
  if (click == 9 && winner == false) {
    turn.innerHTML = 'Draw!'
  }

  console.log(placeholder)
}

//to check for a winner per turn
const checkWin = () => {
  winner = false
  //iterates through solutions array to see if there is a match in placeholder
  for (let i = 0; i < winConditions.length; i++) {
    const testCondition = winConditions[i]
    const boxOne = placeholder[testCondition[0]]
    const boxTwo = placeholder[testCondition[1]]
    const boxThree = placeholder[testCondition[2]]

    if (boxOne == `` || boxTwo == `` || boxThree == ``) {
      continue
    }
    //if a match from the solutions array is found, declare winner
    else if (boxOne == boxTwo && boxTwo == boxThree) {
      winner = true

      turn.innerHTML = boxOne + ' is the winner!'

      //add to player's score and display
      if (boxOne == 'O') {
        firstPlayerScore += 1
        score1Update.innerHTML = firstPlayerScore + ' '
      } else if (boxOne == 'X') {
        secondPlayerScore += 1
        score2Update.innerHTML = secondPlayerScore + ' '
      }

      //makes sure the game ends by removing event listener
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener(`click`, game)
      }
    }
  }
}

////////////////////////////////
// Event Listeners Here

//add click for each grid box that calls game
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener(`click`, game)
}

restartButton.addEventListener('click', replay)

//empties and resets game values and reinitiates event listeners
function replay() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
  }
  for (let i = 0; i < placeholder.length; i++) {
    placeholder[i] = ''
  }
  winner = false
  click = 0
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener(`click`, game)
  }
  turn.innerHTML = "O Player's Turn"
}
////////////////////////////////
