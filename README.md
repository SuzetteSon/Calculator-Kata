# Calculator-Kata

This kata is heavily inspiered by Roy Osherove's classic String Calculator kata. However, there are slight modifications.

## TDD
Practice TDD throughout the kata. That means iteratively going through the red-green-refactor cycle.

## Create a failing test
Make the test pass
Refactor your code
Do not cheat with this!

## One task at a time
Work incrementally and do one task at a time. Do not read ahead! (Premature optimization is the root of all evil - remember?)

## The Kata
These are the rules to implement the kata. Implement one rule at a time. Do not read ahead! (Hint: Some of the rules may be split into multiple tests)

1. Calling the function add without any parameters should throw an Error with the message No input..
2. Calling the function add with an empty string should return 0.
3. The function add should only accept a string with integers separated by the delimiter ,. The code should throw an Error with the message Invalid input. If the input does not conform to this rule.
4. The add function should return a sum of all the integers.
5. Trailing or repeated delimiters (i.e. strings that ends with a delimiter or contains delimiters without numbers in between)are not allowed and the function should throw an Error with the message Invalid input..
6. Negative numbers are not allowed and an Error should be thrown with the message Negative numbers are not allowed: [n1,n2,...,nn].. (Here, n1,n2, etc refers to all the negative numbers that the input contains)
7. Numbers larger than 1000 should be treated as 0.
