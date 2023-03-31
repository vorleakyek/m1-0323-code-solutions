# javascript-loops-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of a loop?
A: Loops are used in JavaScript to perform repeated tasks based on a condition.

Conditions typically return true or false . A loop will continue running until the defined condition returns false .

- What is the purpose of a **condition** expression in a loop?
A:
o	Determine when to stop it
o	Defines the condition for executing the code block
o	If the return is true, then the loop will start over again
o	If false, the loop will stop

An expression to be evaluated before each loop iteration.

If this expression evaluates to true, statement is executed. If the expression evaluates to false, execution exits the loop and goes to the first statement after the for construct.

This conditional test is optional. If omitted, the condition always evaluates to true.

- What does "iteration" mean in the context of loops?
A: An iteration refers to 1-time execution of a loop.
A loop can undergo many iterations.

- _When_ does the **condition** expression of a `while` loop get evaluated?
A: At the beginning of each iteration.

- _When_ does the **initialization** expression of a `for` loop get evaluated?
A: Executed (one time) before the execution of the code bloc

- _When_ does the **condition** expression of a `for` loop get evaluated?
A: At the beginning of each iteration

- _When_ does the **final** expression of a `for` loop get evaluated?
A: Executed (every time) after the code has been executed

o	The final expression evaluated before entering the condition
o	Increment >> check the condition

- Besides a `return` statement, which exits its entire function block, which keyword exits a loop before its **condition** expression evaluates to `false`?
A: use break keyword
```javascript
for (let i = 1; i < 10; i += 2) {
  if (i === 7) {
    break;
  }
  console.log('Total elephants: ' + i);
}

// Output:
// Total elephants: 1
// Total elephants: 3
// Total elephants: 5
```

- What does the `++` increment operator do?
A: add 1 to the current value
For example: a++ is the same as a+1

- How do you iterate through the keys of an object?
A: use the for...in loop

```javascript
  for (const key in object) {
    console.log(key)
  }
```


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
