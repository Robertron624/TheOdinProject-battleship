import './global.scss'
import './styles.scss'
import DomHandler from './DOMHandler.js'
import GameBoard from './models/GameBoard.js'
import Player from './models/Player.js'
import Ship from './models/Ship.js'

const GAMEBOARD_SIZE = 10

function main () {
  const domHandler = new DomHandler()
  const playerBoard = new GameBoard(GAMEBOARD_SIZE, 1)
  const computerBoard = new GameBoard(GAMEBOARD_SIZE, 2)
  const player = new Player('Player', playerBoard)
  const computer = new Player('Computer', computerBoard)

  playerBoard.setPlayer(player)
  computerBoard.setPlayer(computer)

  domHandler.generateBoard(playerBoard)
  domHandler.generateBoard(computerBoard)

  const carrier = new Ship('Carrier', 5)
  const battleship = new Ship('Battleship', 4)
  // const cruiser = new Ship('Cruiser', 3)
  // const submarine = new Ship('Submarine', 3)
  // const destroyer = new Ship('Destroyer', 2)

  player.placeShip(carrier, 0, 0, true)
  domHandler.updateBoard(playerBoard)
  console.info("player's board after placing carrier: ", playerBoard)

  player.placeShip(battleship, 1, 1, false)
  domHandler.updateBoard(playerBoard)
  console.info("player's board after placing battleship: ", playerBoard)
}

window.onload = main
