package main

import (
	"fmt"
)

func Solution(numbers []int) []int {
	length := len(numbers) + 2

	sum := 0
	for _, v := range numbers {
		sum += v
	}

	total_sum := int(float64(1+length) / 2.0 * float64(length))
	missing_sum := total_sum - sum

	avg := int(float64(total_sum-sum) / 2.0)
	avg_total_sum := int(float64(1+avg) / 2.0 * float64(avg))

	avg_sum := 0
	for _, v := range numbers {
		if v <= avg {
			avg_sum += v
		}
	}

	first := avg_total_sum - avg_sum
	second := missing_sum - first

	return []int{first, second}
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{5, 6, 3, 1}), []int{2, 4})
	fmt.Printf("%d -- %d\n", Solution([]int{3, 2, 1}), []int{4, 5})
	fmt.Printf("%d -- %d\n", Solution([]int{4, 1}), []int{2, 3})
	fmt.Printf("%d -- %d\n", Solution([]int{9, 6, 4, 2, 3, 7, 1}), []int{5, 8})
}
