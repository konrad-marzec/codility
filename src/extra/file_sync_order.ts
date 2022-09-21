function getParent(i: number): number {
  return Math.floor((i - 1) / 2);
}

function getLeftChild(i: number): number {
  return 2 * i + 1;
}

function getRightChild(i: number): number {
  return 2 * i + 2;
}

function swap<T>(collection: T[], i: number, j: number) {
  [collection[i], collection[j]] = [collection[j], collection[i]];
}

function shiftUp<T>(heap: T[], i: number) {
  const parent = getParent(i);

  // @ts-expect-error
  while (i > 0 && heap[parent][0] > heap[i][0]) {
    swap(heap, parent, i);

    i = getParent(i);
  }
}

function shiftDown<T>(heap: T[], i: number) {
  let maxIndex = i;
  const size = heap.length - 1;

  const l = getLeftChild(i);
  // @ts-expect-error
  if (l <= size && heap[l][0] < heap[maxIndex][0]) {
    maxIndex = l;
  }

  const r = getRightChild(i);
  // @ts-expect-error
  if (r <= size && heap[r][0] < heap[maxIndex][0]) {
    maxIndex = r;
  }

  if (i != maxIndex) {
    swap(heap, i, maxIndex);
    shiftDown(heap, maxIndex);
  }
}

function insert<T>(heap: T[], node: T) {
  heap[heap.length] = node;

  shiftUp(heap, heap.length - 1);
}

function extractMax<T>(heap: T[]) {
  const result = heap[0];

  if (heap.length > 1) {
    heap[0] = heap.pop()!;

    shiftDown(heap, 0);
  } else {
    heap.pop();
  }

  return result;
}

function isFinished(
  [size, startedAt]: number[],
  speed: number,
  deadline: number
) {
  return startedAt + size / speed <= deadline;
}

export function solution(
  files: number[][],
  storageLimit: number,
  uploadSpeed: number,
  duration: number
): number[] {
  if (!files.length) {
    return [];
  }

  let i = 0;
  let time = duration;
  const n = files.length;
  let space = storageLimit;
  const result: number[] = [];
  const heap: number[][] = [];
  let current = [...files[i], 0];

  function update() {
    if (space - current[0] < 0) {
      return;
    }

    const passed = duration - time;
    const requiredTime = Math.floor(current[0] / uploadSpeed);
    if (passed < current[1]) {
      time = time - current[1] + passed;
    }

    time -= requiredTime;
    space -= current[0];

    if (time >= 0 && space >= 0) {
      result.push(current[2]);
    }
  }

  while (time > 0 && space > 0) {
    i += 1;

    if (i < n) {
      const next = files[i];

      if (isFinished(current, uploadSpeed, next[1])) {
        update();

        while (
          heap[0] &&
          duration - time + heap[0][1] / uploadSpeed < next[1]
        ) {
          current = extractMax(heap);

          update();
        }

        if (heap[0] && heap[0][0] < next[0]) {
          current = extractMax(heap);
        } else {
          current = [...next, i];
        }
      } else {
        if (current[1] !== next[1] || current[0] <= next[0]) {
          insert(heap, [...next, i]);
        } else {
          insert(heap, current);
          current = [...next, i];
        }
      }
    } else {
      if (current) {
        update();
      } else {
        time = 0;
      }

      current = extractMax(heap);
    }
  }

  return result;
}
