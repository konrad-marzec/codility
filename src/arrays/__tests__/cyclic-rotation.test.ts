import { solution } from "../cyclic-rotation";

describe("cyclic-rotation", () => {
  describe("example test cases", () => {
    it.each`
      A                  | K    | expected
      ${[3, 8, 9, 7, 6]} | ${3} | ${[9, 7, 6, 3, 8]}
      ${[0, 0, 0]}       | ${1} | ${[0, 0, 0]}
      ${[1, 2, 3, 4]}    | ${4} | ${[1, 2, 3, 4]}
    `("returns the array A rotated K times", ({ A, K, expected }) => {
      expect(solution(A, K)).toEqual(expected);
    });
  });

  describe("correctness test cases", () => {
    describe("extremes", () => {
      it.each`
        A     | K    | expected
        ${[]} | ${3} | ${[]}
        ${[]} | ${0} | ${[]}
      `("returns the array A rotated K times", ({ A, K, expected }) => {
        expect(solution(A, K)).toEqual(expected);
      });
    });

    describe("single element", () => {
      it.each`
        A      | K    | expected
        ${[0]} | ${3} | ${[0]}
        ${[5]} | ${0} | ${[5]}
      `("returns the array A rotated K times", ({ A, K, expected }) => {
        expect(solution(A, K)).toEqual(expected);
      });
    });

    describe("two elements", () => {
      it.each`
        A         | K    | expected
        ${[0, 3]} | ${2} | ${[0, 3]}
        ${[5, 6]} | ${1} | ${[6, 5]}
      `("returns the array A rotated K times", ({ A, K, expected }) => {
        expect(solution(A, K)).toEqual(expected);
      });
    });

    describe("small", () => {
      it.each`
        A                        | K     | expected
        ${[0, 3, 6, 7, 1, 3]}    | ${2}  | ${[1, 3, 0, 3, 6, 7]}
        ${[0, 4, 7, 6, 8, 1, 3]} | ${10} | ${[8, 1, 3, 0, 4, 7, 6]}
      `("returns the array A rotated K times", ({ A, K, expected }) => {
        expect(solution(A, K)).toEqual(expected);
      });
    });
  });
});
