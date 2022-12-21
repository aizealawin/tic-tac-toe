// const i = this.getAttribute(`index`)
if ((this.innerHTML = ` ` && currentPlayer == `X`)) {
  this.innerHTML = currentPlayer
  placeholder[i] = currentPlayer
  currentPlayer = `O`
  console.log()
} else if ((this.innerHTML = ` ` && currentPlayer == `O`)) {
  this.innerHTML = currentPlayer
  placeholder[i] = currentPlayer
  currentPlayer = `X`
} else {
  return
}

let click = 0

playGame = () => {
  if (click % 2 === 0) {
    this.innerHTML = `o`
  } else {
    this.innerHTML = `X`
  }
}

for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener(`click`, playGame())
}

checkWinner = () => {
  for (let i = 0; i < winConditions.length; i++) {
    const winStatus = winConditions[i]
    const statusPosOne = placeholder[winStatus[0]]
    const statusPosTwo = placeholder[winStatus[1]]
    const statusPosThree = placeholder[winStatus[2]]

    if (statusPosOne == statusPosTwo && statusPosTwo == statusPosThree)
      roundWon = true
  }
}
