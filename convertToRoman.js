var convertToRoman = function (num) {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    numCount = num;
    num = "";

    for (var i = 0; i < decimal.length; i++) {

        while (decimal[i] <= numCount) {
            num += roman[i];
            numCount -= decimal[i];

        }
    }

    return num;
};

    for (i = 0; i <= 1000; i++) {
          console.log(convertToRoman(i));
    }