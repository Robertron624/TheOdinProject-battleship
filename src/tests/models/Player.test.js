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
    const opponentBoard = new GameBoard()
    const opponent = new Player('Player 2', opponentBoard)
    const result = player.attack(opponent, 0, 0)
    expect(result).toBe(false)
  })

  test('it can place a ship', () => {
    const ship = new Ship('Carrier', 5, true, 0, 0)
    player.placeShip(ship, 0, 0, true)
    expect(player.gameBoard.ships).toEqual([ship])
  })
})
