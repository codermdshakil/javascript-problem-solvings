

// JavaScript Object Propeties Practice problem solved

// 1 
const player = {
    name:"Sakib Al Hasan",
    age:36,
    sports:"Cricket",
    team:"BangladeshTeam"
};

// console.log(player.team);

// 2 
const laptop = {
    brand:"Hp",
    price:54000,
    hardDisk:'520gb',
    ram:'8GB',
    screenSize:'21 Inch'
};

// console.log(laptop['screenSize']);
// console.log(laptop.screenSize);

// 3

const favPlace = {
    name:"Cox's Bazar",
    distance:"400km",
    popularity:'High'
};

// console.log(favPlace['popularity']);

// 4
const phone = {
    brand:"Nokia",
    color:"Black",
    price:5000
};


// console.log(phone['price']);

// 5

const library = {
    name:"Public Library",
    location:"Dhaka",
    books:5000
};

// console.log(library.location);

// 6 

const movie = {
    title:"Inception",
    diretor:"Nolan",
    "rating":9
};

// console.log(movie['rating']);

// 7
const college ={
    name:"NDC",
    established:1949,
    groups:['Science', 'Arts', 'Commerce']
};

// console.log(college.groups[1]);


// 8
const family = {
    father:{
        fatherName:"Salim",
        age:48,
        profession:"Busineess"
    },
    mother:{
        motherName:"Fatema",
        age:40,
        profession:"Homemaker"
    }
};


const motherAge = family.mother.age;
const fatherAge = family.father.age;

const totalAge = motherAge + fatherAge;

console.log(totalAge);


