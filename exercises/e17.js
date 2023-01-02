export function minBy(array) {
    return array.sort((a, b) => a.age - b.age)[0]
}

export function maxBy(array) {
    return array.sort((a, b) => b.age - a.age)[0]
}
