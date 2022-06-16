var ab = 153;
var ba = ab;
var rv = 0;
var lt;
console.log("enter number by user shown here = " + ab);
while (ab > 0) {
    lt = ab % 10;
    rv = rv + lt * lt * lt;
    ab = Math.floor(ab / 10);
}
if (rv == ba)
    console.log("your number is palindrome number = " + ba);
else
    console.log("your number is not palindrome number =" + ba);
