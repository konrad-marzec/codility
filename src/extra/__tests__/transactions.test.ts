import { solution } from "../transactions";

describe("transactions", () => {
  describe("example test cases", () => {
    it.each`
      prices                  | expected
      ${[1, 2, 100]}          | ${197}
      ${[1, 2, 3]}            | ${3}
      ${[1, 1, 1]}            | ${0}
      ${[5, 2, 0]}            | ${0}
      ${[5, 10, 5, 10]}       | ${10}
      ${[5, 10, 6, 4, 5, 10]} | ${20}
      ${[0, 10, 10]}          | ${10}
    `("should return max possible profit", ({ prices, expected }) => {
      expect(solution(prices)).toEqual(expected);
    });
  });
});
