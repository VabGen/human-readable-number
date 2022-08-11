module.exports = function toReadable(number) {
    const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const doubleFigures = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const Single = (num, array) => {
        let count;
        for (let key in array) {
            if (key == num) {
                count = array[key];
            }
        }
        return count;
    }

    const Double = (num, array) => {
        let count;
        for (let key in array) {
            if (key == num[1]) {
                count = array[key];
            }
        }
        return count;
    }

    const Dozen = (num, array, callback) => {
        let count;
        for (let i in array) {
            key = i;
            if (i == num[0] && num[1] !== '0') {
                count = `${array[key]} ${callback(num[1], singleDigits)}`;
            } else if (i == num[0]) {
                count = array[key]
            }
        }
        return count;
    }

    const Hundreds = (num, callback) => {
        let count;
        const hundred = 'hundred';
        if (num == '100') {
            return count = `${hundred}`
        }
        let slicNum = num.slice(1)
        count = `${callback(num[0])} ${hundred} ${callback(slicNum)}`;
        return count;
    }
    let str = number.toString();
    if (str.length === 1) {
        return Single(str, singleDigits)
    }
    if (str.length === 2 && str[0] === '1') {
        return Double(str, doubleFigures)
    }
    if (str.length === 2) {
        return Dozen(str, dozens, Single)
    }
    if (str.length === 3) {
        return Hundreds(str, module.exports) //toReadable
    } else { return 'Enter a three-digit number'; }

    
}