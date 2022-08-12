import { Sudoku } from "./types";
import { createArraysFromColumns } from "./validator";

const createCopy = (sudoku: Sudoku): Sudoku => {
  const copy = JSON.parse(JSON.stringify(sudoku)) as Sudoku;
  return copy
}

const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

const shuffleSquaresHorizontally = (sudoku: Sudoku) => {
  const rows = [[sudoku[0], sudoku[1], sudoku[2]], [sudoku[3], sudoku[4], sudoku[5]], [sudoku[6], sudoku[7], sudoku[8]]];
  const result = shuffleArray(rows).flat();
  return result
}

const shuffleSquaresVertically = (sudoku: Sudoku) => {
  const columns: Sudoku = createArraysFromColumns(sudoku);
  const groupedColumns = [[columns[0], columns[1], columns[2]], [columns[3], columns[4], columns[5]], [columns[6], columns[7], columns[8]]];
  const result = shuffleArray(groupedColumns).flat() as Sudoku;
  return createArraysFromColumns(result);
}

const shuffleRows = (sudoku) => {
  return [shuffleArray([sudoku[0], sudoku[1], sudoku[2]]), shuffleArray([sudoku[3], sudoku[4], sudoku[5]]), shuffleArray([sudoku[6], sudoku[7], sudoku[8]])].flat()
}

const shuffleColumns = (sudoku) => {
  const columns: Sudoku = createArraysFromColumns(sudoku);
  const shuffledColumns = [shuffleArray([columns[0], columns[1], columns[2]]), shuffleArray([columns[3], columns[4], columns[5]]), shuffleArray([columns[6], columns[7], columns[8]])].flat() as Sudoku
  return createArraysFromColumns(shuffledColumns);
}

export const shuffleSudoku = (inputSudoku: Sudoku): Sudoku => {
  const sudoku = createCopy(inputSudoku);
  const shuffledSquares = shuffleSquaresHorizontally(sudoku) as Sudoku;
  const shuffledSquaresVertically = shuffleSquaresVertically(shuffledSquares);
  const shuffledRows = shuffleRows(shuffledSquaresVertically);
  const final = shuffleColumns(shuffledRows);

  return final;
}
