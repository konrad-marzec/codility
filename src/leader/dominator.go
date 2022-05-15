package main

import (
	"fmt"
)

func Solution(A []int) int {
	stack := []int{}

	for _, v := range A {
		l := len(stack)
		if l > 0 && stack[l-1] != v {
			stack = stack[:l-1]
		} else {
			stack = append(stack, v)
		}
	}

	if len(stack) > 0 {
		count := 0
		idx := -1

		for i, v := range A {
			if v == stack[0] {
				count += 1
				idx = i
			}
		}

		if count > len(A)/2 {
			return idx
		}
	}

	return -1
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{3, 4, 3, 2, 3, -1, 3, 3}), 2)
}
