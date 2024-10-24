import { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkWinner, checkEndGame } from './logc/board';
import { WinnerModal } from './components/WinnerModal';
import { MyBoard } from './components/Board';
import { MyHeader } from './components/MyHeader';
import { saveGameToStorage, restGameStorage } from './logc/storage';

function App() {
  const [board, setBoard] = useState(() => {  
    const boardFromLocalStorage = window.localStorage.getItem('board');
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.x;
  });
  
  const [winner, setWinner] = useState(null);
  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    restGameStorage();
  }

  const updateBoard = (index) => {
    
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);

    saveGameToStorage({board: newBoard, turn: newTurn});

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  return (
    <main className='board'>
      <MyHeader resetGame={resetGame} />
      <section className='game'>
        <MyBoard board={board} updateBoard={updateBoard} />
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      <section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </section>
    </main>
  );
}

export default App
