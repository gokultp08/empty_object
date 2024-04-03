
const isNil = (data) => {
    if (data === undefined || data === null) {
        return true
    }
    return false
}

const isEmptyObject = (obj) => {
    if (!isNil(obj) && typeof (obj) === 'object') {
        const keys = Object.keys(obj)
        if (keys.length > 0) {
            for (const [index, element] of keys.entries()) {
                if (!isNil(obj[element])) {
                    if (typeof (obj[element]) === 'string') {
                        if (!isEmptyString(obj[element])) return false
                    } else if (typeof (obj[element]) === 'number') {
                        if (obj[element] > 0) {
                            return false
                        }
                    } else if (typeof (obj[element]) === 'array') {
                        const arr = [...obj[element]]
                        if (arr.length > 0) {
                            if (!isEmptyArray(arr)) return false
                        }
                    } else if (typeof (obj[element]) === 'object') {
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
