type NineBoxes<T> = [T, T, T, T, T, T, T, T, T]

export type Sudoku = NineBoxes<NineBoxes<number>>;