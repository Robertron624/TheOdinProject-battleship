import './global.scss'
import './styles.scss'
import DomHandler from './models/DomHandler.js'
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
  const computerPlayer = new Player('Computer', computerBoard)

  playerBoard.setPlayer(humanPlayer)
  computerBoard.setPlayer(computerPlayer)

  // handling the game logic and the DOM

  const placeShip = (ship, x, y, isVertical, player) => {
    const result = player.placeShip(ship, x, y, isVertical)
    domHandler.updateBoard(player.gameBoard)
    return result
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

  placeShip(carrier, 0, 0, true, humanPlayer)
  placeShip(battleship, 1, 1, false, humanPlayer)

  placeShip(carrier, 0, 0, true, computerPlayer)
  placeShip(battleship, 1, 1, false, computerPlayer)

  // computer attack humanPlayer

  attack(computerPlayer, humanPlayer, 0, 0)
  attack(computerPlayer, humanPlayer, 1, 2)

  // humanPlayer attack computer

  attack(humanPlayer, computerPlayer, 0, 0)
  attack(humanPlayer, computerPlayer, 3, 0)
}

window.onload = main
