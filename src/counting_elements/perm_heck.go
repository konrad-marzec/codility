package main

import "fmt"

func Solution(A []int) int {
	set := make(map[int]bool)

	for i := 1; i <= len(A); i++ {
		set[i] = true
	}

	for _, v := range A {
		delete(set, v)

	}

	if len(set) == 0 {
		return 1
	}

	return 0
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{4, 1, 3, 2}), 0)
}
