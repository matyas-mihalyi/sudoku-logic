import { Sudoku } from "./types";

export const createArraysFromColumns = (sudoku: Sudoku): Sudoku => {
  const columns = Array.apply(null, Array(9)).map(()=> []) as Sudoku;
  
  for (let row = 0; row < sudoku.length; row++) {
    for (let col = 0; col < sudoku.length; col++) {      
      columns[col].push(sudoku[row][col]);
    } 
  }

  return columns
}


const createArraysFromSquares = (sudoku: Sudoku) => {
  const squares = new Array(9).fill([]);

  for (let row = 0; row < sudoku.length; row++) {

    for (let col = 0; col < sudoku[row].length; col++) {
      const number = sudoku[row][col];

      let squareIndex = 0; // default index of squares to push to

      if (col >= 3 && col <= 5) { // add 1 to default index because the square is in the middle
        squareIndex = 1
      };
      if (col >= 6 && col <= 8) { // add 2 to default index because the square is on the right
        squareIndex = 2
      };

      if (row >= 3 && row <= 5) { // add 3 to default index because the correct square is in the middle row
        squareIndex += 3;
      } else if (row >= 6 && row <= 8) { // add 6 to default index because the correct square is in the last row
        squareIndex += 6;
      }

      squares[squareIndex] = [...squares[squareIndex], number];
    }
  }
  
  return squares

}

const checkValidity = (arr: Array<Sudoku>) => {
  let valid = true;
  for (let i = 0; i < arr.length; i++) {
    if (valid) {
      const currentArray = arr[i];
      currentArray.forEach(item => {

        if (currentArray.filter(e => e === item).length > 1) {
          console.error("Error at column", i, "row", item)
          valid = false
        }

      })

    } else {
      break
    }
  }
  valid ? console.log("Sudoku is valid.") : console.error("Sudoku is invalid!")

  return valid
}

export const validateSudoku = (sudoku: Sudoku) => {
  const rows = sudoku;
  const columns = createArraysFromColumns(sudoku);
  const squares = createArraysFromSquares(sudoku);

  return checkValidity([...rows, ...columns, ...squares])
}
