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


arabic2en = function(v) {
    var result = '';

    a = Math.round(v % 100);
    //from 1 to 19
    if (a < 20) {
        result += ones[a];
    } else {
        result += tens[Math.round((a / 10) - 0.5)] + ' ' + ones[a % 10];
    }

    return result;
}