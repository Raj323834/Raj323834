var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternativeway = message.endsWith('c');
var log = function (message) {
    console.log(message);
};
var dolog = function () { return console.log(); };
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
