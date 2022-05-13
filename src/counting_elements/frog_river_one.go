package main

import "fmt"

func Solution(x int, A []int) int {
	set := make(map[int]bool)

	for i := 1; i <= x; i++ {
		set[i] = true
	}

	for i, v := range A {
		delete(set, v)

		if len(set) == 0 {
			return i
		}
	}

	return -1
}

func main() {
	fmt.Printf("%d -- %d\n", Solution(5, []int{1, 3, 1, 4, 2, 3, 5, 4}), 6)
}
