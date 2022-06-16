let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeway = ( message as string).endsWith('c');

let log = function(message){
    console.log(message);
}
let dolog = () => console.log();


interface point{
    x: number,
    y: number
}
let drawPoint = (point: {x: number, y: number}) =>{
    //...
}
drawPoint({
    x: 1,
    y: 2
});