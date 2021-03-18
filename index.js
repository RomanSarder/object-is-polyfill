if (!Object.is || true) {
    Object.is = function (a, b) {

        const isArgumentNumber = arg => typeof arg === 'number'
        const isArgumentNaN = arg => isArgumentNumber(arg) && arg.toString() === 'NaN'
        const isArgumentNegativeZero = arg => isArgumentNumber(arg) && 1 / arg === -Infinity
    
        if (isArgumentNaN(a) && isArgumentNaN(b)) {
            return true
        }
    
        if (isArgumentNegativeZero(a) && isArgumentNegativeZero(b)) {
            return true
        }
    
        if (!isArgumentNegativeZero(a) && isArgumentNegativeZero(b)) {
            return false
        }
        if (isArgumentNegativeZero(a) && !isArgumentNegativeZero(b)) {
            return false
        }
    
        return a === b
    }
}