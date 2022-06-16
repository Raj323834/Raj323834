/*var i:number;
var j:number;
var k:number;

for( i=3;i<=4;i++)
{
for( j=2;j<i;j++) {
console.log("hello"); }
console.log("WIN"); }


 k=1,
  i=2;
while (++i<6)
    k=k*i;
   
console.log(k);


var x:number;
var y:number;
 x = 2, y = 50; do
{
++x;
 y-= x++;

console.log(y);

 }

while(x <= 10);
console.log(y);

var ctr:number= 0;
for (i=1 ; i<=5; i++){
    for (j=1; j<=5;j+=2)
    ++ctr;
}

 console.log("ans here"+ctr);


var mark:number=50;

if (mark >=90){
console.log("A");
}
else if (mark >=80){
console.log("B");
}
else{
console.log("C");
};


var x:number=97;
var ch:number;
do {
    ch=x;
    console.log(ch);
    if(x%10==0)
    break; ++x; }
    while(x<=100);


var p:number=200;
while(true) {
if(p<100)
break;
p=p-20;
}
console.log(p);
*/
var discount;
var bill = 2586;
discount = bill > 10000 ? bill * 10 / 100 : bill * 5 / 100;
console.log(discount);
