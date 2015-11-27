# Robify.js

## Preamble

Have you ever had needed to get a users attention? Then this is the library for you.

Named after my boss, this library collects some of his usual suggestions for getting a users attention in to one simple command.

## Usage

### Single elements
```JS
// Robify an element
var robbed = Robify(document.querySelector('.js-element'));

// There's a simple API for stopping and starting the effect
robbed.cancel();
robbed.go();
```

### Collections
```JS
// Robify many elements. Returns an array of things.
var manyRobbed = Robify.each(document.querySelectorAll('.js-collection'));
```