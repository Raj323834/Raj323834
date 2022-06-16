/*a. A BUZZ number is the number which either ends with 7 or divisible by 7. */
var buzz:number=5000;
var choice:number=2;
var num:number=1500;
var res:number;
console.log("enter number = "+buzz);
console.log("enter case = "+choice);
console.log("enter number second = "+num);

switch(choice){
case 1:    

if(buzz%7==0 || buzz%10==7)
 console.log("number is buzz =" +buzz);
 else
 console.log("number is not buzz =" +buzz);
 break;

 /*b. GCD (Greatest Common Divisor) of two integers is calculated by
  continued division method. Divide the larger number by the smaller,
   the remainder then divides the previous devisor. 
 The process is repeated till the remainder is zero. The divisor then results the GCD.*/

 case 2:
      for(res=num%buzz;res>0;res=num%buzz){
        num=buzz;
        buzz=res;
        }
        
        console.log(buzz);
        break;

 default:
     console.log("Enter wrong input For case");
}

/*Design a class to overload a function compute() as follows: 
(i) void compute(int,char): to compute the square of the integer 
argument if the given character argument is ‘s’ otherwise find its cube.
var s:string="12";
var ch:number=12;
var result:number;
if(ch===+s){
    result=+s*+s;
}
 else
 {
     result=+s*+s*+s;
 }
console.log(result);*/





