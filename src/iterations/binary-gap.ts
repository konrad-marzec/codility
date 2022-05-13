function toBinary(n: number) {
  let tmp = n;
  const result = [];

  while (tmp) {
    result.push(tmp % 2);

    tmp = Math.floor(tmp / 2);
  }

  return result.reverse();
}

export function solution(n: number) {
  let count = 0;
  let sum = 0;

  toBinary(n).forEach((i) => {
    if (i === 1) {
      count = Math.max(sum, count);
      sum = 0;
    } else {
      sum += 1;
    }
  });

  return count;
}
