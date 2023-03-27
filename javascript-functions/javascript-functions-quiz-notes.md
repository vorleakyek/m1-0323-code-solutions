# javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a function in JavaScript?
A: A set of statements that performs a task or calculates a value

- Describe the parts of a function **definition**.
A: A function has 5 parts
o A fucntion keyword to begin the creation of a new function
o An optional name
o A comma-separated list of zero or more parameters, surrounded by () parentheses
o The start of the function's code block, as indicated by an { open curlyi brace
o An optional return statement
o end of the function's code block, as indicated by a } curly brace

``` javascript
function name(parameter1, parameter2,...) {
  //code block
  return statement;
}
```

- Describe the parts of a function **call**.
The function's name and a comma-separated list of zero or more arguments surrounded by () parenthese.

```javascript
name(args)
```

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
A function definition

- What is the difference between a **parameter** and an **argument**?
A: parameter - a placeholder. It's a variable whose value is not known until we call the function and pass an argument. When the function's code block is run, the paramenter is will be holding the value of the argument.

The key different is that when we define a function, we declare parameters and that when we call a function, we pass its arguments.

- Why are function **parameters** useful?
A: Parameters allow a function to perform tasks without knowing the specific input value ahead of time. Parameter variables are used to import arguments into functions.

- What two effects does a `return` statement have on the behavior of a function?
A: A return statement causes the function to produce a value.
A return statement also exits the function; no code after the return statement is executed.

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
