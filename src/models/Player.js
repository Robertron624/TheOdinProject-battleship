import GameBoard from './GameBoard.js'
import Ship from './Ship.js'

class Player {
  constructor (name, gameBoard) {
    this.name = name
    this.gameBoard = gameBoard || new GameBoard()
  }

  attack (opponent, x, y) {
    return opponent.gameBoard.receiveAttack(x, y)
  }

  placeShip (ship, x, y, isVertical) {
    this.gameBoard.placeShip(ship, x, y, isVertical)
  }

  randomizeShips () {
    this.gameBoard.randomizeShips()
  }

  isValidPlacement (length, x, y, isVertical) {
    return this.gameBoard.isValidPlacement(length, x, y, isVertical)
  }

  allSunk () {
    return this.gameBoard.allSunk()
  }

  setGameBoard (size) {
    this.gameBoard = new GameBoard(size)
  }

  setRandomGameBoard () {
    this.gameBoard = new GameBoard()
    this.randomizeShips()
  }

  setCustomGameBoard (ships) {
    this.gameBoard = new GameBoard()
    ships.forEach((ship) => {
      this.placeShip(new Ship(ship.length), ship.x, ship.y, ship.isVertical)
    })
  }

  setGameBoardFromJSON (json) {
    this.gameBoard = new GameBoard()
    this.gameBoard.board = json.board
    this.gameBoard.ships = json.ships.map((ship) => {
      const newShip = new Ship(ship.name, ship.length)
      newShip.hits = ship.hits
      return newShip
    })
  }

  getGameBoardJSON () {
    return {
      board: this.gameBoard.board,
      ships: this.gameBoard.ships.map((ship) => {
        return {
          name: ship.name,
          length: ship.length,
          hits: ship.hits
        }
      })
    }
  }

  getGameBoard () {
    return this.gameBoard
  }
}

export default Player
