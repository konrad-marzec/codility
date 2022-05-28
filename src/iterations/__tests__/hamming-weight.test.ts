import { solution } from "../hamming-weight";

describe("hamming-weight", () => {
  describe("example test cases", () => {
    it.each`
      n             | expected
      ${11}         | ${3}
      ${128}        | ${1}
      ${4294967293} | ${31}
    `(
      "returns '$expected' the number of 1 in $n binary representation",
      ({ n, expected }) => {
        expect(solution(n)).toEqual(expected);
      }
    );
  });
});
