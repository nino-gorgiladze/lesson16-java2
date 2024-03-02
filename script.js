'use strict'

// 1. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 10, 50, 6, 7, 8, 11, 6, 3, 9

let numbersMasiv = [10, 50, 6, 7, 8, 11, 6, 3, 9];

function numbersSum(numbers) {
  let sum = 0;
  for (let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
  }
  return sum;
}

let result = numbersSum(numbersMasiv);
console.log(result);



//2.  ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: // 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

function printName(user) {
    if (user.isloggedin) {
        return user.firstname + user.lastname;
    } 
    else {
        return false;
    }
}



// 3. შექმენით ფუნქცია რომელმაც ამ რიცხვებიდან უნდა დააბრუნოს მაქსიმალური:

let array = [65, 15, 20, -10, 40, 11]

function maxNum() {
    let maxValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    console.log(maxValue);
}
maxNum();


// 4. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

function checkNum(number) {
    if (number % 2 == 0) {
        console.log("this number is even");
    } else {
        console.log("this number is odd")
    }
}
checkNum(46);


//5. [1,2,3,4,5]-dan for ციკლის საშუალებით მიიღეთ reverse ვერსია, ანუ 5,4,3,2,1

let array5 = [1, 2, 3, 4, 5];
let reverseArray5 = [];
for (let i = array5.length - 1; i >= 0; i--) {
    reverseArray5.push(array5[i]);
}

console.log(reverseArray5);


//6.ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი. თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულწლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 

let agefnc = (birthYear) => {
    let age = 2024 - birthYear;
    let ageResultat = age >= 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
    return ageResultat;
};
let resultat = agefnc(1991);
console.log(resultat);