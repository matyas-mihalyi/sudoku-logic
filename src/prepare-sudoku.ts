const getRandomIntUpTo = (max: number) => Math.floor(Math.random() * max);

const numberOfEmptyCells = (sudoku) => sudoku.flat().filter(cell => cell === undefined).length;

export const removeRandomCells = (sudoku: number[][], numberOfCellsToRemove: number) => {  
  const row = getRandomIntUpTo(sudoku.length);
  const column = getRandomIntUpTo(sudoku.length);

  if (sudoku[row][column] === undefined) { // start over if cell is already removed
    removeRandomCells(sudoku, numberOfCellsToRemove);
    return;
  }

  if (numberOfEmptyCells(sudoku) < numberOfCellsToRemove) {
    sudoku[row].splice(column, 1, undefined);
    removeRandomCells(sudoku, numberOfCellsToRemove);
  } 
    
  return sudoku
  

}