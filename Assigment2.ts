/*1.Write a program to input 3 unique integers and print the smallest among them. */

console.log("1.Write a program to input 3 unique integers and print the smallest among them.");

var a:number=50; 
var b:number=60; 
var c:number=70; 

if(a<b && a<c)
			console.log("Smallest:"+a);
		else if(b<a && b<c)
		console.log("Smallest:"+b);
		else
    console.log("Smallest:"+c);

/* 2.Write a program to accept a mark obtained by a student in computer science and print the
grades accordingly: Marks Grade Above 90 A
70 to 89 B 50 to 69 C below 50 D */

console.log("Write a program to accept a mark obtained by a student in computer science and print the grades accordingly");

var m:number=60;
        console.log("obtained marks = "+m);
        if (m>=90)
        console.log("Grade=A");
        else if (m>=70)
        console.log("Grade=B");
        else if (m>=50)
        console.log("Grade=C");
        else
        console.log("Grade=D");

/*  quesrion 3*/
console.log("Question 3");

var cost:number=4500;
var amt:number;
console.log(cost);

if (cost <= 2000.0) {
  amt = cost - (cost * 5 / 100);
  
}
else if (cost <= 5000.0) {
  amt = cost - (cost * 25 / 100);
 
}
else if (cost <= 10000.0) {
  amt = cost - (cost * 35 / 100);
  
}
else {
  amt = cost - (cost * 50 / 100);
  
}

console.log("Amount to be paid: " + amt);

/*  question 4:- Write a program based on the above criteria, to input name, address,
amount of purchase and the type of purchase (L for Laptop and D for Desktop) by a customer.
Compute and print the net amount to be paid by a customer along with his name and address.
 (Hint: discount = (discount rate/100)* amount of purchase Net amount = amount of purchase – discount) */
console.log("Question number 4:-");
 var type:string="L";
 console.log("use L for laptop and D for Desktop = "+type);
 var amount:number=30000;
 console.log("Enter total bill = " +amount);
 var disc:number;
 var cost:number;

 if(type=="L"){
  if(amount<=25000){
    disc=0.0;
   }
   else if(amount<=57000){
    disc=5/100*amount;
   }
   else if(amount<=100000){
    disc=7.5/100*amount;
   }
   else {
    disc=10/100*amount;
   }

 }
 else{
  if(amount<=25000){
    disc=5/100*amount;
   }
   else if(amount<=57000){
    disc=7.5/100*amount;
   }
   else if(amount<=100000){
    disc=10/100*amount;
   }
   else {
    disc=15/100*amount;
   }
 }

 console.log("Discount on Purchase = "+disc);
 cost=amount-disc;
 console.log("Amount to be paid by user after discount = "+cost);




/* 5. Write programs for each of the following to print the series:
a. 2, 4, 6, 8, 10, … , 100
b. 99, 97, 95, 93, 91, …, 1
c. 7, 14, 21, 28, 35, …, 70
d. 80, 72, 64, 56, 48, …, 8
e. 1, 4, 9, 16, 25, 36, …. 100
f. 0, 3, 8, 15, 24, 35, …, 99
g. 1, 2, 4, 7, 11, 16, 22, 29, …, upto n terms. [Take n as input]
h. 2, 4, 8, 14, 22, 32, 44, 59, …, upto n terms. [Take n as input]
i. 1, 2, 5, 10, 17, 26, 37, 50, …, upto n terms. [Take n as input]
j. 1, 1, 2, 3, 5, 8, 13, 21, 34, …, upto n terms. [Take n as input]
k. 1, 2, 5, 12, 29, 70, 169, …, upto n terms. [Take n as input]*/

console.log("Write programs for each of the following to print the series:");

var aub:number;
for(aub=1;aub<=100;aub++){
  aub=aub+1;
  console.log(+aub);
};



/* 6. Write a program to find the sum of all 3 digit odd natural numbers, which are multiples of 5.*/
console.log("6. Write a program to find the sum of all 3 digit odd natural numbers, which are multiples of 5.");

var i:number;
var s:number=0;
for(i=101;i<=999;i+=2)
{
  if(i%5==0)
  console.log("odd number 3 ="+i);
  s=s+i;
}
console.log("sum of all 3 digit add natural number "+s);




/*7. Write a program to input an integer and check whether it is a prime number 
or not.*/
console.log("7. Write a program to input an integer and check whether it is a prime number or not.");
var num:number = 29;
var flag:boolean = false;
    for (i = 2; i <= num / 2; ++i) {
      // condition for nonprime number
      if (num % i == 0) {
        flag = true;
        break;
      }
    }

    if (!flag)
      console.log(num + " is a prime number.");
    else
      console.log(num + " is not a prime number.");