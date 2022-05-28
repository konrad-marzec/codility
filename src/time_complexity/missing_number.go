package main

import (
	"fmt"
)

func Solution(numbers []int) int {
	length := len(numbers)

	sum := 0
	for _, v := range numbers {
		sum += v
	}

	return int(float64(1+length)/2.0*float64(length)) - sum
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{3, 0, 1}), 2)
	fmt.Printf("%d -- %d\n", Solution([]int{0, 1}), 2)
	fmt.Printf("%d -- %d\n", Solution([]int{9, 6, 4, 2, 3, 5, 7, 0, 1}), 8)
}
