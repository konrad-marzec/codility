package main

import "fmt"

func Solution(A []int) int {
	length := len(A) + 1

	sum := 0
	for _, v := range A {
		sum += v
	}

	return (length*(length+1))/2 - sum
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{1, 2, 3, 5}), 4)
	fmt.Printf("%d -- %d\n", Solution([]int{1, 2, 3, 4, 5}), 6)
}
