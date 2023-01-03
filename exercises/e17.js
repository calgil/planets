export function minBy(array, callback) {
  if (!array.length) return undefined;
  let minElement = array[0];
  let minValue = callback(minElement);
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    const value = callback(element);
    if (value < minValue) {
      minElement = element;
      minValue = value;
    }
  }
  return minElement;
}

export function maxBy(array, callback) {
  if (!array.length) return undefined;
  let maxElement = array[0];
  let maxValue = callback(maxElement);
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    const value = callback(element);
    if (value > maxValue) {
      maxElement = element;
      maxValue = value;
    }
  }
  return maxElement;
}
