/*1.Using overloading technique, write methods to:
• accept two int type data as parameters and return their sum. */
//Function Definition  
function add(a, b) {
    return a + b;
}
//Result  
console.log("Addition: " + add("Hello ", "JavaTpoint"));
console.log("Addition: " + add(30, 20));
/*Function overloading in a class*/
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var obj = new A();
console.log("Result: " + obj.foo(101));
console.log("Length of String: " + obj.foo("JavaTpoint"));
/*2:-accept three int type data as parameters and return their sum.*/
