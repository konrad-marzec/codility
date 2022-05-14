package main

import (
	"fmt"
)

func Solution(S string) int {
	opening := "("
	closing := "("
	stack := []string{}

	for _, v := range S {
		if string(v) == opening {
			stack = append(stack, string(v))
		} else {
			l := len(stack)

			if l > 0 && stack[l-1] == closing {
				stack = stack[:l-1]
			} else {
				return 0
			}
		}
	}

	if len(stack) > 0 {
		return 0
	}

	return 1
}

func main() {
	fmt.Printf("%d -- %d\n", Solution("(()(())())"), 1)
	fmt.Printf("%d -- %d\n", Solution("(()"), 0)
	fmt.Printf("%d -- %d\n", Solution("()"), 1)
	fmt.Printf("%d -- %d\n", Solution(""), 1)
	fmt.Printf("%d -- %d\n", Solution(")"), 0)
}
