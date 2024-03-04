class DomHandler {
  constructor () {
    this.boards = []
    this.document = document
    this.container = document.querySelector('#container')
  }

  #createBoard (board) {
    // ad board id to the wrapper by using data-attribute

    const table = document.createElement('table')
    table.classList.add('game-board')
    for (let i = 0; i < board.size; i++) {
      const row = document.createElement('tr')
      for (let j = 0; j < board.size; j++) {
        const doesCellContainsShip = board.board[i][j] !== null

        const cell = document.createElement('td')
        cell.dataset.x = i
        cell.dataset.y = j

        if (doesCellContainsShip) {
          cell.classList.add('ship')
        }

        row.appendChild(cell)
      }
      table.appendChild(row)
    }

    return table
  }

  generateBoard (board) {
    const boardId = board.id

    const tableWrapper = document.createElement('div')
    tableWrapper.classList.add('game-board-wrapper')
    tableWrapper.dataset.id = boardId
    const boardPlayerName = document.createElement('h2')
    boardPlayerName.textContent = board.player.name

    const table = this.#createBoard(board)
    tableWrapper.appendChild(boardPlayerName)
    tableWrapper.appendChild(table)
    this.boards.push(table)
    this.container.appendChild(tableWrapper)
  }

  updateBoard (board) {
    const boardId = board.id

    // find the table with the matching id
    const tableWrapper = this.container.querySelector(`[data-id="${boardId}"]`)

    // remove the old table
    tableWrapper.innerHTML = ''

    // create a new table
    const boardPlayerName = document.createElement('h2')
    boardPlayerName.textContent = board.player.name
    const table = this.#createBoard(board)
    tableWrapper.appendChild(boardPlayerName)
    tableWrapper.appendChild(table)

    // update the boards array
    this.boards = this.boards.map((board) => {
      if (board.id === boardId) {
        return table
      }
      return board
    })
  }
}

export default DomHandler
