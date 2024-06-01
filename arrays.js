// Here are some arrays functions examples

// Array creation
// const arr = new Array()
// const arr = []


const arr =  new Array(0, 1, 2, 3, 4)
const arr2 = [5,6,7,8,9]

console.log(arr)

console.log('\nInsert anything in the end')
arr.push(5)
console.log(arr)

console.log('\nInsert anything in the start')
arr.unshift(-1)
console.log(arr)

console.log('\nRemove last element')
arr.pop()
console.log(arr)

console.log('\nRemove first element')
arr.shift()
console.log(arr)

console.log('\nInsert any element at the middle')
arr.splice(3, 0, 2.5)
console.log(arr)


console.log('\nRemove any element at the middle')
arr.splice(3, 1)
console.log(arr)



// Concating 2 arrays
const concatArr = arr.concat(arr2)
console.log('\nConcat\n', concatArr)

// Getting the length of array
console.log('\nArray size\n',arr.length)
console.log('\nDivide array\n', concatArr.slice(0, 3))


console.log('\nGetting interator keys')
const keys = arr.keys()
console.log(keys.next().value)
console.log(keys.next().value)
console.log(keys.next().value)

console.log('\nGetting interator values')
const values = arr.values()
console.log(values.next().value)
console.log(values.next().value)
console.log(values.next().value)


console.log('\nGetting interator entries')
const entries = arr.entries()
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)

console.log('\nSum array values')
const sumArr = arr.reduce((acc, curr) => acc += curr, 0)
console.log(sumArr)

console.log('\nMapping elements')
const mappedArr = arr.map(el => el % 2 === 0)
console.log(mappedArr)
console.log(arr)

console.log('\nFiltering elements')
const filteredArr = arr.filter(el => el > 2)
console.log(filteredArr)
console.log(arr)

console.log('\nFinding an element (it return only one element)')
const findArr = arr.find(el => el > 2)
console.log(findArr)

console.log('\nTest if exists any condition')
const someArr = arr.some(el => el ===2)
console.log(someArr)

console.log('\nTest if all elements match with condition')
const everyArr = arr.every(el => el === 2)
console.log(everyArr)

console.log('\nSorting arr')
const sortedArrDesc = arr.sort((a, b) => b - a)
console.log(sortedArrDesc)
console.log(arr)
arr.sort((a, b) => a - b)

console.log('\nrevert array')
console.log(arr.reverse())
console.log(arr)
console.log(arr.reverse())

console.log('\nConverting to string')
console.log(arr.toString())
console.log(arr)

console.log('\nConverting to string changing the signals')
console.log(arr.join('-'))
console.log(arr)

console.log('\nFind using at')
console.log(arr.at(1))
console.log(arr.at(-2))
console.log(arr[1])
console.log(arr[arr.length -2])

console.log('\nFill positions')
const arrForFill1 = [...arr]
const arrForFill2 = [...arr]
console.log(arrForFill1.fill(1))
console.log(arrForFill1)
console.log(arrForFill1.fill(2, 3))
console.log(arr)


console.log('\nCreate a new array with option')
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]


console.log('\nFlatting array')
const multiArray = [1,2,3,[4,5,6,[7,7,[8,8,[9,9,]]]]]
console.log(multiArray.flat())
console.log(multiArray.flat(2))
console.log(multiArray.flat(Infinity))

console.log(multiArray.includes(3))
console.log(multiArray.includes(8))