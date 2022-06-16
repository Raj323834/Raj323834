
function log(message) {
    console.log(message);
}
var message = "hello world";
log(message);
function doit() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally: ' + i);
}
doit();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, false, 'a',];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
    Color2[Color2["Purple"] = 4] = "Purple";
})(Color2 || (Color2 = {}));
;
