import { solution } from "../phone_number_combination";

describe("phone_number_combination", () => {
  describe("example test cases", () => {
    it.each`
      digits  | expected
      ${""}   | ${[]}
      ${"2"}  | ${["a", "b", "c"]}
      ${"22"} | ${["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"]}
      ${"23"} | ${["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]}
    `(
      "returns all possible letter combinations that the number could represent",
      ({ digits, expected }) => {
        expect(solution(digits)).toEqual(expected);
      }
    );
  });
});
