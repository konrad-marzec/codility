import { solution } from "../count_and_say";

describe("count_and_say", () => {
  describe("example test cases", () => {
    it.each`
      num   | expected
      ${1}  | ${"1"}
      ${2}  | ${"11"}
      ${3}  | ${"21"}
      ${4}  | ${"1211"}
      ${5}  | ${"111221"}
      ${6}  | ${"312211"}
      ${7}  | ${"13112221"}
      ${8}  | ${"1113213211"}
      ${9}  | ${"31131211131221"}
      ${10} | ${"13211311123113112211"}
    `("determines how you say $num: '$expected'", ({ num, expected }) => {
      expect(solution(num)).toEqual(expected);
    });
  });
});
