import { WINNER_PATTERNS } from '../constants';

export const checkWinner = (boardToCheck) => {
    for(const pattern of WINNER_PATTERNS) {
      const [a,b,c] = pattern;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }

    return null;
}

export const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null);
}