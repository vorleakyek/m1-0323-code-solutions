# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
A: Can check if the output is what we're expected

- What is a "model"?
A: the tree-like structure that represents the HTML document.

Note:
In the Document Object Model (DOM), a "model" refers to the tree-like structure that represents the HTML or XML document. This tree-like structure is composed of nodes, where each node represents a specific part of the document.

- Which "document" is being referred to in the phrase Document Object Model?
A: the webpage that is loaded into the browser

Note:
In the Document Object Model (DOM), the term "document" refers to the web page that is loaded into the browser. It represents the HTML or XML content of the page and provides an interface for interacting with that content using programming languages like JavaScript.

- What is the word "object" referring to in the phrase Document Object Model?
A: It's referring to a JavaScript object that represents a specific node in the hierarchical tree structure that makes up the web page.

Note:

In the Document Object Model (DOM), the term "object" refers to a JavaScript object that represents a specific node in the hierarchical tree structure that makes up the web page.

Every element, attribute, and text node in the web page is represented as an object in the DOM tree. These objects have properties and methods that can be accessed and manipulated using JavaScript. For example, an element object may have properties like tagName and id, and methods like appendChild() and removeChild() that allow you to add or remove child nodes from the element.

- What is a DOM Tree?
A: the tree-like structure that represents the HTML document


- Give two examples of `document` methods that retrieve a single element from the DOM.
A: document.querySelector('.className')
   document.getElementById('elemIDName')

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
A: document.querySelectorAll('h1')

- Why might you want to assign the return value of a DOM query to a variable?
A: So we can reference it later. For example, querySelectorAll will give a result of a NodeList, which we can loop through it.

- What `console` method allows you to inspect the properties of a DOM element object?
A: the 'dir' method
console.dir(document.querySelectorAll('h1'))

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
A:  The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
A: It takes the css selector for the class, id, and type. It returns the first element that matches the CSS selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
A: It takes the css selector for the class, id, and type. It returns all elements that match the CSS selector.


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
