/**
 * JavaScript Advanced Comparison Practice:
 * 
 * 
 * 
 * 2. তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস "JavaScript" == 'JavaScript' আর "JavaScript" === 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে।
 * 
 * 3. একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ। 
 * 
 * 4. "apple" এবং "apple" লিখে তুলনা করলে, "apple" == "apple" এবং "apple" === "apple"-এর আউটপুট কী হবে।
 * 
 * 5. একটা প্রোগ্রাম লিখে দেখ, "test" এবং "TEST"-এর মধ্যে "test" == "TEST" এবং "test" === "TEST"-এর আউটপুট কী হবে।
 * 
 * 6. variableX-এর মান 15 আর variableY-এর মান "20" দিলে variableX != variableY এবং variableX !== variableY-এর আউটপুট কী হবে।
 * 
 * 7. variableA-এর মান hello আর variableB-এর মান "Hello"। এখন variableA == variableB এবং variableA === variableB চেক করার প্রোগ্রাম লিখ।
 * 
*/

// 1. তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে "50" টাকা (স্ট্রিং হিসেবে)। একটা প্রোগ্রাম লিখে দেখ, 50 == "50" দিলে আর 50 === "50" দিলে আউটপুট কী আসবে। 

const myMoney = 50;
const myFriendMoney = "50";

// if(myMoney == myFriendMoney){
//     console.log('Normal Equal Equal money without type!');
// }

// if(myMoney === myFriendMoney){
//     console.log('Now it perfactly Equal! ');
// }
// else{
//     console.log('Not Equal!');
// }


// 2. তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস "JavaScript" == 'JavaScript' আর "JavaScript" === 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে। 

const noteBook = "JavaScript";

// if("JavaScript" == 'JavaScript'){
//     console.log('Same same');
// }

// if("JavaScript" === 'JavaScript'){
//     console.log('same same same');
// }



// == শুধু value check করে type check করে না এর জন্য  যদি value ২ টা মিলে type না মিললেও True দেখায় ।
// === value + type ২ টা  ই Check করে যদি value মিলেও type না মিললে false দেখায় ।



// 3. একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ।  

// if(25 == "25"){
//     console.log('Same value but not type');
// }

// if(25 === "25"){    
//     console.log('Same value same type');
// }

// == শুধু value check করে type check করে না এর জন্য  যদি value ২ টা মিলে type না মিললেও True দেখায় ।
// === value + type ২ টা  ই Check করে যদি value মিলেও type না মিললে false দেখায় ।




// 4. "apple" এবং "apple" লিখে তুলনা করলে, "apple" == "apple" এবং "apple" === "apple"-এর আউটপুট কী হবে। 

// if("apple" == "apple"){  // Sotti
//     console.log('Sotti');
// }

// if("apple" === "apple"){ // Sotti
//     console.log('Sotti');
// }
// else{
//     console.log('Mitha');
// }



// 5. একটা প্রোগ্রাম লিখে দেখ, "test" এবং "TEST"-এর মধ্যে "test" == "TEST" এবং "test" === "TEST"-এর আউটপুট কী হবে। 

if("test" == "TEST"){
    console.log("true");
}
else{
    console.log("false");
}


if("test" === "TEST"){
    console.log("true");
}
else{
    console.log("false");
}

// 
// false
// false

