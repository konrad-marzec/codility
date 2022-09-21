const DICTIONARY: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

export function solution(digits: string): string[] {
  const result: string[] = [];

  function combinations(word: string, idx: number) {
    if (idx === digits.length) {
      if (word) {
        result.push(word);
      }

      return;
    }

    const digit = digits[idx];
    const letters = DICTIONARY[digit];

    for (let i = 0; i < letters.length; i++) {
      combinations(word + letters[i], idx + 1);
    }
  }

  combinations("", 0);

  return result;
}
