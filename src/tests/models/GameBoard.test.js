import GameBoard from '../../models/GameBoard'
import Ship from '../../models/Ship'

import { describe, expect, test, beforeEach } from '@jest/globals'

describe('GameBoard', () => {
  let gameBoard
  beforeEach(() => {
    gameBoard = new GameBoard(10)
  })

  test('it has a size', () => {
    expect(gameBoard.size).toBe(10)
  })

  test('it has a board', () => {
    expect(gameBoard.board.length).toBe(10)
    expect(gameBoard.board[0].length).toBe(10)
  })

  test('it has ships', () => {
    expect(gameBoard.ships).toEqual([])
  })

  test('it can place a ship', () => {
    const ship = new Ship('Carrier', 5)
    gameBoard.placeShip(ship, 0, 0, true)
    expect(gameBoard.ships).toEqual([ship])
  })

  test('it can receive an attack', () => {
    const ship = new Ship('Carrier', 5)
    gameBoard.placeShip(ship, 0, 0, true)
    expect(gameBoard.receiveAttack(0, 0)).toBe(true)
  })

  test('it can tell if all ships are sunk', () => {
    const ship = new Ship('Carrier', 5)
    gameBoard.placeShip(ship, 0, 0, true)
    expect(gameBoard.allSunk()).toBe(false)
    for (let i = 0; i < ship.length; i++) {
      ship.hit(i)
    }
    expect(gameBoard.allSunk()).toBe(true)
  })

  test('it can randomize ships', () => {
    gameBoard.randomizeShips()
    expect(gameBoard.ships.length).toBe(5)
  })

  test('it can tell if a ship placement is valid', () => {
    const ship = new Ship('Carrier', 5)
    expect(gameBoard.isValidPlacement(ship.length, 0, 0, true)).toBe(true)
    gameBoard.placeShip(ship, 0, 0, true)
    expect(gameBoard.isValidPlacement(ship.length, 0, 0, true)).toBe(false)
  })
})
