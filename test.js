const { createOrderedList, createUnorderedList } = require('./index');

const items = ['Apple', 'Banana', 'Orange'];
const options = { class: 'fruits', id: 'fruits-list' };

const orderedList = createOrderedList(items, options);
console.log(orderedList);

const unorderedList = createUnorderedList(items, options);
console.log(unorderedList);
