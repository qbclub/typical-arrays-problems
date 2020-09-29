exports.min = function min(array) {
    if (arguments.length) {
        if (!array.length == 0) {
            array.sort(function (a, b) {
                return a - b;
            });
            return array[0]
        }
    }
    return 0;
}

exports.max = function max(array) {
    if (arguments.length) {
        if (!array.length == 0) {
            array.sort(function (a, b) {
                return b - a;
            });
            return array[0]
        }
    }
    return 0;
}

exports.avg = function avg(array) {
    if (arguments.length) {
        if (!array.length == 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return array.reduce(reducer) / array.length
        }
    }
    return 0;

}
