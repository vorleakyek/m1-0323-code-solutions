# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
A: Static positioning is the default that every element gets. It just means "put the element into its normal position in the document flow

- How does setting `position: relative` on an element affect document flow?
A: When you set position: relative on an element, it does not affect the document flow like position: absolute or position: fixed does. The element is still positioned according to the normal flow of the document, but it establishes a new positioning context for its children.

- How does setting `position: relative` on an element affect where it appears on the page?
A: Setting position: relative on an element allows you to create a new positioning context for its descendants and move the element relative to its normal position, without affecting the document flow.

Note:
When you set position: relative on an element, you can use the top, right, bottom, and left properties to move the element relative to its normal position in the document flow. For example, setting top: 10px will move the element down by 10 pixels from its normal position.

- How does setting `position: absolute` on an element affect document flow?
A: When you set position: absolute on an element, it is removed from the normal document flow.

- How does setting `position: absolute` on an element affect where it appears on the page?
A: Absolutely positioned elements position themselves within the first non-static ancestor they have.

Note:
Its position is determined relative to the nearest positioned ancestor or to the initial containing block if no positioned ancestor is found.

- How do you constrain an absolutely positioned element to a containing block?
A: Set the containing block's position property to something other than the default value of static. This creates a new positioning context for the absolutely positioned element, and its position is then calculated relative to the containing block.

- What are the four box offset properties?
A: The box offset properties, top , right , bottom , and left , specify how elements may be positioned, and in which direction. These offset properties only work on elements with a relative , absolute , or fixed positioning value.

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
