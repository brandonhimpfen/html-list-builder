const cheerio = require('cheerio');

function createOrderedList(items, options = {}) {
  const { class: className, id } = options;
  const $ = cheerio.load('<ol></ol>');
  const $list = $('ol');

  if (className) {
    $list.attr('class', className);
  }

  if (id) {
    $list.attr('id', id);
  }

  items.forEach((item) => {
    const $item = cheerio.load(`<li>${item}</li>`)('li');
    $list.append($item);
  });

  return $.html('ol');
}

function createUnorderedList(items, options = {}) {
  const { class: className, id } = options;
  const $ = cheerio.load('<ul></ul>');
  const $list = $('ul');

  if (className) {
    $list.attr('class', className);
  }

  if (id) {
    $list.attr('id', id);
  }

  items.forEach((item) => {
    const $item = cheerio.load(`<li>${item}</li>`)('li');
    $list.append($item);
  });

  return $.html('ul');
}

module.exports.createOrderedList = createOrderedList;
module.exports.createUnorderedList = createUnorderedList;