1.  //Write a program to find the sum and difference between 25 and 16 using variables in different lines.//

console.log("Write a program to find the sum and difference between 25 and 16 using variables in different lines.");

var num1:number=25;
console.log("number 1 enter =" +num1);
var num2:number=16;
console.log("number 2 enter ="+num2);
var sum:number=num1+num2;
var sub:number=num1-num2;
console.log("Addition of Two Number = " +sum);
console.log("difference between two number = "+sub);


//2.  Write a program using variables to find the sum of three numbers say 15, 36 and 45
// and subtract the result from 100 using variables.

console.log("\nWrite a program using variables to find the sum of three numbers say15, 36 and 45 and subtract the result from 100 using variables.");

var num3:number=15;
console.log("number 1 enter =" +num3);
var num4:number=36;
console.log("number 2 enter ="+num4);
var num5:number=45;
console.log("number 3 enter =" +num5);
var num6:number=100;
console.log("number 4 enter ="+num6);
var add:number=num3+num4+num5;
console.log("sum of three number shown = " +add);
var final:number=num6-add;
console.log("value after subtract from 100 = "+final);

//3. Write a program to manually input the Principal, Rate and Time and calculate the
//Simple Interest.
console.log("\nWrite a program to manually input the Principal, Rate and Time and calculate the Simple Interest.");

var p:number=25000;
var r:number=10;
var t:number=2;
console.log("Principle = "+p+"Rupees");
console.log("Rate = "+r+"%");
console.log("Time = "+t+"year");
var si:Number=(p*r*t)/100;
console.log("Simple Intrest = " +si);

//4. Write a program using ternary operator to check whether 27 is a multiple of 3 or not.
console.log("\nWrite a program using ternary operator to check whether 27 is a multiple of 3 or not.");

console.log((27%3==0)?"Multiple of 3":"Not a multiple of 3");

//5.  Write a program to display the names of five fruits 
//with a single console.log(); statement, but in different lines.

console.log("\nWrite a program to display the names of five fruits with a single console.log(); statement, but in different lines.");

console.log("Apple\nMango\nJackfruit\nGrapees\nGuava");

//trying second way...
console.log("\ntrying second way");


enum color {Red, Green, Blue, Purple};
console.log(color);