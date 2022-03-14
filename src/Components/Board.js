import Tile from './Tile';

const Board = (props) => {
  const renderRows = () => {
    const board = props.board;
    
    return board.grid.map((row, i) => (
      <div className="row" key={`row-${i}`}>
        {renderTiles(row, i)}
      </div>
    ));
  }

  const renderTiles = (row, i) => {
    const board = props.board;
    
    return row.map((tile, j) => (
      <Tile
        tile={tile}
        updateGame={props.updateGame}
        key={i * board.gridSize + j} />
    ));
  }

  return (
    <div id="board">
      {renderRows()}
    </div>
  );
}

export default Board;
