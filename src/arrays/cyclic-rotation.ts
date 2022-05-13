export function solution(A: number[], K: number) {
  const length = A.length;

  if (K === length || !length) {
    return A;
  }

  const result = [];

  for (let i = 0; i < length; i++) {
    result[(i + K) % length] = A[i];
  }

  return result;
}
