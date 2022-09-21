function build(str: string) {
  let i = 0;
  let result = "";

  while (i < str.length) {
    let count = 0;
    const digit = str[i];

    while (digit === str[i] && i < str.length) {
      count += 1;
      i += 1;
    }

    result += `${count}${digit}`;
  }

  return result;
}

export function solution(n: number): string {
  let result = "1";

  for (let i = 2; i <= n; i++) {
    result = build(result);
  }

  return result;
}
