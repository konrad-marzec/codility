export function solution(grid: number[][]): number {
  const tmp: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    tmp[i] = [];
    for (let j = 0; j < grid[0].length; j++) {
      tmp[i][j] = -1;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const element = grid[i][j];

      if (i === 0) {
        tmp[i][j] = element;
      } else {
        const left = j > 0 ? tmp[i][j - 1] : Infinity;
        const top = i > 0 ? tmp[i - 1][j] : Infinity;

        tmp[i][j] = Math.max(Math.min(element, top), Math.min(element, left));
      }
    }
  }

  return tmp[tmp.length - 1][tmp[0].length - 1];
}
