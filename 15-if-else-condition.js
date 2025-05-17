
// 1 

function applyDiscount(totalPrice, discount, isPercentage = true) {
  if (isPercentage) {
    // percentage discount
    return totalPrice * (1 - discount / 100);
  } else {
    // fixed amount discount
    return totalPrice - discount;
  }
}



// Examples:
// console.log(applyDiscount(100, 10));  
 
//  2

// const age = 21;

// if(age < 12){
//     console.log('Free of cost any food');
// }
// else if(age > 60){
//     console.log('They will get 60% discout!');
// }
// else{
//     console.log('They have to pay full price!');
// }


// 3 

// const accountBalance = 1000;

// if(accountBalance <= 1000){
//     console.log('Deposite kor');
// }
// else if(accountBalance > 1000 && accountBalance <= 5000){
//     console.log('Enjoy your life!');
// }


// 4 

const marks = 85;

// if(marks < 50){
//     console.log('Fail');
// }
// else if(marks >= 80){
//     console.log('A+');
// }
// else if(marks >= 50 && marks <= 80){
//     console.log('Pass');
// }
// else{
//     console.log('Input valid marks');
// }


// 5

const bookPage = 100;

// if(bookPage < 100){
//     console.log('Small book');
// }
// else if(bookPage >= 100 && bookPage <= 500){
//     console.log('Mid size book');
// }
// else if(bookPage > 500){
//     console.log('Heart Attact size book');
// }
// else{
//     console.log('Please! enter valid book size!');
// }





//  6

// const temparature = 0;

// if(temparature <= 0 ){
//     console.log('Ice');
// }
// else if(temparature > 0 && temparature <= 20 ){
//     console.log('Cool cool');
// }
// else if(temparature > 20){
//     console.log('Hot hot');
// }
// else{
//     console.log('Input valid temparature!');
// }

