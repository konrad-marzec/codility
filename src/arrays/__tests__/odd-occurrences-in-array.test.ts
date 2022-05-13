import { solution } from "../odd-occurrences-in-array";

describe("odd-occurrences-in-array", () => {
  describe("example test cases", () => {
    it.each`
      A                        | expected
      ${[9, 3, 9, 3, 9, 7, 9]} | ${7}
    `(
      "returns the value '$expected' of the unpaired element.",
      ({ A, expected }) => {
        expect(solution(A)).toEqual(expected);
      }
    );
  });

  describe("correctness test cases", () => {
    describe("extremes", () => {
      it.each`
        A      | expected
        ${[9]} | ${9}
      `(
        "returns the value '$expected' of the unpaired element.",
        ({ A, expected }) => {
          expect(solution(A)).toEqual(expected);
        }
      );
    });
  });
});
