package main

import (
	"fmt"
	"math"
)

func Solution(A []int) int {
	total_sum := 0
	for _, v := range A {
		total_sum += v + 1000
	}

	left_sum := 0
	min := math.MaxFloat64
	for _, v := range A {
		left_sum += v + 1000

		min = math.Min(min, math.Abs(float64(total_sum-left_sum)-float64(left_sum)))
	}

	return int(min)
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{3, 1, 2, 4, 3}), 1)
	fmt.Printf("%d -- %d\n", Solution([]int{3, 3}), 0)
	fmt.Printf("%d -- %d\n", Solution([]int{-1000, 1000}), 2000)
	fmt.Printf("%d -- %d\n", Solution([]int{-1000, -1000}), 0)
}
