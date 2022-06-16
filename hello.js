/*console.log("1.Write a program to input 3 unique integers and print the smallest among them.");

var a:number=50;
var b:number=60;
var c:number=70;

if(a<b && a<c)
      console.log("Smallest:"+a);
    else if(b<a && b<c)
    console.log("Smallest:"+b);
    else
    console.log("Smallest:"+c);

var dis:number;
var cost:number=20000;
var Amount:number;

if(cost<=20000){
    dis=cost*5/100;
    console.log(dis);
}
else if(cost<=5000){
    dis=cost*25/100;
    console.log(dis);
}
else if(cost<=10000){
    dis=cost*35/100;
    console.log(dis);
}
else{
    dis=cost*50/100;
    console.log(dis);
}

Amount=cost-dis;
console.log(Amount);
*/
console.log("Question number 4:-");
var type = "L";
console.log("use L for laptop and D for Desktop = " + type);
var amount = 30000;
console.log("Enter total bill = " + amount);
var disc;
var cost;
if (type == "L") {
    if (amount <= 25000) {
        disc = 0.0;
    }
    else if (amount <= 57000) {
        disc = 5 / 100 * amount;
    }
    else if (amount <= 100000) {
        disc = 7.5 / 100 * amount;
    }
    else {
        disc = 10 / 100 * amount;
    }
}
else {
    if (amount <= 25000) {
        disc = 5 / 100 * amount;
    }
    else if (amount <= 57000) {
        disc = 7.5 / 100 * amount;
    }
    else if (amount <= 100000) {
        disc = 10 / 100 * amount;
    }
    else {
        disc = 15 / 100 * amount;
    }
}
console.log("Discount on Purchase = " + disc);
cost = amount - disc;
console.log("Amount to be paid by user after discount = " + cost);
/*ggddggghgh*/
var cost = 58000;
var disc;
var paid;
var type = "D";
if (type = "L") {
    if (cost <= 25000) {
        disc = cost * 0 / 100;
    }
    else if (cost <= 57000) {
        disc = cost * 5 / 100;
    }
    else if (cost <= 100000) {
        disc = cost * 7.5 / 100;
    }
    else {
        disc = cost * 10 / 100;
    }
}
else {
    if (cost <= 25000) {
        disc = cost * 5 / 100;
    }
    else if (cost <= 57000) {
        disc = cost * 7.5 / 100;
    }
    else if (cost <= 100000) {
        disc = cost * 10 / 100;
    }
    else {
        disc = cost * 15 / 100;
    }
}
console.log("total shoping = " + cost);
console.log("discount offer = " + disc);
paid = cost - disc;
console.log('FINAL PRICE =' + paid);
