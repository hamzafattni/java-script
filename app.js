var names = prompt("enter your name");
var chemmarks = +prompt("enter your chemistry marks");
var phymarks = +prompt("enter your physics marks");
var mathmarks = +prompt("enter your math marks");
var Islmarks = +prompt("enter your Islamic marks");
var sindhimarks = +prompt("enter your sindhi marks");
var totalmarks = 500;
var studentmarks = (chemmarks + phymarks + mathmarks + Islmarks + sindhimarks);
var Percentage = studentmarks / totalmarks * 100;
console.log( names + " total marks is " + studentmarks + " Out of " + totalmarks + " And percantage is " + Percentage + "%");
 