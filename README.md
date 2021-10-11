Returns true if every value is either undefined or null or zero or empty string.

const testData1 = {
    'name': 'test-name',
    'id': undefined
}

const testData2 = {
    'name': '',
    'id': 0
}

const testData3 = {
    'name': '',
    'id': 0,
    'nicknames': [null, undefined]
}

const testData4 = {
    'name': '',
    'id': 0,
    'nicknames': [testData1]
}

console.log(empty_object.is_empty_object(testData1))
//false
console.log(empty_object.is_empty_object(testData2))
//true
console.log(empty_object.is_empty_object(testData3))
//true
 console.log(empty_object.is_empty_object(testData4))
//false