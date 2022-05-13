import { solution } from "../binary-gap";

describe("binary-gap", () => {
  describe("example test cases", () => {
    it.each`
      n      | expected
      ${9}   | ${2}
      ${529} | ${4}
      ${20}  | ${1}
      ${15}  | ${0}
      ${32}  | ${0}
    `(
      "returns '$expected' the length of $n longest binary gap",
      ({ n, expected }) => {
        expect(solution(n)).toEqual(expected);
      }
    );
  });

  describe("correctness test cases", () => {
    describe("extremes", () => {
      it.each`
        n             | expected
        ${1}          | ${0}
        ${5}          | ${1}
        ${2147483647} | ${0}
      `(
        "returns '$expected' the length of $n longest binary gap",
        ({ n, expected }) => {
          expect(solution(n)).toEqual(expected);
        }
      );
    });

    describe("trailing zeros", () => {
      it.each`
        n      | expected
        ${6}   | ${0}
        ${328} | ${2}
      `(
        "returns '$expected' the length of $n longest binary gap",
        ({ n, expected }) => {
          expect(solution(n)).toEqual(expected);
        }
      );
    });

    describe("power of 2", () => {
      it.each`
        n       | expected
        ${5}    | ${1}
        ${16}   | ${0}
        ${1024} | ${0}
      `(
        "returns '$expected' the length of $n longest binary gap",
        ({ n, expected }) => {
          expect(solution(n)).toEqual(expected);
        }
      );
    });

    describe("simple", () => {
      it.each`
        n       | expected
        ${9}    | ${2}
        ${11}   | ${1}
        ${19}   | ${2}
        ${42}   | ${1}
        ${1162} | ${3}
      `(
        "returns '$expected' the length of $n longest binary gap",
        ({ n, expected }) => {
          expect(solution(n)).toEqual(expected);
        }
      );
    });

    describe("medium", () => {
      it.each`
        n         | expected
        ${51712}  | ${2}
        ${20}     | ${1}
        ${561892} | ${3}
        ${9}      | ${2}
        ${66561}  | ${9}
      `(
        "returns '$expected' the length of $n longest binary gap",
        ({ n, expected }) => {
          expect(solution(n)).toEqual(expected);
        }
      );
    });

    describe("large", () => {
      it.each`
        n             | expected
        ${6291457}    | ${20}
        ${74901729}   | ${4}
        ${2147483647} | ${0}
        ${805306373}  | ${25}
        ${1376796946} | ${5}
        ${1073741825} | ${29}
        ${1610612737} | ${28}
      `(
        "returns '$expected' the length of $n longest binary gap",
        ({ n, expected }) => {
          expect(solution(n)).toEqual(expected);
        }
      );
    });
  });
});
