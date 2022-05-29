import { solution } from "../maximum-product-of-word-lengths";

describe("maximum-product-of-word-lengths", () => {
  describe("example test cases", () => {
    it.each`
      words                                                                     | expected
      ${["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]}                        | ${16}
      ${["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"]} | ${15}
      ${["fcf", "dabae"]}                                                       | ${15}
    `("returns '$expected' the words of reduction", ({ words, expected }) => {
      expect(solution(words)).toEqual(expected);
    });
  });
});
