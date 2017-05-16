getPrimes = (n) => {
    // Check if input is between 0
    if (n === 0) {
        return "Invalid Input";
        // Check if input is type string
    } else if (typeof(n) === "string") {
        return false;

        // if input is a non positive 
    } else if (n < 0) {
        return false;
        // if input is an object
    } else if (typeof(n) === "object") {
        return false;

    } else if (n === undefined) {
        return "No input provided";
    } else {
        let Num = [],
            maxValue = Math.sqrt(n),
            result = [];
        for (let i = 1; i <= n; i++) {
            Num.push(true);
        }
        for (let i = 2; i <= maxValue; i++) {
            if (Num[i]) {
                for (let j = i * i; j < n; j += i) {
                    Num[j] = false;
                }
            }
        }
        for (let i = 2; i < n; i++) {
            if (Num[i]) {
                result.push(i);
            }
        }
        return result;
    }
}


module.exports = getPrimes;