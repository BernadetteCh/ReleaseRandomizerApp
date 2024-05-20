export function chooseElementByRandom(elements) {
  const keys = Object.keys(elements);
  return elements[keys[(keys.length * Math.random()) << 0]];
}
