# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
A: to check if the output is what we expected

- What is the purpose of events and event handling?
A: to give a way for a browser to know what kind of interactions the users made and how to resonse to that certain event such as clicking  or hovering over a button.

- Are all possible parameters required to use a JavaScript method or function?
A: no?

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
A: addEventListener('event',callback)

- What is a callback function?
A: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
A: the 'event' object, which contains information about the event that has occurrd

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
A: 'target' is the property of the 'event' object
This tells us which element was targeted by a certain event.
Can use console.log(event.target)

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
The first one is passing the function without calling it. The second one is passing the function and calling it immediately.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
  width: 100%;
}
```
