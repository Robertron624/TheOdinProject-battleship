class GameBoard {
  constructor (size = 10, id) {
    this.id = id
    this.size = size
    this.board = Array(this.size).fill(null).map(() => Array(this.size).fill(null))
    this.ships = []
    this.player = null
    this.misses = []
  }

  setPlayer (player) {
    this.player = player
  }

  getPlayer () {
    return this.player
  }

  isShipHit (x, y) {
    return this.board[x][y] !== null && this.board[x][y].isHit(x, y)
  }

  receiveAttack (x, y) {
    if (this.board[x][y]) {
      this.board[x][y].hit(x, y)
      return true
    }
    this.misses.push({ x, y })
    return false
  }

  allSunk () {
    return this.ships.every((ship) => ship.isSunk())
  }

  isValidPlacement (length, x, y, isVertical) {
    if (isVertical) {
      if (x + length > this.size) return false
      for (let i = 0; i < length; i++) {
        if (this.board[x + i][y]) return false
      }
    } else {
      if (y + length > this.size) return false
      for (let i = 0; i < length; i++) {
        if (this.board[x][y + i]) return false
      }
    }
    return true
  }

  placeShip (ship, x, y, isVertical) {
    if (this.isValidPlacement(ship.length, x, y, isVertical)) {
      ship.isVertical = isVertical
      ship.x = x
      ship.y = y
      if (isVertical) {
        for (let i = 0; i < ship.length; i++) {
          this.board[x + i][y] = ship
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          this.board[x][y + i] = ship
        }
      }
      this.ships.push(ship)
    } else {
      console.log('Invalid placement', {
        ship,
        x,
        y,
        isVertical

      })
    }
  }
}

export default GameBoard
