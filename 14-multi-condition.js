/**
 * JavaScript multiple condition Practice:
 * 
*/


// 1. একটি প্রোগ্রাম লিখ। যেটা চেক করবে, বয়স 18-এর বেশি কি না এবং উচ্চতা 60 ইঞ্চির বেশি কি না। তাহলে সে গাড়ি ঠেলবে, না হয় সে গাড়িতে বসে থাকবে।  

// const age = 17;
// const heightInInch = 60;

// if(age > 18 && heightInInch > 60){
//     console.log('gari thelbe!');
// }
// else{
//     console.log('gari te bosbe!');
// }


// 2. একটি প্রোগ্রাম লিখ। যা চেক করবে, একজন শিক্ষার্থী ভর্তি হওয়ার যোগ্য কি না। গণিত স্কোর 80-এর বেশি অথবা ইংরেজি স্কোর 85-এর বেশি হতে হবে। আর এইগুলার কোনোটাই সত্যি না হলে বলবি— তোকে বিয়ে দিয়ে দিব। 

// const mathScore = 80;
// const englishScore = 85;

// if(mathScore > 80 || englishScore > 85){
//     console.log('You are elligable for New School!');
// }else{
//     console.log('You stupid! We will Marry with one guy!');
// }


// 3. একজন স্টুডেন্টের GPA যদি 5 হয় এবং পরিবারের মাসিক আয় 10000-এর কম হয়, তাহলে সে স্কলারশিপ পাবে। না হয় তাকে বেতন দিয়ে পড়তে হবে।  
const gpa = 5;
const familyIncome = 9000;

// if(gpa === 5 && familyIncome < 10000){
//     console.log('Congrats! You get Free Schollership!');
// }
// else{
//     console.log('You are not Elligable for Schoolership!');
// }


// 4. একজন চাকরিপ্রার্থী পরীক্ষা দিতে পারবে, যদি তার বয়স 30-এর কম হয় এবং কাজের অভিজ্ঞতা 2 বছরের বেশি হয়। আর না হয় চাকরির পরীক্ষা দিতে পারবে না। এমন একটা প্রোগ্রাম লিখ। 

// const jobSeckerAge =35;
// const workExperiencedYears = 1;

// if(workExperiencedYears > 2 && jobSeckerAge < 30){
//     console.log('Congrats! You are Selected Job Interview!');
// }
// else{
//     console.log('Congrats! You are not Selected Job Interview!');
// }




//  5. তোর ফ্রিজের ভেতর ডিমের সংখ্যা 12-এর বেশি অথবা মুরগি না থাকে, তাহলে তুই ডিমের কোরমা রান্না করবি। আর না হলে পাউরুটি আর কলা খাবি। এমন একটা কোড লিখ।

const eggNumbers = 12;
const checken = false;

// if(eggNumbers > 12 && checken === false){
//     console.log('Dimer korma ranna!');
// }
// else{
//     console.log('Pawruty ar kola khamu!');
// }


// 6. একজন মানুষের যদি শরীরের তাপমাত্রা 100 ডিগ্রির বেশি অথবা কাশি থাকে, তাহলে সে ডাক্তারের কাছে যাবে। নচেৎ সে কাঁথা মুড়ি দিয়ে শুয়ে থাকবে। এর জন্য একটা প্রোগ্রাম লিখ। 

// const bodyTemparature = 100;
// const hacchi = true;
// if(bodyTemparature > 100 || hacchi === true){
//     console.log('Doctor er kase jabe!');
// }
// else{
//     console.log('Katha mori diye gum dibe!');
// }


// 7. একজন শিক্ষার্থীকে পরীক্ষা দিতে দেয়া হবে, যদি তার উপস্থিতি 80 শতাংশের বেশি এবং হোমওয়ার্ক জমা দেয়া থাকে। নচেৎ অটো ফেল। এই শর্তের জন্য প্রোগ্রাম লিখ। 

// const attendence = 40;
// const isDoneHomeWork = true;

// if(attendence > 40 && isDoneHomeWork === true){
//     console.log('Congrats! You can do Exam..');
// }
// else{
//     console.log('You auto Fail!');
// }



// 8. যদি তোর বাসার বিদ্যুৎ চলে যায় এবং মোবাইলে চার্জ না থাকে, তাহলে তুই পড়তে বসবি। না হলে ভিডিও গেম খেলবি। এর জন্য কোড লিখ। 


// const isLoadShedding = false;
// const isPhoneCharge = false;

// if(isLoadShedding === false && isPhoneCharge === false){
//     console.log('Porte boshbi');
// }
// else{
//     console.log('Playing Video game!');
// }


// 9. শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে। এর জন্য প্রোগ্রাম লিখ।

const shartPrice = 1001;
const coupon = true;

if(shartPrice >1000 && coupon === true){
    console.log('You get 20% Discount!');
}else{
    console.log('Fixed Price Brother!');
}


