
/**
 * JavaScript basic comparison Practice:
 * ------------------------------------- 
 * 
 * 
 * 
 * 2. তোর ক্লাসে 45 জন ছাত্র আছে, আর পাশের ক্লাসে 50 জন। একটা প্রোগ্রাম লিখে দেখ, কোন ক্লাসে বেশি ছাত্র আছে।
 * 
 * 3. তুই আর তোর বন্ধু পরীক্ষায় নম্বর পেয়েছিস। তুই 75 পেয়েছিস, আর তোর বন্ধু পেয়েছে 75। একটা প্রোগ্রাম লিখে চেক কর, তোর আর তোর বন্ধুর নম্বর সমান
 *  কি না।
 * 
 * 4. তুই 100 টাকা জমানোর টার্গেট করেছিস। এখন পর্যন্ত 95 টাকা জমাইছিস। একটা প্রোগ্রাম লিখে চেক কর, তুই টার্গেটে পৌঁছাইছিস কি না বা তার চেয়ে বেশি
 * জমাইছিস কি না।
 * 
 * 5. একটা প্রোগ্রাম লিখে দেখ, 10 এবং 7 কি অসমান (Different)।
 * 
 * 6. 20 কি 15-এর চাইতে কম বা সমান কি না, সেটা চেক কর।
 * 
 * 7. তুই আর তোর বন্ধু একই সাথে পরীক্ষা দিছস। পরীক্ষার দেয়ার পর তোর বন্ধু কেঁদে কেঁদে বুক ভাসিয়ে ফেলছে। তার পরীক্ষা জঘন্য হইছে, সে ফেল করবে। এক মাস
 * পরে রেজাল্টে দেখা গেছে, তুই পাইছস 45 নম্বর আর বন্ধু পাইছে 97 নম্বর। এইবার চেক করে দেখ, তোর বন্ধু কি তোর চাইতে কম নম্বর পাইছে কি না। 
 * 
*/

// Solutions:

// 1. 

const ami = 5;
const chotoBhai = 7;

// if(chotoBhai > ami){
//     console.log('বেশি খেয়েছি!');
// }else{
//     console.log('কম খেয়েছি!');
// }


// 2

const firstClass = 45;
const secondClass = 50;

// if(firstClass > secondClass){
//     console.log('First class is greater!');
// }
// else{
//     console.log('Second class is greater!');
// };


// 3 
const myNumber = 85;
const myFriendNumber = 85;

// if(myNumber === myFriendNumber){
//     console.log('Both number is Same!');
// }
// else{
//     console.log('Not same');
// };

// 4
const targetAmount = 100;
const inMyHand = 95;

// if(targetAmount >= inMyHand){
//     console.log('Target fullfilled!');
// }else{
//     console.log('Save more money!');
// }


// 5. একটা প্রোগ্রাম লিখে দেখ, 10 এবং 7 কি অসমান (Different)। 

const num1 = 10;
const num2 = 7;

// if(num1 != num2){
//     console.log(`Yes! ${num1} and ${num2} are not same same!!`);
// }
// else if(num1 == num2){
//       console.log(`Yes! ${num1} and ${num2} are same same!!`);
// }



// 6. 20 কি 15-এর চাইতে কম বা সমান কি না, সেটা চেক কর। 

// if(20>15){
//     console.log('20 is greater');
// }
// else{
//     console.log('20 is smaller then 15');
// }
// 7. তুই আর তোর বন্ধু একই সাথে পরীক্ষা দিছস। পরীক্ষার দেয়ার পর তোর বন্ধু কেঁদে কেঁদে বুক ভাসিয়ে ফেলছে। তার পরীক্ষা জঘন্য হইছে, সে ফেল করবে। এক মাস
//  * পরে রেজাল্টে দেখা গেছে, তুই পাইছস 45 নম্বর আর বন্ধু পাইছে 97 নম্বর। এইবার চেক করে দেখ, তোর বন্ধু কি তোর চাইতে কম নম্বর পাইছে কি না। 



const myNumber1 = 45;
const myFriendNumber1 = 95;

if(myFriendNumber < myFriendNumber){
    
    console.log('amr theke kom number paise amr friend.');
}
else{
    console.log('amr theke beshi number paise amr friend.');
}




