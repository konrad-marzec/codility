package main

import (
	"fmt"
	"sort"
)

func Solution(A []int) int {
	sort.Ints(A)

	for i := len(A) - 1; i > 1; i-- {
		if A[i-2]+A[i-1] > A[i] {
			return 1
		}
	}

	return 0
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{}), 0)
	fmt.Printf("%d -- %d\n", Solution([]int{4}), 0)
	fmt.Printf("%d -- %d\n", Solution([]int{1, 1, 1, 1}), 1)
	fmt.Printf("%d -- %d\n", Solution([]int{10, 50, 5, 1}), 0)
	fmt.Printf("%d -- %d\n", Solution([]int{10, 2, 5, 1, 8, 20}), 1)
	fmt.Printf("%d -- %d\n", Solution([]int{-5, -3, -1, 2, 4, 5}), 1)
}
