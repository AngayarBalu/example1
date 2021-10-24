var a = 0;
function printEachMark(head, total_marks, num1) {
    if (head.indexOf("any one") != -1) {
        a = total_marks / 1;
    }
    else if (head.indexOf("any two") != -1) {
        a = total_marks / 2;
    }
    else if (head.indexOf("any three") != -1) {
        a = total_marks / 3;
    }
    else if (head.indexOf("any four") != -1) {
        a = total_marks / 4;
    }
    else if (head.indexOf("any five") != -1) {
        a = total_marks / 5;
    }
    else if (head.indexOf("any six") != -1) {
        a = total_marks / 6;
    }
    else if (head.indexOf("any seven") != -1) {
        a = total_marks / 7;
    }
    else if (head.indexOf("any eight") != -1) {
        a = total_marks / 8;
    }
    else if (head.indexOf("any nine") != -1) {
        a = total_marks / 9;
    }
    else if (head.indexOf("any ten") != -1) {
        a = total_marks / 10;
    }
    else {
        a = total_marks / num1;
    }
    return a;
}

var b = 0;
function printNumQuestions(head, no_of_questions) {
    if (head.indexOf("any one") != -1) {
        b = 1;
    }
    else if (head.indexOf("any two") != -1) {
        b = 2;
    }
    else if (head.indexOf("any three") != -1) {
        b = 3;
    }
    else if (head.indexOf("any four") != -1) {
        b = 4;
    }
    else if (head.indexOf("any five") != -1) {
        b = 5;
    }
    else if (head.indexOf("any six") != -1) {
        b = 6;
    }
    else if (head.indexOf("any seven") != -1) {
        b = 7;
    }
    else if (head.indexOf("any eight") != -1) {
        b = 8;
    }
    else if (head.indexOf("any nine") != -1) {
        b = 9;
    }
    else if (head.indexOf("any ten") != -1) {
        b = 10;
    }
    else {
        b = no_of_questions;
    }
    return b;
}


function integer_to_roman(num) {
    if (typeof num !== 'number')
        return false;

    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;

}


function integer_to_roman1(num) {
    if (typeof num !== 'number')
        return false;

    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman_num = "",
        i = 3;
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
}


function numberToWords(number) {
    var digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var elevenSeries = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var countingByTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var shortScale = ['', 'thousand', 'million', 'billion', 'trillion'];

    number = number.toString(); number = number.replace(/[\, ]/g, ''); if (number != parseFloat(number)) return 'not a number'; var x = number.indexOf('.'); if (x == -1) x = number.length; if (x > 15) return 'too big'; var n = number.split(''); var str = ''; var sk = 0; for (var i = 0; i < x; i++) { if ((x - i) % 3 == 2) { if (n[i] == '1') { str += elevenSeries[Number(n[i + 1])] + ' '; i++; sk = 1; } else if (n[i] != 0) { str += countingByTens[n[i] - 2] + ' '; sk = 1; } } else if (n[i] != 0) { str += digit[n[i]] + ' '; if ((x - i) % 3 == 0) str += 'hundred '; sk = 1; } if ((x - i) % 3 == 1) { if (sk) str += shortScale[(x - i - 1) / 3] + ' '; sk = 0; } } if (x != number.length) { var y = number.length; str += 'point '; for (var i = x + 1; i < y; i++) str += digit[n[i]] + ' '; } str = str.replace(/\number+/g, ' '); return str.trim();

}


function ArrayToObject(arr) {
    var obj = {};
    for (var i = 1; i <= arr.length; i++) {
        obj[i] = arr[i - 1];
    }
    return obj
}

function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}