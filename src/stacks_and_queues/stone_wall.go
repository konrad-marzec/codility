package main

import (
	"fmt"
)

func Solution(H []int) int {
	stack := []int{}
	count := 0

	for _, v := range H {

		for len(stack) > 0 && stack[len(stack)-1] > v {
			stack = stack[:len(stack)-1]
		}

		if len(stack) == 0 || stack[len(stack)-1] != v {
			stack = append(stack, v)
			count += 1
		}
	}

	return count
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{8, 8, 5, 7, 9, 8, 7, 4, 8}), 7)
	fmt.Printf("%d -- %d\n", Solution([]int{6, 5, 4, 4, 3, 2, 1}), 6)
	fmt.Printf("%d -- %d\n", Solution([]int{2, 4, 6, 4, 2}), 3)
	fmt.Printf("%d -- %d\n", Solution([]int{4, 4, 4, 4}), 1)
	fmt.Printf("%d -- %d\n", Solution([]int{2, 4, 6}), 3)
	fmt.Printf("%d -- %d\n", Solution([]int{}), 0)
}
