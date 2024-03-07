import GameBoard from './GameBoard.js'
import Ship from './Ship.js'

class Player {
  constructor (name, gameBoard) {
    this.name = name
    this.gameBoard = gameBoard || new GameBoard()
  }

  attack (opponent, x, y) {
    const result = opponent.gameBoard.receiveAttack(x, y)
    return result
  }

  attackOwnBoard (x, y) {
    const result = this.gameBoard.receiveAttack(x, y)
    return result
  }

  makeRandomAttack (opponent) {
    let x = Math.floor(Math.random() * this.gameBoard.size)
    let y = Math.floor(Math.random() * this.gameBoard.size)
    while (opponent.gameBoard.isShipHit(x, y) || this.gameBoard.misses.some((miss) => miss.x === x && miss.y === y)) {
      x = Math.floor(Math.random() * this.gameBoard.size)
      y = Math.floor(Math.random() * this.gameBoard.size)
    }
    return this.attack(opponent, x, y)
  }

  placeShip (ship, x, y, isVertical) {
    const newShip = new Ship(ship.name, ship.length)
    this.gameBoard.placeShip(newShip, x, y, isVertical)
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

  getGameBoard () {
    return this.gameBoard
  }
}

export default Player
