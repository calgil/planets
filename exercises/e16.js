// see e16.md

export function find(array, callback) {
    let returnArray ;

  for (let element of array) {
    if (callback(element)) {
     return returnArray = element
    }
  }
  return returnArray;
}
