package main

import (
	"fmt"
)

var result = [][]int{}

func CollectNumbers(numbers []int, idx int, target int, buff []int) {
	if target == 0 {
		result = append(result, buff)

		return
	}

	for i := idx; i < len(numbers); i++ {
		number := numbers[i]
		new_target := target - number

		if new_target >= 0 {
			CollectNumbers(numbers, i, new_target, append(buff, number))
		}
	}
}

func Solution(numbers []int, target int) [][]int {
	CollectNumbers(numbers, 0, target, []int{})

	return result
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{5, 2, 3}, 8), [][]int{{2, 2, 2, 2}, {2, 3, 3}, {3, 5}})
}
