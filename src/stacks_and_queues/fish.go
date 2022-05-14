package main

import (
	"fmt"
)

func Solution(A []int, B []int) int {
	stack := []int{}

	for i := 0; i < len(A); i++ {
		stack = append(stack, i)

		for len(stack) > 1 && B[stack[len(stack)-2]] > 0 && B[stack[len(stack)-2]] != B[stack[len(stack)-1]] {
			ln := len(stack)

			if A[stack[ln-2]] > A[stack[ln-1]] {
				stack = stack[:ln-1]
			} else {
				idx := stack[ln-1]
				stack = stack[:ln-2]
				stack = append(stack, idx)
			}
		}
	}

	return len(stack)
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{4, 3, 2, 1, 5}, []int{0, 1, 0, 0, 0}), 2)
	fmt.Printf("%d -- %d\n", Solution([]int{4, 3, 2, 0, 5}, []int{0, 1, 0, 0, 0}), 2)
	fmt.Printf("%d -- %d\n", Solution([]int{4, 3, 2, 1, 5}, []int{1, 0, 1, 0, 1}), 3)
	fmt.Printf("%d -- %d\n", Solution([]int{7, 4, 3, 2, 5, 6}, []int{0, 1, 1, 1, 0, 1}), 3)
	fmt.Printf("%d -- %d\n", Solution([]int{4}, []int{1}), 1)
	fmt.Printf("%d -- %d\n", Solution([]int{4}, []int{0}), 1)
}
