import './global.scss'
import './styles.scss'
import DomHandler from './DOMHandler.js'
import GameBoard from './models/GameBoard.js'
import Player from './models/Player.js'
import Ship from './models/Ship.js'

const GAMEBOARD_SIZE = 10

function main () {
  // initial objects

  const domHandler = new DomHandler()
  const playerBoard = new GameBoard(GAMEBOARD_SIZE, 1)
  const computerBoard = new GameBoard(GAMEBOARD_SIZE, 2)
  const humanPlayer = new Player('Player', playerBoard)
  const computer = new Player('Computer', computerBoard)

  playerBoard.setPlayer(humanPlayer)
  computerBoard.setPlayer(computer)

  // handling the game logic and the DOM

  const placeShip = (ship, x, y, isVertical, gameBoard) => {
    gameBoard.placeShip(ship, x, y, isVertical)
    domHandler.updateBoard(gameBoard)
  }

  const attack = (attacker, opponent, x, y) => {
    const result = attacker.attack(opponent, x, y)
    domHandler.updateBoard(opponent.gameBoard)
    return result
  }

  domHandler.generateBoard(playerBoard)
  domHandler.generateBoard(computerBoard)

  const carrier = new Ship('Carrier', 5)
  const battleship = new Ship('Battleship', 4)

  placeShip(carrier, 0, 0, true, playerBoard)
  placeShip(battleship, 1, 1, false, playerBoard)

  placeShip(carrier, 0, 0, true, computerBoard)
  placeShip(battleship, 1, 1, false, computerBoard)

  // computer attack humanPlayer

  attack(computer, humanPlayer, 0, 0)
  attack(computer, humanPlayer, 1, 2)

  // humanPlayer attack computer

  attack(humanPlayer, computer, 0, 0)
  attack(humanPlayer, computer, 3, 0)
}

window.onload = main
