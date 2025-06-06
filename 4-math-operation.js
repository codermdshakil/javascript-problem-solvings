/**
 * 
 * Javascript Math Operator Practice:
 * -----------------------------------
 * 
 * 1. ধর, তুই 100 টাকা আয় করেছিস। তার মধ্যে 40 টাকা খরচ করছিস। বাকি টাকা কত রইল, সেটা বের করার একটা প্রোগ্রাম লিখ।
 * 
 * 2. তোর কাছে 10টা পেন্সিল আছে। প্রতিবার তুই একসাথে 2টা পেন্সিল ব্যবহার করবি। কত বার ব্যবহার করতে পারবি?
 * 
 * 3. প্রোগ্রাম লিখে বের কর।তোর কাছে 60 টাকা আছে। তুই যদি প্রতিবার 15 টাকা করে খরচ করিস, কয়বার খরচ করতে পারবি? এবং খরচের পর কয় টাকা বাকি থাকবে, সেটা বের করতে একটা প্রোগ্রাম লিখ।
 * 
 * 4. ধর, তুই দুইটা স্ট্রিং লিখলি "Hello" আর "World"। এই দুইটা স্ট্রিংকে একসাথে জোড়া দিয়ে কীভাবে "HelloWorld" বানানো যায়, সেটা দেখানোর জন্য একটা প্রোগ্রাম লিখ।
 * 
 * 5. তুই যদি 153 কেজি চাল আর 261 কেজি ডাল কিনলি, তাহলে তুই কয় কেজি জিনিস কিনেছিস? মোট কেজি বের করার একটা প্রোগ্রাম লিখ।
 * 
 * 6. তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।
 * 
 * 7. তুই 8 - কে 3 দিয়ে ভাগ দিলে ভাগফল কত আর ভাগশেষ কত, সেটা বের করার জন্য একটা প্রোগ্রাম লিখ।
 * 
 * 8. তুই 50 -কে 9 দিয়ে ভাগ দিলে শুধু ভাগশেষ কত থাকে, সেটা বের করার একটা প্রোগ্রাম লিখ।
 * 
 * 9. তুই "Bangla" আর "desh" স্ট্রিং যোগ করে "Bangladesh" বানাতে চাস। কীভাবে করবি, সেটা দেখানোর একটা প্রোগ্রাম লিখ।
 * 
 * 10. ধর, একদিন ঘুম থেকে উঠে ক্ষিধার চোটে তুই ছোটখাটো একটা রাক্ষস হয়ে গেছস। তারপর থেকে প্রতিদিন 4 কেজি চালের ভাত খেয়ে ফেলস। এখন যদি তোকে 12 মন (480 কেজি) চাল দেয়া হয় থাকে, তাহলে এই চাল দিয়ে তোর কত দিন যাবে। আবার একমাস যদি 30 দিনে হয়, তাহলে এই 12 মন চাল দিয়ে তোর কত মাস যাবে। 
 * 
 * 
 * 
*/

// Solutions:

// 1 
const income = 100;
const cost = 40;
const remain = income - cost; // 60

// 2

const totalPencil = 10;
const everyTimeUse = 2;

const canUse = totalPencil / everyTimeUse; // 5

// 3

const hasMoney = 60;
const everyTimeUseMoney = 15;
const totalUse = hasMoney / everyTimeUseMoney; // 4

// 4

const s1 = "Hello";
const s2 = "Word";
const s = s1 + s2; // HelloWord

// 5 
const riceKg = 153;
const dalKg = 261;
const totalKg = riceKg + dalKg; // 414 


// 6

const totalMoney = 500;
const everyTimeUseMoney2 = 75;
const remainMoney = parseInt(totalMoney / everyTimeUseMoney2); // 6



// 7
const quotiend = Math.floor(8/3); // ভাগফল
const remain2 = 8%3; // ভাগশেষ
 
// 8 
const justRemainder = 50 % 9 ; // 5

// 9 
const riceEatPerDay = 4;
const totalRiceKg = 480;


const riceCanUse = totalKg /  riceEatPerDay; // 103.5

const oneMonth = 30;

// 16 month i can service with 480kg chal
const remaningMonth = totalRiceKg / oneMonth; // 16
 





 