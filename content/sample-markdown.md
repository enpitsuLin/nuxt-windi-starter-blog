---
title: Sample markdown file
date: 2023-01-06
tags: ['markdown', 'code', 'features']
summary: Example of a markdown file with code blocks and syntax highlighting, Test some thing in @nuxt/content, such as code highlight, custom prose component and more.
image: https://www.bing.com/th?id=OHR.BlackFell_ROW0513131477_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50
---

A sample post with markdown.

# heading 1

## heading 2

### heading 3

#### heading 4

#### heading 5

[`inline highlight in link`](./)

> Quote
> Nuxt is an open-source framework under MIT license for building modern and performant web applications that can be deployed on any platform running JavaScript.

Sample of inline highlighting `sum = parseInt(num1) + parseInt(num2)`

## Code Blocks

Some Javascript code

```javascript
var num1, num2, sum
num1 = prompt('Enter first number')
num2 = prompt('Enter second number')
sum = parseInt(num1) + parseInt(num2) // "+" means "add"
alert('Sum = ' + sum) // "+" means combine into a string
```

Some Python code 🐍

```python [filename.py]
def fib():
    a, b = 0, 1
    while True:            # First iteration:
        yield a            # yield 0 to start with and then
        a, b = b, a + b    # a will now be 1, and b will also be 1, (0 + 1)

for index, fibonacci_number in zip(range(10), fib()):
     print('{i:3}: {f:3}'.format(i=index, f=fibonacci_number))
```

## List

1. first
2. second
3. third

- first
- second
  - nested item
- third

- [ ] undone task
- [x] done task

## Table

| col-1 | col-2 |
| ----- | ----- |
| 1-1   | 2-1   |
| 1-2   | 2-2   |
