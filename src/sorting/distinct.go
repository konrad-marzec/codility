package main

import (
	"fmt"
)

func Solution(A []int) int {
	set := make(map[int]bool)

	for _, v := range A {
		set[v] = true
	}

	return len((set))
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{}), 0)
	fmt.Printf("%d -- %d\n", Solution([]int{2, 1, 1, 2, 3, 1}), 3)
}
