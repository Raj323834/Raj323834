/*find out revese of a number*/
var ab = 8965832;
var rv = 0;
var lt;
console.log("enter number by user shown here = " + ab);
while (ab > 0) {
    lt = ab % 10;
    rv = rv * 10 + lt;
    ab = Math.floor(ab / 10);
}
console.log('reverse number = ' + rv);
/* palindrome number check */
var ac = 123585321;
var bc = ac;
var vr = 0;
var tl;
console.log("enter number by user shown here = " + ac);
while (ac > 0) {
    tl = ac % 10;
    vr = vr * 10 + tl;
    ac = Math.floor(ac / 10);
}
console.log('reverse number =' + vr);
if (bc == vr)
    console.log("your number is palindrome number = " + bc);
else
    console.log("your number is not palindrome number =" + bc);
/*Number is prime or not*/
var a = 32;
var b = a;
var i;
var count = 0;
if (a < 2)
    console.log("the given number is not a prime number =" + b);
for (i = 1; i <= a; i++) {
    if (a % i == 0)
        count += 1;
}
if (count > 2)
    console.log("the given number is not a prime number = " + b);
else
    console.log("the given number is a prime number =" + b);
/*find factorial of a number */
var love = 12;
var fact = 1;
for (i = 1; i <= love; i++) {
    fact = fact * i;
}
console.log("find a factorial number =" + love);
console.log("factorial of a number = " + fact);
// program to check an Armstrong number of three digits//
var sum = 0;
var number = 153;
var temp = number;
var remainder;
while (temp > 0) {
    remainder = temp % 10;
    sum = sum + remainder * remainder * remainder;
    temp = Math.floor(temp / 10);
}
if (sum == number) {
    console.log("this number is  an Armstrong number = " + number);
}
else {
    console.log("this number is not an Armstrong number = " + number);
}
// program to check an Armstrong number of n digits
var number = 9474;
var sum = 0;
var length = (number + '').replace('.', '').length;
var temp = number;
while (temp > 0) {
    var remainder_1 = temp % 10;
    sum += Math.pow(remainder_1, length);
    temp = Math.floor(temp / 10);
}
if (sum == number) {
    console.log("".concat(number, " is an Armstrong number"));
}
else {
    console.log("".concat(number, " is not an Armstrong number."));
}
