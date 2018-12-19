# static-bind

Extremely simple method to bind a static HTML page's form elements to JS 
functionality. The only requirement is that the `id`s of the required elements
are known at compile time (though it is possible to do this dynamically later on
too - an exercise for the reader).


## Installation

`npm i --save static-bind`


## Usage

Simply call `staticBind` once require'd (see below) and supply an object with
desired key names corresponding either to:

* An element's `id`
* A simple object of `id` and one of `click`, `input`, or `change` event 
  listener callbacks.

The result is an object of known handles to elements (only find them from the 
page once) and automatic linking to simple event handlers.


## Example

It can be used to reduce this sort of verbose style:

```js
const button = document.getElementById('my-button');
button.addEventListener('click', (el) => {
  const inputField = document.getElementById('input-field');
  const outputView = document.getElementById('output-view');

  outputView.innerHTML = inputField.value;
});
```

to this clearer, more tightly bound style:

```js
const staticBind = require('static-bind');

let binding;

const onButtonClick = () => {
  binding.outputView.innerHTML = binding.inputField.value;
};

binding = staticBind({
  outputView: 'output-view',
  inputField: { id: 'input-field', click: onButtonClick },
});
```
