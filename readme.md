# DZ Custom-rating

To use it, you just need to find element, and then pass it to the class.

## Installation
1. Via npm
```cmd
npm i @dz8540/custom-rating
```
2. Manually - all you need is in the "Dist" folder.
```html
<link href="/Your-path/customRating.min.css" rel="stylesheet">
<script src="/Your-path/CustomRating.min.js"></script>
```

## Example

### HTML
```html
<div class="Rating" data-name="Component name">
  <input type="hidden" name="" data-id="input" value="">

  <button class="Rating__star" data-value="5">
    <span class="Rating__icon Rating__icon--default">&#9734;</span>
    <span class="Rating__icon Rating__icon--active">&#9733;</span>
  </button>

  <button class="Rating__star" data-value="4">
    <span class="Rating__icon Rating__icon--default">&#9734;</span>
    <span class="Rating__icon Rating__icon--active">&#9733;</span>
  </button>

  <button class="Rating__star" data-value="3">
    <span class="Rating__icon Rating__icon--default">&#9734;</span>
    <span class="Rating__icon Rating__icon--active">&#9733;</span>
  </button>

  <button class="Rating__star" data-value="2">
    <span class="Rating__icon Rating__icon--default">&#9734;</span>
    <span class="Rating__icon Rating__icon--active">&#9733;</span>
  </button>

  <button class="Rating__star" data-value="1">
    <span class="Rating__icon Rating__icon--default">&#9734;</span>
    <span class="Rating__icon Rating__icon--active">&#9733;</span>
  </button>
</div>
```

### JS
```js
let element = document.querySelector(element);
new Rating(element);
```

## Instruction:
1. Don't remove all default classes.
2. Don't remove all default datalist attributes.
3. Pass your values to 'data-value' attributes from button tag.
4. Values must be assigned from bottom to top in ascending order.
5. Component maintains 'data-name' attribute, for you can set component name.

## End
That's all! Enjoy this (∩^o^)⊃━☆