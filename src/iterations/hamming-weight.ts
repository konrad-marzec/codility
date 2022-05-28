export function solution(n: number): number {
  let tmp = n;
  let result = 0;

  while (tmp) {
    if (tmp % 2 == 1) {
      result += 1;
    }

    tmp = Math.floor(tmp / 2);
  }

  return result;
}
