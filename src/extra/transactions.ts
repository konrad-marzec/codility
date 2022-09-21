export function solution(prices: number[]) {
  let wallet = 0;
  let result = 0;
  let cost = 0;
  let max = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    const price = prices[i];

    if (price >= max) {
      result += wallet * max;
      wallet = 0;
      max = price;
    } else {
      wallet += 1;
      cost += price;
    }
  }

  result += wallet * max;

  return result - cost;
}
