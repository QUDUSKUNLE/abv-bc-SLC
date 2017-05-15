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
        let array = [],
            upperLimit = Math.sqrt(n),
            output = [];
        for (let i = 1; i <= n; i++) {
            array.push(true);
        }
        for (let i = 2; i <= upperLimit; i++) {
            if (array[i]) {
                for (let j = i * i; j < n; j += i) {
                    array[j] = false;
                }
            }
        }
        for (let i = 2; i < n; i++) {
            if (array[i]) {
                output.push(i);
            }
        }
        return output;
    }
}