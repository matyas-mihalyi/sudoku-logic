import { Sudoku } from "./types";

const getRandomIntUpTo = (max: number) => Math.floor(Math.random() * max);

const numberOfEmptyCells = (sudoku) => sudoku.flat().filter(cell => cell === null).length;

export const removeRandomCells = (sudoku: Sudoku, numberOfCellsToRemove: number) => {  
  const row = getRandomIntUpTo(sudoku.length);
  const column = getRandomIntUpTo(sudoku.length);

  if (sudoku[row][column] === null) { // start over if cell is already removed
    removeRandomCells(sudoku, numberOfCellsToRemove);
    return;
  }

  if (numberOfEmptyCells(sudoku) < numberOfCellsToRemove) {
    sudoku[row].splice(column, 1, null);
    removeRandomCells(sudoku, numberOfCellsToRemove);
  } 
    
  return sudoku
}