package main

import "fmt"

func Solution(A []int) int {
	cars := 0
	result := 0

	for _, v := range A {
		if v == 0 {
			cars += 1
		} else {
			result += cars
		}

		if result > 1000000000 {
			return -1
		}
	}

	return result
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{0, 1, 0, 1, 1}), 5)
}
