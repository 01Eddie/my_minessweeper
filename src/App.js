import './App.css';
import { useState } from 'react';
import Board from './Components/Board';
import * as Minesweeper from './minesweeper';

const App = () => {
  const board = new Minesweeper.Board(9, 10);
  // this.state = { board: board };
  const [state, setState] = useState({ board: board });

  const restartGame = () => {
    const board = new Minesweeper.Board(9, 10);
    // console.log(board);
    setState({ board: board });
  }
    
  const updateGame = (tile, flagged) => {
    (flagged) ? tile.toggleFlag(): tile.explore();
    setState({ board: state.board });
  }
      
  let modal;
  if (state.board.lost() || state.board.won()) {
    const text = state.board.won() ? "You won!" : "You lost!";
    modal =(
      <div className='modal-screen'>
        <div className='modal-content'>
          <p>{text}</p>
          <button onClick={restartGame}>Play Again</button>
        </div>
      </div>);
  }
  
  return (
    <div>
      {modal}
      <Board board={state.board} updateGame={updateGame} />
    </div>
  );
}

export default App;
