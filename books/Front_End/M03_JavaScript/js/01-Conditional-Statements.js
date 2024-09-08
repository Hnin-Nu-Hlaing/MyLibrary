// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 20;
var expression1 = x < 25;
var expression2 = x > 50;

// TODO: Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log(" T, T");
}
else if (expression1) {
    console.log("T, F");
}
else if (expression2) {
    console.log("F, T");
}
else {
    console.log ("F, F");
}