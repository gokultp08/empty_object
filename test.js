const empty_object = require('./index')

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

// console.log('empty or not1', empty_object.is_empty_object(testData1))
//false
// console.log('empty or not2', empty_object.is_empty_object(testData2))
//true
// console.log('empty or not3', empty_object.is_empty_object(testData3))
//true
// console.log('empty or not4', empty_object.is_empty_object(testData4))
//false