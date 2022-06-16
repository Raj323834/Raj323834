/*1.Using overloading technique, write methods to:
• accept two int type data as parameters and return their sum. */ 

//Function with string type parameter  
function add(a:string, b:string): string;  
//Function with number type parameter  
function add(a:number, b:number): number;  
//Function Definition  
function add(a: any, b:any): any {  
    return a + b;  
}  
//Result  
console.log("Addition: " +add("Hello ", "JavaTpoint"));   
console.log("Addition: "+add(30, 20));  















































/*Function overloading in a class*/
class A  
{  
    public foo(s: string): number;  
    public foo(n: number): string;  
    public foo(arg: any): any   
    {  
        if (typeof(arg) === 'number')  
            return arg.toString();  
        if (typeof(arg) === 'string')  
            return arg.length;  
    }  
}  
let obj = new A();  
console.log("Result: " +obj.foo(101));  
console.log("Length of String: " +obj.foo("JavaTpoint"));  

/*2:-accept three int type data as parameters and return their sum.*/

