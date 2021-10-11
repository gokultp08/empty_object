
const isNil = (data) => {
    if (data === undefined || data === null) {
        return true
    }
    return false
}

const isEmptyObject = (obj) => {
    if (!isNil(obj) && typeof (obj) === 'object') {
        const keys = Object.keys(obj)
        // console.log('keys', keys)
        if (keys.length > 0) {
            for (const [index, element] of keys.entries()) {
                // console.log('inside keys loop', obj[element], typeof (obj[element]))
                if (!isNil(obj[element])) {
                    if (typeof (obj[element]) === 'string') {
                        // console.log('type string', obj[element])
                        if (!isEmptyString(obj[element])) return false
                    } else if (typeof (obj[element]) === 'number') {
                        // console.log('type number', obj[element])
                        if (obj[element] > 0) {
                            return false
                        }
                    } else if (typeof (obj[element]) === 'array') {
                        const arr = [...obj[element]]
                        // console.log('type array', arr)
                        if (arr.length > 0) {
                            if (!isEmptyArray(arr)) return false
                        }
                    } else if (typeof (obj[element]) === 'object') {
                        // console.log('type obj', obj[element])
                        if (!isEmptyObject(obj[element])) return false
                    }
                }
            }
        }
    }
    return true
}

const isEmptyString = (str) => {
    if (!isNil(str)) {
        if (str.trim().length > 0) {
            return false
        }
    }
    return true
}

const isEmptyArray = (arr) => {
    if (!isNil(arr)) {
        if (arr.length > 0) {
            arr.forEach(item => {
                if (!isNil(item)) {
                    if (typeof (item) === 'string') {
                        if (!isEmptyString()) return false
                    } else if (typeof (item) === 'number') {
                        if (item > 0) {
                            return false
                        }
                    }
                    else if (typeof (item) === 'array') {
                        if (!isEmptyArray(item)) return false
                    } else if (typeof (item) === 'object') {
                        if (!isEmptyObject(item)) return false
                    }
                }
            })
        }
    }
    return true
}


module.exports = {
    isEmptyObject: isEmptyObject,
    isEmptyString: isEmptyString,
    isEmptyArray: isEmptyArray
}