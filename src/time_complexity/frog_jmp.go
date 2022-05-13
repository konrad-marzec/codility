package main

import (
	"fmt"
	"math"
)

func Solution(x int, y int, d int) int {
	return int(math.Ceil((float64(y) - float64(x)) / float64(d)))
}

func main() {
	fmt.Printf("%d -- %d\n", Solution(10, 85, 30), 3)
	fmt.Printf("%d -- %d\n", Solution(10, 80, 10), 7)
	fmt.Printf("%d -- %d\n", Solution(9, 80, 10), 8)
	fmt.Printf("%d -- %d\n", Solution(1, 14, 3), 5)
	fmt.Printf("%d -- %d\n", Solution(1, 1, 3), 0)
	fmt.Printf("%d -- %d\n", Solution(100, 1001, 100), 10)
	fmt.Printf("%d -- %d\n", Solution(150000, 999999, 10000), 85)
	fmt.Printf("%d -- %d\n", Solution(150000, 1000000, 10000), 85)
}
