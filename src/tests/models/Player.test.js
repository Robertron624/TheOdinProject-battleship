import Player from '../../models/Player'
import GameBoard from '../../models/GameBoard'
import Ship from '../../models/Ship'

import { describe, expect, test, beforeEach } from '@jest/globals'

describe('Player', () => {
  let player
  beforeEach(() => {
    const gameBoard = new GameBoard()
    player = new Player('Player 1', gameBoard)
  })

  test('it has a name', () => {
    expect(player.name).toBe('Player 1')
  })

  test('it has a game board', () => {
    expect(player.gameBoard).toBeInstanceOf(GameBoard)
  })

  test('it can attack', () => {
    const opponent = new Player()
    const ship = new Ship('Carrier', 5)
    opponent.gameBoard.placeShip(ship, 0, 0, true)
    player.attack(opponent, 0, 0)
    expect(ship.hits[0]).toBe(true)
  })

  test('it can place a ship', () => {
    const ship = new Ship('Carrier', 5)
    player.placeShip(ship, 0, 0, true)
    expect(player.gameBoard.ships).toEqual([ship])
  })
})
