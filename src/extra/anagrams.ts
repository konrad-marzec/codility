export function solution(words: string[]) {
  const hash = words.reduce<Record<string, string[]>>((result, word) => {
    const letters = word.split("").sort().join("");

    if (result[letters]) {
      return {
        ...result,
        [letters]: [...result[letters], word],
      };
    }

    return {
      ...result,
      [letters]: [word],
    };
  }, {});

  return [
    ...new Set(
      Object.values(hash)
        .filter((collection) => collection.length > 1)
        .flat()
    ),
  ];
}
