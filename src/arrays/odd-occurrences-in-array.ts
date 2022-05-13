export function solution(A: number[]) {
  const set = new Set();

  A.forEach((item) => {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  });

  return [...set][0];
}
