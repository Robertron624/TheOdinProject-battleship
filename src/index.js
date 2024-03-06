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
  // const cruiser = new Ship('Cruiser', 3)
  // const submarine = new Ship('Submarine', 3)
  // const destroyer = new Ship('Destroyer', 2)

  humanPlayer.placeShip(carrier, 0, 0, true)
  humanPlayer.placeShip(battleship, 1, 1, false)

  computer.placeShip(carrier, 0, 0, true)
  computer.placeShip(battleship, 1, 1, false)

  computer.attack(humanPlayer, 0, 0)
  computer.attack(humanPlayer, 1, 3)

  // const placeShip = (data) => {
  //   const { ship, x, y, isVertical, board } = data

  //   player.placeShip(ship, x, y, isVertical)
  //   domHandler.updateBoard(board)
  // }

  // placeShip({
  //   ship: carrier,
  //   x: 0,
  //   y: 0,
  //   isVertical: true,
  //   board: playerBoard
  // })

  // placeShip({
  //   ship: battleship,
  //   x: 1,
  //   y: 1,
  //   isVertical: false,
  //   board: playerBoard
  // })

  // // place the computer's ships
  // placeShip({
  //   ship: carrier,
  //   x: 0,
  //   y: 0,
  //   isVertical: true,
  //   board: computerBoard
  // })

  // placeShip({
  //   ship: battleship,
  //   x: 1,
  //   y: 1,
  //   isVertical: false,
  //   board: computerBoard
  // })

  // attack({
  //   x: 0,
  //   y: 0,
  //   board: playerBoard
  // })
}

window.onload = main
