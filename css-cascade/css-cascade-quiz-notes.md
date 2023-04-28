# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade"?
A: Specificity, source order, inheritance, and importance.

- What does the term "source order" mean with respect to CSS?
A: Source order: When two selectors have the same specificity, the one that appears later in the stylesheet takes precedence.

The order that your CSS rules are written in your stylesheet. The styling provided for an element last in your stylesheet is the styling that will ultimately take effect.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
A: Inheritance is the process by which certain CSS properties on a child HTML element can receive value from a parent element, if no CSS for that property is directly declared on the child element.

Inheritance: Some properties are inherited from parent elements. When a property is not specified on an element, the browser will look to its parent element to see if it has a value for that property.

- List the three selector types in order of increasing specificity.
A: ID, class, and type columns

Specificity: The specificity of a selector determines how much weight it carries in the Cascade. Selectors with higher specificity are given priority over selectors with lower specificity.

- Why is using `!important` considered bad practice?
A: It can make CSS code harder to manage and override.

Importance: The !important keyword can be used to give a rule the highest priority in the Cascade, overriding any other conflicting rules.


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
