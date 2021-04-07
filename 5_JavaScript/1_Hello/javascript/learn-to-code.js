
// var name = "Jack";
// var age = 23;
// var message = " Hi, my name is " + name + " and I am " + age + " years old!";
// //alert(message);
// console.log(message);

//
// if ( 1==3) {
//   console.log("True");
// }else {
//   console.log("False");
// }
//
// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 4000

// if (nikeSBShoes <= myAccountBalance) {
//   myAccountBalance -= nikeSBShoes;
//   console.log("We just bought some dope shoes!");
//   console.log("Account Ballance: "+ myAccountBalance);
// }else if (nikeSBShoes- coupon <= myAccountBalance) {
//   console.log("We just bought some dope shoes with a coupon!! ");
//   myAccountBalance -= nikeSBShoes - coupon
//   console.log("Account Balance "+ myAccountBalance);
// }else {
//   console.log("You too broke fo shoes braa!");
// }

// console.log(myAccountBalance -= nikeSBShoes - coupon);

// var val1=23;
// var val2="23";
//
// if (val1 == val2) {
//   console.log("True, they are ==");
// }else {
//   console.log("False, not ==");
// }
//
// if (val1 === val2) {
//   console.log("True");
// }else {
//   console.log("False, not ===");
// }
//
//
// if (1==1 && 1==2 || 2==2 && 3==3 ) {
//   console.log("True");
// }else {
//   console.log("False");
// }

// var students = ["Timmy","Janessa","Arun"];
//
// var naughtyList = [];
// naughtyList.push(students[0]);
//
// console.log(students);
// console.log(naughtyList);
// var index= naughtyList.indexOf("Timmy");
// var index2 = students.indexOf("Arun");
//
// if (index > -1) {
//   naughtyList.splice(index, 1);
// }
// console.log(naughtyList);
// console.log(index);
// console.log(index2);
//

// LOOPS
// var total=10;
// for (var x = 0; x < total; x++) {
//   console.log(x);
// }
//
// var students=["John","Jacob","Jingle","Heimer","Smith"];
// console.log(students);
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

//FUNTIONS
//
// function area(length, width) {
//   return length * width;
// }
//
// var area1 = area(10,15);
// console.log(area1);
// console.log(area2=area(22,8));
// console.log(area2=8746);
//
// var rectangleAreas=[]
// rectangleAreas.push(area(22,122));
// rectangleAreas.push(area(21,423));
// rectangleAreas.push(area(51,87));
//
// console.log(rectangleAreas);
//
// var bankBalance = 500;
//
// function makeTransaction(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance-=priceOfSale;
//     console.log("Purchase Sucessful");
//   }else {
//     console.log("Insufficent Funds");
//   }
// }
//
// console.log(bankBalance);
// makeTransaction(79.00);
//
// console.log(bankBalance);
// makeTransaction(2.32);
//
// console.log(bankBalance);
// makeTransaction(10.45);
//
// console.log(bankBalance);
// makeTransaction(450);
//
// // console.log(makeTransaction(10.20));
// console.log(bankBalance);


// Objects
//
// var student0 = {
//   firstName: "Jayne",
//   lastName: "Looo",
//   age: 8
// };
//
// console.log(student0);
//
// // Create new Object
// var student1 = new Object();
// student1.firstname = "John";
// student1.lastName = "Parker";
// student1.age = 7;
//
// var student2 = {};
// student2.firstName = "Zack";
// student2.lastName = "Bobo";
// student2.age = "6";
//
// console.log(student2.firstName);
//
// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);
//
// console.log(students);
//
// for (var index = 0; index < students.length; index++) {
// console.log();(students[index]);
// }
//

var students = [] ;

function student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greeting = function() {
    return " Hi, I'm " + this.firstName + " and I'm "+ this.age + " years old.";
  };
}

students.push( new student("Jenny","Laga",5));
students.push(new student("Mark","Peter",6));
students.push(new student("Nancy","Ferd",8));

for (var i = 0; i < students.length; i++) {
  var student = students[i]
  console.log(student.greeting());
  for (var key in student) {
    console.log(student[key]);
  }
}

// var s1 = new student("Jenny","Laga",5);
// console.log(s1);
// console.log(s1.greeting());











 // resources: MDN, w3schools, jsbin.com
