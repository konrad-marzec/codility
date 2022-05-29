function areDistinct(a: Set<string>, b: Set<string>) {
  for (const letter of a) {
    if (b.has(letter)) {
      return false;
    }
  }

  return true;
}

export function solution(words: string[]) {
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    const lettersA = new Set(words[i].split(""));

    for (let j = i + 1; j < words.length; j++) {
      const lettersB = new Set(words[j].split(""));

      if (areDistinct(lettersA, lettersB)) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }

  return max;
}
