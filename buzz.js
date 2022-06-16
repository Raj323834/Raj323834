var num = 275645;
var choice = 2;
var i;
var a = 500;
var b = 6900;
switch (choice) {
    case 1:
        if (num % 10 == 7 || num % 7 == 0)
            console.log("number is buzz =" + num);
        else
            console.log("number is not buzz =" + num);
        break;
    case 2:
        for (i = (a < b ? a : b); i >= 1; i--) {
            if (a % i == 0 && b % i == 0)
                break;
        }
        ;
        console.log(i);
        break;
    default:
        console.log("invalid enter case number");
}
