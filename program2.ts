function log(message) {
    console.log(message);
}

var message="hello world";
log(message);


function doit(){
 for(var i=0; i<5;i++){
     console.log(i);
 }
 console.log('finally: ' +i);
}
doit();


let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, false, 'a',];


const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;


enum Color {Red, Green, Blue};

let backgroundColor = Color.Red;

enum Color2 {Red=0, Green=1, Blue=3, Purple=4};

