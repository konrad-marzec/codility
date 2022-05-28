import { solution } from "../reduction-cost";

describe("reduction-cost", () => {
  describe("example test cases", () => {
    it.each`
      s            | cost                              | expected
      ${"abccbd"}  | ${[0, 1, 2, 3, 4, 5]}             | ${2}
      ${"aabbcc"}  | ${[1, 2, 1, 2, 1, 2]}             | ${3}
      ${"aaaa"}    | ${[3, 4, 5, 6]}                   | ${12}
      ${"ababa"}   | ${[10, 5, 10, 5, 10]}             | ${0}
      ${"aaacbbb"} | ${[10, 100, 20, 1000, 150, 1, 2]} | ${33}
      ${""}        | ${[0, 1, 2, 3, 4, 5]}             | ${0}
    `(
      "returns '$expected' the cost of reduction of $s",
      ({ s, cost, expected }) => {
        expect(solution(s, cost)).toEqual(expected);
      }
    );
  });
});
