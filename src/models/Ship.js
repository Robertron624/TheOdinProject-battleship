class Ship {
  constructor (name, length, isVertical = false, x = null, y = null) {
    this.name = name
    this.length = length
    this.hits = []
    this.isVertical = isVertical
    this.x = x
    this.y = y
  }

  hit (x, y) {
    this.hits.push({
      x,
      y
    })
  }

  isSunk () {
    return this.hits.length === this.length
  }

  isHit (x, y) {
    return this.hits.some((hit) => hit.x === x && hit.y === y)
  }

  isCellHit (x, y) {
    return this.hits.some((hit) => hit.x === x && hit.y === y)
  }

  isVertical () {
    return this.isVertical
  }

  isHorizontal () {
    return !this.isVertical
  }
}

export default Ship
