/**
 * Javascript let, const Practice:
 * 
 * 
 * 1. তোর বর্তমান বয়স age নামে একটি ভেরিয়েবলে রাখ। কনসোলে প্রিন্ট কর। তারপর age ভেরিয়েবলে নতুন মান সেট কর এবং আবার কনসোলে প্রিন্ট কর।
 * 
 * 2. তোর পকেটে এখন 500 টাকা আছে, pocketMoney নামে একটি ভেরিয়েবলে রাখ। পরে pocketMoney-এর মান 150 সেট কর এবং কনসোলে প্রিন্ট কর।
 * 
 * 3. তুই 4 ঘণ্টা পড়াশোনা করার পরিকল্পনা করেছিস, studyTime নামে একটি ভেরিয়েবলে রাখ। পরে studyTime-এর মান আপডেট করে তুই আসলেই আজকে যত ঘণ্টা পড়াশোনা করছস, সেটা সেট কর। মান যদি শূন্য হয়, তাহলে 0-ই সেট কর এবং কনসোলে দেখ।
 * 
 * 4. তোর মোট 3 জন বন্ধু আছে, friendsCount নামে একটি ভেরিয়েবলে এই সংখ্যা রাখ। পরে তোর 2 জন ফ্রেন্ড তোকে ছেড়ে চলে গেল। এখন friendsCount-এর মান আপডেট কর এবং কনসোলে সেটার আউটপুট দেখ
 * 
 * 5. তুই একটা নতুন ফোন কিনছিলি 25000 টাকা দিয়ে। সেটা নিয়ে একটা ভেরিয়েবল ডিক্লেয়ার কর। আর এক মাস পর সেই ফোন বিক্রি করতে গিয়েই দেখস, দাম দিতে চায় 12000 মাত্র, কী আর করবি! phonePrice নামে একটি ভেরিয়েবলের মান প্রথমে 25000 দিবি। তারপর সেটাকে 12000 দিয়ে আপডেট কর এবং কনসোলে দেখা।
 * 
 * 6. তোদের ক্লাসে 40টা চেয়ার আছে। কয়দিন পর 2টা চেয়ারের পা ভেঙে গেল। chairsCount নামে একটি ভেরিয়েবলে এই মান আপডেট কর। আরও কয়দিন পর পাশের রুমের সিনিয়র ভাইয়ারা এসে 6টা চেয়ার নিয়ে গেছে। এইবারও chairsCount-এর মান আপডেট কর এবং কনসোলে ফাইনাল মান আউটপুট করে দেখ।
 * 
 * 7. তুই আজকে 3 ঘণ্টা খেলা করার পরিকল্পনা করেছিস, playTime নামে একটি ভেরিয়েবলে রাখ। পরে playTime-এর মান আপডেট করে আসলেই তুই কত ঘণ্টা খেলা করেছিস, সেটি সেট কর। যদি তুই না খেলিস, তাহলে playTime-এর মান 0 সেট কর এবং কনসোলে দেখ।
 * 
 * 
 * 
*/

// Solution

// 1
let age = 15;
// console.log(age); //15
age = 20;
// console.log(age); // 20


// 2

let pocketMoney = 500;
// console.log(pocketMoney); // 500;
pocketMoney = 150;
// console.log(pocketMoney); // 150


// 3
let studyTime = 4;
// console.log(studyTime); // 4
studyTime = 3; 
// console.log(studyTime); // 3


// 4 
let friendsCount = 3;
friendsCount = friendsCount - 2;
// console.log(friendsCount);  // 1

// 5

let phonePrice = 25000;
// console.log(phonePrice); // 25000
phonePrice = 12000;
// console.log(phonePrice); // 12000

// 6

let chairsCount = 40;

// বেঙে গেছে ২ টি 
chairsCount = chairsCount - 2;
// নিয়ে গাসে ২ টি
chairsCount = chairsCount - 6;

// console.log(chairsCount);

// 7

let playTime = 2;
playTime = 0;
// console.log(playTime);

