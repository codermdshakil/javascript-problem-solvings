
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

const accountBalance = 1000;

if(accountBalance <= 1000){
    console.log('Deposite kor');
}
else if(accountBalance > 1000 && accountBalance <= 5000){
    console.log('Enjoy your life!');
}
