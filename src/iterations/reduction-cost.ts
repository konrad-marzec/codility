export function solution(S: string, C: number[]) {
  let cost = 0;
  const letters = S.split("");

  for (let i = 0; i < letters.length - 1; i++) {
    let j = i + 1;

    while (letters[j] === letters[i]) {
      j += 1;
    }

    if (i !== j - 1) {
      let max = 0;
      let sum = 0;

      for (let k = i; k < j; k++) {
        max = Math.max(max, C[k]);
        sum += C[k];
      }

      cost += sum - max;
    }

    i = j - 1;
  }

  return cost;
}
