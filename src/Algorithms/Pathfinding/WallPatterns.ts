const zigZagPattern = [
  { x: 0, y: 1 },
  { x: 0, y: 5 },
  { x: 0, y: 13 },
  { x: 0, y: 21 },
  { x: 0, y: 29 },
  { x: 1, y: 1 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 8 },
  { x: 1, y: 9 },
  { x: 1, y: 12 },
  { x: 1, y: 13 },
  { x: 1, y: 16 },
  { x: 1, y: 17 },
  { x: 1, y: 20 },
  { x: 1, y: 21 },
  { x: 1, y: 24 },
  { x: 1, y: 25 },
  { x: 1, y: 28 },
  { x: 1, y: 29 },
  { x: 1, y: 32 },
  { x: 1, y: 33 },
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 2, y: 7 },
  { x: 2, y: 8 },
  { x: 2, y: 11 },
  { x: 2, y: 12 },
  { x: 2, y: 15 },
  { x: 2, y: 16 },
  { x: 2, y: 19 },
  { x: 2, y: 20 },
  { x: 2, y: 23 },
  { x: 2, y: 24 },
  { x: 2, y: 27 },
  { x: 2, y: 28 },
  { x: 2, y: 31 },
  { x: 2, y: 32 },
  { x: 3, y: 2 },
  { x: 3, y: 3 },
  { x: 3, y: 6 },
  { x: 3, y: 7 },
  { x: 3, y: 10 },
  { x: 3, y: 11 },
  { x: 3, y: 14 },
  { x: 3, y: 15 },
  { x: 3, y: 18 },
  { x: 3, y: 19 },
  { x: 3, y: 22 },
  { x: 3, y: 23 },
  { x: 3, y: 26 },
  { x: 3, y: 27 },
  { x: 3, y: 30 },
  { x: 3, y: 31 },
  { x: 3, y: 34 },
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 5 },
  { x: 4, y: 6 },
  { x: 4, y: 9 },
  { x: 4, y: 10 },
  { x: 4, y: 13 },
  { x: 4, y: 14 },
  { x: 4, y: 17 },
  { x: 4, y: 18 },
  { x: 4, y: 21 },
  { x: 4, y: 22 },
  { x: 4, y: 25 },
  { x: 4, y: 26 },
  { x: 4, y: 29 },
  { x: 4, y: 30 },
  { x: 4, y: 33 },
  { x: 4, y: 34 },
  { x: 5, y: 4 },
  { x: 5, y: 5 },
  { x: 5, y: 8 },
  { x: 5, y: 9 },
  { x: 5, y: 12 },
  { x: 5, y: 13 },
  { x: 5, y: 16 },
  { x: 5, y: 17 },
  { x: 5, y: 20 },
  { x: 5, y: 21 },
  { x: 5, y: 24 },
  { x: 5, y: 25 },
  { x: 5, y: 28 },
  { x: 5, y: 29 },
  { x: 5, y: 32 },
  { x: 5, y: 33 },
  { x: 6, y: 3 },
  { x: 6, y: 4 },
  { x: 6, y: 7 },
  { x: 6, y: 8 },
  { x: 6, y: 11 },
  { x: 6, y: 12 },
  { x: 6, y: 15 },
  { x: 6, y: 16 },
  { x: 6, y: 19 },
  { x: 6, y: 20 },
  { x: 6, y: 23 },
  { x: 6, y: 24 },
  { x: 6, y: 27 },
  { x: 6, y: 28 },
  { x: 6, y: 31 },
  { x: 6, y: 32 },
  { x: 7, y: 2 },
  { x: 7, y: 3 },
  { x: 7, y: 6 },
  { x: 7, y: 7 },
  { x: 7, y: 10 },
  { x: 7, y: 11 },
  { x: 7, y: 14 },
  { x: 7, y: 15 },
  { x: 7, y: 18 },
  { x: 7, y: 19 },
  { x: 7, y: 22 },
  { x: 7, y: 23 },
  { x: 7, y: 26 },
  { x: 7, y: 27 },
  { x: 7, y: 30 },
  { x: 7, y: 31 },
  { x: 8, y: 1 },
  { x: 8, y: 2 },
  { x: 8, y: 5 },
  { x: 8, y: 6 },
  { x: 8, y: 9 },
  { x: 8, y: 10 },
  { x: 8, y: 13 },
  { x: 8, y: 14 },
  { x: 8, y: 17 },
  { x: 8, y: 18 },
  { x: 8, y: 21 },
  { x: 8, y: 22 },
  { x: 8, y: 25 },
  { x: 8, y: 26 },
  { x: 8, y: 29 },
  { x: 8, y: 30 },
  { x: 8, y: 33 },
  { x: 9, y: 0 },
  { x: 9, y: 1 },
  { x: 9, y: 4 },
  { x: 9, y: 5 },
  { x: 9, y: 8 },
  { x: 9, y: 9 },
  { x: 9, y: 12 },
  { x: 9, y: 13 },
  { x: 9, y: 16 },
  { x: 9, y: 17 },
  { x: 9, y: 20 },
  { x: 9, y: 21 },
  { x: 9, y: 24 },
  { x: 9, y: 25 },
  { x: 9, y: 28 },
  { x: 9, y: 29 },
  { x: 9, y: 32 },
  { x: 9, y: 33 },
  { x: 10, y: 3 },
  { x: 10, y: 4 },
  { x: 10, y: 7 },
  { x: 10, y: 8 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
  { x: 10, y: 15 },
  { x: 10, y: 16 },
  { x: 10, y: 19 },
  { x: 10, y: 20 },
  { x: 10, y: 23 },
  { x: 10, y: 24 },
  { x: 10, y: 27 },
  { x: 10, y: 28 },
  { x: 10, y: 31 },
  { x: 10, y: 32 },
  { x: 11, y: 2 },
  { x: 11, y: 3 },
  { x: 11, y: 6 },
  { x: 11, y: 7 },
  { x: 11, y: 10 },
  { x: 11, y: 11 },
  { x: 11, y: 14 },
  { x: 11, y: 15 },
  { x: 11, y: 18 },
  { x: 11, y: 19 },
  { x: 11, y: 22 },
  { x: 11, y: 23 },
  { x: 11, y: 26 },
  { x: 11, y: 27 },
  { x: 11, y: 30 },
  { x: 11, y: 31 },
  { x: 11, y: 34 },
  { x: 12, y: 1 },
  { x: 12, y: 2 },
  { x: 12, y: 5 },
  { x: 12, y: 6 },
  { x: 12, y: 9 },
  { x: 12, y: 10 },
  { x: 12, y: 13 },
  { x: 12, y: 14 },
  { x: 12, y: 17 },
  { x: 12, y: 18 },
  { x: 12, y: 21 },
  { x: 12, y: 22 },
  { x: 12, y: 25 },
  { x: 12, y: 26 },
  { x: 12, y: 29 },
  { x: 12, y: 30 },
  { x: 12, y: 33 },
  { x: 12, y: 34 },
  { x: 13, y: 1 },
  { x: 13, y: 4 },
  { x: 13, y: 5 },
  { x: 13, y: 8 },
  { x: 13, y: 9 },
  { x: 13, y: 12 },
  { x: 13, y: 13 },
  { x: 13, y: 16 },
  { x: 13, y: 17 },
  { x: 13, y: 20 },
  { x: 13, y: 21 },
  { x: 13, y: 24 },
  { x: 13, y: 25 },
  { x: 13, y: 28 },
  { x: 13, y: 29 },
  { x: 13, y: 32 },
  { x: 13, y: 33 },
  { x: 14, y: 4 },
  { x: 14, y: 12 },
  { x: 14, y: 20 },
  { x: 14, y: 28 },
];

const infinityPattern = [
  { x: 0, y: 8 },
  { x: 1, y: 8 },
  { x: 2, y: 6 },
  { x: 2, y: 8 },
  { x: 2, y: 9 },
  { x: 2, y: 10 },
  { x: 2, y: 11 },
  { x: 2, y: 12 },
  { x: 2, y: 13 },
  { x: 2, y: 14 },
  { x: 2, y: 15 },
  { x: 3, y: 4 },
  { x: 3, y: 5 },
  { x: 3, y: 6 },
  { x: 3, y: 15 },
  { x: 3, y: 16 },
  { x: 3, y: 26 },
  { x: 3, y: 27 },
  { x: 3, y: 28 },
  { x: 3, y: 29 },
  { x: 3, y: 30 },
  { x: 3, y: 31 },
  { x: 3, y: 32 },
  { x: 4, y: 3 },
  { x: 4, y: 4 },
  { x: 4, y: 16 },
  { x: 4, y: 24 },
  { x: 4, y: 25 },
  { x: 4, y: 26 },
  { x: 4, y: 32 },
  { x: 4, y: 33 },
  { x: 5, y: 3 },
  { x: 5, y: 16 },
  { x: 5, y: 17 },
  { x: 5, y: 21 },
  { x: 5, y: 22 },
  { x: 5, y: 23 },
  { x: 5, y: 24 },
  { x: 5, y: 33 },
  { x: 6, y: 3 },
  { x: 6, y: 17 },
  { x: 6, y: 18 },
  { x: 6, y: 33 },
  { x: 7, y: 3 },
  { x: 7, y: 11 },
  { x: 7, y: 12 },
  { x: 7, y: 13 },
  { x: 7, y: 14 },
  { x: 7, y: 15 },
  { x: 7, y: 16 },
  { x: 7, y: 18 },
  { x: 7, y: 32 },
  { x: 7, y: 33 },
  { x: 8, y: 3 },
  { x: 8, y: 4 },
  { x: 8, y: 10 },
  { x: 8, y: 11 },
  { x: 8, y: 18 },
  { x: 8, y: 19 },
  { x: 8, y: 32 },
  { x: 8, y: 33 },
  { x: 9, y: 4 },
  { x: 9, y: 5 },
  { x: 9, y: 7 },
  { x: 9, y: 8 },
  { x: 9, y: 9 },
  { x: 9, y: 10 },
  { x: 9, y: 19 },
  { x: 9, y: 20 },
  { x: 9, y: 31 },
  { x: 9, y: 32 },
  { x: 10, y: 5 },
  { x: 10, y: 6 },
  { x: 10, y: 7 },
  { x: 10, y: 20 },
  { x: 10, y: 21 },
  { x: 10, y: 22 },
  { x: 10, y: 29 },
  { x: 10, y: 30 },
  { x: 10, y: 31 },
  { x: 11, y: 23 },
  { x: 11, y: 24 },
  { x: 11, y: 25 },
  { x: 11, y: 26 },
  { x: 11, y: 27 },
  { x: 11, y: 28 },
  { x: 11, y: 29 },
];

export { zigZagPattern, infinityPattern };
