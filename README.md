# html-list-builder

[![npm version](https://img.shields.io/npm/v/html-list-builder.svg)](https://www.npmjs.com/package/html-list-builder)

The HTML List Builder is an npm package that allows you to easily create ordered and unordered lists in HTML with class and id attributes as options. It provides a simple and convenient way to generate lists programmatically.

## Installation

You can install the HTML List Builder package using npm. Run the following command:

```
npm install html-list-builder
```

## Usage

To use the HTML List Builder in your project, require it and call the provided functions:

```
const { createOrderedList, createUnorderedList } = require('html-list-builder');

const items = ['Apple', 'Banana', 'Orange'];
const options = { class: 'fruits', id: 'fruits-list' };

const orderedList = createOrderedList(items, options);
console.log(orderedList);

const unorderedList = createUnorderedList(items, options);
console.log(unorderedList);

```

The `createOrderedList` and `createUnorderedList` functions take an array of items as the first parameter and an options object as the second parameter. The options object can contain `class` and `id`attributes to customize the list element.

## API

### createOrderedList(items, options)

This function generates an ordered list in HTML.

* `items` (Array): An array of strings representing the list items.
* `options` (Object): An optional object with the following properties:
  * `class` (String): The class attribute for the `<ol>` element.
  * `id` (String): The id attribute for the `<ol>` element.

Returns: A string containing the generated ordered list HTML.

### createUnorderedList(items, options)

This function generates an unordered list in HTML.

* `items` (Array): An array of strings representing the list items.
* `options` (Object): An optional object with the following properties:
  * `class` (String): The class attribute for the `<ul>` element.
  * `id` (String): The id attribute for the `<ul>` element.

Returns: A string containing the generated unordered list HTML.