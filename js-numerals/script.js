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


arabic2en = function(v, t) {
    var result = '';

    a = Math.round((v % 100 - 0.5));
    b = Math.round((v / 100) - 0.5) % 10;
    r = Math.round((v / 1000) - 0.5);

    if(b > 0) { // hundreds
        result = ones[b] + ' hundred ';
    }
    //from 1 to 19
    if (a < 20) {
        result += ones[a];
    } else {
        result += tens[Math.round((a / 10) - 0.5)] + ' ' + ones[a % 10];
    }
    if(result) { // thousands
        result += thousands[t] + ' ';
    }     
    if(r > 0) { // recursivity if it is rest
        return arabic2en(r, t + 1) + result;
    }

    return result;
}