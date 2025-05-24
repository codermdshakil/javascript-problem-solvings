
// JavaScript Loop Practice:
//




 




//  1. তুই 5টা পছন্দের সাবজেটের নাম লেখ। তারপর program লিখে দেখ, কী ভাবে লুপ ব্যবহার করে সবসাবজে ক্টের নাম
// আলাদা ভাবে প্রিন্ট হবে ।

const favouriteSubjects = ['Science', 'Math', 'Biology', 'Chemistry', 'Physics'];

// for(let i = 0; i < favouriteSubjects.length;i++){
//     console.log(favouriteSubjects[i]);
// }

// 2.  তোর একদম পছন্দের খাবার গুলোর নাম লেখ। এখন লুপ ব্যবহার করে  program লিখে দেখ, কীভাবে সব খাবারের নাম আলাদা
// আলাদা করে print হবে ।

const favFoods = ['Gorur mangso', 'Biriyani', 'shotkimas', 'Bhat', 'kabab'];

// for(let i = 0; i < favFoods.length;i++){
//     console.log(favFoods[i]);
// }


// 3. একটা অ্যারের মধ্যে তোর ফ্যামিলি মেম্বারদের জন্মসাল  লিখে ফেল। তারপর লুপ চালিয়ে সবার জন্মসাল আউটপুট হিসেবে দেখা । 

const familyNumbersDOBS = ['1973', '1983', '2000','2003', '2004', '2010', '2012'];

// for(let i = 0; i < familyNumbersDOBS.length;i++){
//     console.log(familyNumbersDOBS[i]);
// }


// 4 তোমার প্রিয় ক্রিকেট বা ফুটবল দলের ১১ জন খেলোয়াড়ের নাম একটি অ্যারের মধ্যে সংরক্ষণ করো।
// এরপর console.log() ব্যবহার করে সেই অ্যারের সকল খেলোয়াড়ের নাম আউটপুট হিসেবে দেখাও।

const footBallTeam = [
    "Messi",
    "CR7",
    "Neymer",
    "MBAPPI",
    "Modric",
    "De Bruyne",
    "Salah",
    "Benzema",
    "Kane",
    "Haaland",
    "Vinicius"
];

// for(let i = 0; i < footBallTeam.length;i++){
//     console.log(footBallTeam[i]);
// }

// 5. তোমার পরবর্তী পরীক্ষাগুলোর তারিখগুলো একটি অ্যারের মধ্যে সংরক্ষণ করো।
// এরপর একটি লুপ ব্যবহার করে সেই পরীক্ষার তারিখগুলো console.log() এর মাধ্যমে আউটপুট হিসেবে দেখাও।

const examsDates = ['25-05-2025','26-05-2025','10-07-2025', '13-07-2025'];

for(let i = 0; i < examsDates.length; i++){
    console.log(examsDates[i]);
}
