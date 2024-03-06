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
  const humanPlayer = new Player('Player', playerBoard, domHandler)
  const computer = new Player('Computer', computerBoard, domHandler)

  playerBoard.setPlayer(humanPlayer)
  computerBoard.setPlayer(computer)

  humanPlayer.generateBoard()
  computer.generateBoard()

  const carrier = new Ship('Carrier', 5)
  const battleship = new Ship('Battleship', 4)

  humanPlayer.placeShip(carrier, 0, 0, true)
  humanPlayer.placeShip(battleship, 1, 1, false)

  computer.placeShip(carrier, 0, 0, true)
  computer.placeShip(battleship, 1, 1, false)

  computer.attack(humanPlayer, 0, 0)
  computer.attack(humanPlayer, 1, 2)

  humanPlayer.attack(computer, 0, 0)
  humanPlayer.attack(computer, 3, 0)
}

window.onload = main
