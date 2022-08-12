export { validateSudoku } from './validator';
export { removeRandomCells } from './prepare-sudoku';
export { shuffleSudoku } from './shuffle-sudoku';

import { removeRandomCells } from './prepare-sudoku';
import { shuffleSudoku } from './shuffle-sudoku';
import { sudoku } from './sudokus';
import { Sudoku } from './types';

export const generateSudoku = (numberOfCellsToRemove: number = 49): Sudoku => {
  const completeSudoku = shuffleSudoku(sudoku);
  const incompleteSudoku = removeRandomCells(completeSudoku, numberOfCellsToRemove);
  return incompleteSudoku;
}

