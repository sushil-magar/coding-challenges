function zigzag(a) {
    let result = [];
    let arrCounter = 0;
    let output = [];

    for (let i = 1; i < a.length; i++) {
        if ((a[i] > a[i-1] && a[i] > a[i+1]) || (a[i] < a[i-1] && a[i] < a[i+1])) {
            if (!result[arrCounter]) {
                result[arrCounter] = [a[i-1], a[i]];
            } else {
                result[arrCounter].push(a[i], a[i+1]);
            }
        } else {
            if (result.length) {
                arrCounter++;
            }
        }
    }

    if (result.length) {
        for (let i = 0; i < result.length; i++) {
            output.push(result[i].length);
        }
    }

    return Math.max(...output);
}

const input = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6, 8];

console.log(zigzag(input));