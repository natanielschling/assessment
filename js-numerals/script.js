var ones = new Array(
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
);

var tens = new Array(
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
);

var thousands = new Array(
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion'
);

arabic2word = function(v, t) {
    var result = '',
        a = Math.round((v % 100 - 0.5)),
        b = Math.round((v / 100) - 0.5) % 10,
        r = Math.round((v / 1000) - 0.5);

    if (v < 1) {
        return 'zero';
    }

    // hundreds
    if (b > 0) {
        result = ones[b] + ' hundred ';
    }

    //from 1 to 19
    if (a < 20) {
        if (v > 20) {
            result += 'and ';
        }
        result += ones[a];
    } else {
        result += tens[Math.round((a / 10) - 0.5)] + ' ' + ones[a % 10];
    }

    // thousands
    if (result) {
        result += ' ' + thousands[t] + ' ';
    }

    // recursivity if it is rest
    if (r > 0) {
        return arabic2word(r, t + 1) + result;
    }
    return result;
}