import Ship from '../../models/Ship'
import { describe, expect, it, beforeEach } from '@jest/globals'

describe('Ship', () => {
  let ship

  beforeEach(() => {
    ship = new Ship('Carrier', 5)
  })

  it('has a name', () => {
    expect(ship.name).toBe('Carrier')
  })

  it('has a length', () => {
    expect(ship.length).toBe(5)
  })

  it('can be hit', () => {
    ship.hit(0, 0)
    expect(ship.hits).toEqual([{ x: 0, y: 0 }])
  })

  it('is not sunk initially', () => {
    expect(ship.isSunk()).toBe(false)
  })

  it('is sunk when all positions are hit', () => {
    for (let i = 0; i < ship.length; i++) {
      ship.hit(i)
    }
    expect(ship.isSunk()).toBe(true)
  })
})
