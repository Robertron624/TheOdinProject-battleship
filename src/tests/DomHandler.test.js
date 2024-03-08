// domHandler.test.js
import DomHandler from '../models/DomHandler.js'
import GameBoard from '../models/GameBoard.js'
import Player from '../models/Player.js'

import { describe, expect, test, beforeEach } from '@jest/globals'

const GAMEBOARD_SIZE = 10
describe('DomHandler', () => {
  let domHandler
  let container

  beforeEach(() => {
    document.body.innerHTML = '<div id="container"></div>'
    container = document.getElementById('container')
    domHandler = new DomHandler()
  })

  test('generates board correctly', () => {
    const playerBoard = new GameBoard(GAMEBOARD_SIZE, 1)
    const player = new Player('Player1', playerBoard)
    playerBoard.setPlayer(player)
    domHandler.generateBoard(playerBoard)

    expect(container.innerHTML).toMatchSnapshot()
  })

  test('updates board correctly', () => {
    const playerBoard = new GameBoard(GAMEBOARD_SIZE, 1)
    const player = new Player('Player1', playerBoard)
    playerBoard.setPlayer(player)
    domHandler.generateBoard(playerBoard)

    // Perform some game actions that trigger board updates
    playerBoard.player.attackOwnBoard(0, 0)
    playerBoard.player.attackOwnBoard(1, 1)
    domHandler.updateBoard(playerBoard)

    expect(container.innerHTML).toMatchSnapshot()
  })
})
