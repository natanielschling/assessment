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
 ' thousand',
 ' million',
 ' billion',
 ' trillion',
 ' quadrillion',
 ' quintillion',
 ' sextillion',
 ' septillion',
 ' octillion',
 ' nonillion'
);


arabic2en = function(v) {
    var result = '';

    a = Math.round((v % 100 - 0.5));
    b = Math.round((v / 100 ) - 0.5 ) % 10;

    if(b > 0) { // hundreds
        result = ones[b] + ' hundred ';
    }
    //from 1 to 19
    if (a < 20) {
        result += ones[a];
    } else {
        result += tens[Math.round((a / 10) - 0.5)] + ' ' + ones[a % 10];
    }

    return result;
}