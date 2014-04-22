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

arabic2en = function(v) {
    var result = '';

    a = Math.round(v % 100);
    //from 1 to 19
    if (a < 20) {
        result += ones[a];
    } else {
        result = 'not yet';
    }

    return result;
}