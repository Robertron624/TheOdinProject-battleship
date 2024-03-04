class Ship {
  constructor (name, length) {
    this.name = name
    this.length = length
    this.hits = []
  }

  hit (position) {
    this.hits[position] = true
  }

  isSunk () {
    return this.hits.length === this.length
  }
}

export default Ship
