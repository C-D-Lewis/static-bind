/**
 * Simple HTML element/event binding function.
 *
 * @param {object} elements - Object describing the static interactive elements on
 *   the page. Each property can be either just the id, or an object containing the
 *   id and event handlers by name.
 */
module.exports = (elements) => {
  const binding = {};
  Object.keys(elements).forEach((key) => {
    const item = elements[key];
    binding[key] = document.getElementById(item.id || item);
    ['click', 'input', 'change'].filter(p => item[p])
      .forEach(event => binding[key].addEventListener(event, item[event]));
  });
  return binding;
};
