package main

import (
	"fmt"
)

func dfs(i int, j int, a [][]int) {
	if i < 0 || j < 0 || i >= len(a) || j >= len(a[0]) || a[i][j] != 1 {
		return
	}

	a[i][j] = -1

	dfs(i-1, j, a)
	dfs(i+1, j, a)
	dfs(i, j-1, a)
	dfs(i, j+1, a)
}

func Solution(numbers [][]int) int {
	count := 0
	for i := 0; i < len(numbers); i++ {
		for j := 0; j < len(numbers[0]); j++ {
			if numbers[i][j] == 1 {
				count += 1
				dfs(i, j, numbers)
			}
		}
	}

	return count
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([][]int{{1, 1, 1, 1, 0}, {1, 1, 0, 1, 0}, {1, 1, 0, 0, 0}, {0, 0, 0, 0, 0}}), 1)
	fmt.Printf("%d -- %d\n", Solution([][]int{{1, 1, 0, 0, 0}, {1, 1, 0, 0, 0}, {0, 0, 1, 0, 0}, {0, 0, 0, 1, 1}}), 3)
}
