package main

import (
	"fmt"
)

func Solution(A int, B int, K int) int {
	new_a := A + (K-(A%K))%K
	new_b := B - (B % K)

	if new_a == new_b {
		return 1
	}

	if new_a > new_b {
		return 0
	}

	return ((new_b - new_a) / K) + 1
}

func main() {
	fmt.Printf("%d -- %d\n", Solution(6, 11, 2), 3)
	fmt.Printf("%d -- %d\n", Solution(6, 12, 2), 4)
	fmt.Printf("%d -- %d\n", Solution(11, 345, 17), 20)
	fmt.Printf("%d -- %d\n", Solution(0, 1, 11), 1)
	fmt.Printf("%d -- %d\n", Solution(0, 11, 12), 1)
	fmt.Printf("%d -- %d\n", Solution(1, 11, 12), 0)
	fmt.Printf("%d -- %d\n", Solution(0, 0, 12), 1)
	fmt.Printf("%d -- %d\n", Solution(10, 10, 5), 1)
	fmt.Printf("%d -- %d\n", Solution(10, 10, 7), 0)
	fmt.Printf("%d -- %d\n", Solution(10, 10, 20), 0)
	fmt.Printf("%d -- %d\n", Solution(33, 33, 33), 1)
}
