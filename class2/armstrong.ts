var ab:number=153;
var ba:number=ab;
var rv:number=0;
var lt:number;
console.log("enter number by user shown here = "+ab);

while(ab>0){
    lt=ab%10;
    rv=rv+lt*lt*lt; 
    ab=Math.floor(ab/10);
}

if(rv==ba)
 console.log("your number is armstrong number = "+ba);
else
 console.log("your number is not armstrong number ="+ba);