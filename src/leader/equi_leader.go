package main

import (
	"fmt"
)

func Dominator(A []int) int {
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

func Solution(A []int) int {
	d := Dominator(A)

	if d < 0 {
		return 0
	}

	leaders_count := 0
	dominator_count := 0

	l := len(A)
	total := 0

	for _, v := range A {
		if v == A[d] {
			total += 1
		}
	}

	for i, v := range A {
		if v == A[d] {
			dominator_count += 1
		}

		left := (i + 1) / 2
		right := (l - i - 1) / 2

		if dominator_count > left && total-dominator_count > right {
			leaders_count += 1
		}
	}

	return leaders_count
}

func main() {
	fmt.Printf("%d -- %d\n", Solution([]int{4, 3, 4, 4, 4, 2}), 2)
	fmt.Printf("%d -- %d\n", Solution([]int{1, 5, 1, 5, 5, 5, 5, 5}), 3)
	fmt.Printf("%d -- %d\n", Solution([]int{4, 4, 2, 5, 3, 4, 4, 4}), 3)
	fmt.Printf("%d -- %d\n", Solution([]int{1000}), 0)
	fmt.Printf("%d -- %d\n", Solution([]int{1000, 1}), 0)
	fmt.Printf("%d -- %d\n", Solution([]int{1, 1}), 1)
}
