import { solution } from "../sharpness_value";

describe("sharpness_value", () => {
  describe("example test cases", () => {
    it.each`
      grid                                 | expected
      ${[[7, 5, 3], [2, 0, 9], [4, 5, 9]]} | ${4}
      ${[[6, 7, 8], [5, 4, 2], [8, 7, 6]]} | ${6}
    `(
      "returns max of min values in the path '$expected'",
      ({ grid, expected }) => {
        expect(solution(grid)).toEqual(expected);
      }
    );
  });
});
