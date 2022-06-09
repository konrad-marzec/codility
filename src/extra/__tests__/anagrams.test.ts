import { solution } from "../anagrams";

describe("anagrams", () => {
  describe("example test cases", () => {
    it.each`
      words                                                                                                                           | expected
      ${["arc", "stressed", "below", "car", "taste", "aves", "elbow", "state", "thing", "bowel", "vase", "night", "save", "dessert"]} | ${["arc", "car", "below", "elbow", "bowel", "taste", "state", "aves", "vase", "save", "thing", "night"]}
      ${["arc", "arc", "arc", "arc"]}                                                                                                 | ${["arc"]}
      ${[]}                                                                                                                           | ${[]}
      ${["123", "asd", "qwe"]}                                                                                                        | ${[]}
    `(
      "returns '$expected' the length of  longest binary gap",
      ({ words, expected }) => {
        expect(solution(words)).toEqual(expected);
      }
    );
  });
});
