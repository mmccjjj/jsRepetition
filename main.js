// Arrays und Methoden



var people = [ 
    { name: "John Doe", age: 28, occupation: "Developer", city: "New York" }, 
    { name: "Jane Smith", age: 34, occupation: "Designer", city: "Los Angeles" }, 
    { name: "Sam Brown", age: 22, occupation: "Developer", city: "Chicago" }, 
    { name: "Lisa White", age: 30, occupation: "Manager", city: "Miami" }, 
    { name: "Paul Green", age: 45, occupation: "Developer", city: "New York" }, 
    { name: "Emily Johnson", age: 26, occupation: "Developer", city: "Los Angeles" }, 
    { name: "James Black", age: 39, occupation: "Designer", city: "New York" }, 
    { name: "Lucy Blue", age: 29, occupation: "Manager", city: "Chicago" }, 
    { name: "Michael Brown", age: 23, occupation: "Intern", city: "Miami" }, 
    { name: "Anna Davis", age: 32, occupation: "Developer", city: "Los Angeles" }
  ];
  
let namesDisplay = "";
let allFilter= "";

  people.forEach(function(person) {
    namesDisplay += person.name + "<br>";
  });

  document.querySelector("p.display").innerHTML = namesDisplay;

  let findFirstDev = people.find(function (person) {
    return person.occupation === "Developer";
  });

  let formatedDataFind = `Name: ${findFirstDev.name}, Age: ${findFirstDev.age}, City: ${findFirstDev.city}`;

  document.querySelector("p.find").innerHTML = formatedDataFind;

  // Funktion 

  function displayAllFilter(allFilter, para, operator, occu, display) {
    let filterAll = people.filter(function(person) {
        switch (operator) {
            case '==':
                return person[para] == occu;
            case '===':
                return person[para] === occu;
            case '!=':
                return person[para] != occu;
            case '!==':
                return person[para] !== occu;
            case '<':
                return person[para] < occu;
            case '<=':
                return person[para] <= occu;
            case '>':
                return person[para] > occu;
            case '>=':
                return person[para] >= occu;
            default:
                return false; // Standardwert, wenn der Operator nicht unterstützt wird
        }
    });
    
    filterAll.forEach(function (person) {
        allFilter += `Name: ${person.name}, Age: ${person.age}, City: ${person.city}` + "<br>";
      });
    document.querySelector(`p.${display}`).innerHTML = allFilter;
  }

displayAllFilter(allFilter, "occupation", "===", "Developer", "disocc");

displayAllFilter(allFilter, "age", ">", "30", "disage");

let filterAdvanced = people.filter(function (person) {
    return  person.occupation === "Developer" &&
            person.city === "New York" &&
            person.age > 30
})

filterAdvanced.forEach(function (person) {
    allFilter += `Name: ${person.name}, Age: ${person.age}, City: ${person.city}` + "<br>";
  });
document.querySelector("p.disfilteradvanced").innerHTML = allFilter;




// Objekte und Methoden

function iconLog(message, icon = "🤚") {
  console.log(icon + " " + message);
}

const laptop = {
  // properties (Eigenschaften)
  marke: "Dell",
  farbe: "schwarz",
  tasten: 104,
  power: false,
  loadingProgress: 0, 
  maxLoadingProgress: 100,
 
  // getter 
  get info() {
    return `Marke: ${this.marke}, Farbe: ${this.farbe}, Tasten: ${this.tasten}, Power: ${this.power}`;
  },
 
  // setter
  set powerStatus(status) {
    this.power = status;
  },
 
  // method (Methoden)
  start: function () {
    if (this.power) {
      return "Laptop wurde bereits gestartet.";
    } else {
      this.powerStatus = true;
      return "Laptop wird hochgefahren...";
    }
  },

  stop: function () {
    if (this.power) {
      this.power= false;
      return "Laptop wird heruntergefahren";
    }else{
      return "Laptop ist bereits heruntergefahren";
    }
    
 },
 loading: function() {
  let interval = setInterval(() => {
    this.loadingProgress += 10;
    console.log(`Laptop wird hochgefahren... ${this.loadingProgress}%`);
    if (this.loadingProgress >= this.maxLoadingProgress) {
      clearInterval(interval);
      console.log("Laptop wurde erfolgreich hochgefahren.");
    }
  }, 1000);
},
}

laptop.ram= 16;
laptop.getRamStatus = function() {
  // Diese Methode gibt beim Aufruf den Satz "16 GB RAM, davon 0 GB frei." zurück.
  return `${this.ram} GB RAM, davon 0 GB frei.`;
};

laptop.usedRam= 0;
laptop.setUsedRam = function (inUse) {
  if (this.usedRam+ inUse > this.ram){
    let overRam= this.usedRam+ inUse- this.ram;
    return `Du willst ${overRam} GB zuviel RAM verwenden`;   
}else{
    this.usedRam += inUse;
    let restRam= this.ram- this.usedRam;
    return `${this.ram} GB Ram, davon ${restRam} GB frei`
}
}


/* laptop.loading() */

 console.log(laptop.tasten);
 console.log(laptop.info);
 console.log(laptop.start());
 console.log(laptop.start());
 console.log(laptop.info);
 console.log(laptop.stop());
 console.log(laptop.stop()); 
 console.log(laptop.info);
 console.log(laptop.getRamStatus());
 console.log(laptop.setUsedRam(10));
 console.log(laptop.setUsedRam(5));
 console.log(laptop.setUsedRam(5));
 console.log(laptop.setUsedRam(5));

 var person= {
  name: "Max",
  message: function () {
    return `Hallo ich heisse ${this.name}.`
  }
 }

 iconLog(person.name);
 iconLog(person.message());
 person.name= `Bob`;


 const person2 = Object.create(person);
 iconLog(person2.name);
 iconLog(person2.message());

 person.name= `Hans`;
 iconLog(person2.name);
 person2.name= `Fritz`;
 iconLog(person2.message());
 iconLog(person.message());



 const users =[
  {
  name: 'Man',
  firstName: 'Spider',
  age: 86
  },
  {
    name: 'Man',
    firstName: 'Iron',
    age: 54
  },
 ];

 users.forEach(function(user) {
  console.log(`Name: ${user.firstName} ${user.name}, Age: ${user.age}`);
});




// Funktionen

// Funktion in Funktion

function multiply(x){

  return function (y) {
   
    return x* y;
    
  }
}

// Funktion in Variabel speichern (erstes Argument)
const rechnerM= multiply(2);

// Variabel wird aufgerufen mit zweitem Argument
console.log(rechnerM(5));

function rechner(x){

  function add(){
    return ++x;
  }

  function sub(){
    return --x;
  }
  return{
    add,
    sub,
  };
}

// closure function

const calc= rechner(2);

console.log(calc.add());
console.log(calc.add());
console.log(calc.add());

function rechner2(x, z){
  let y= z;

  function add(){
    return x +z;
  }

  function sub(){
    return x- z;
  }
  return{
    add,
    sub,
  };
}
const calc2= rechner2(15,9);

console.log(calc2.add());
console.log(calc2.sub());



function calcSum(a,b) {
  console.log(a+ b);
}

calcSum(50, 7);

function clacTotal(amount, pricerPerUnit, tax) {
  let brPrice= amount* pricerPerUnit;
  let calTax= tax/ 100;
  let payTax= brPrice* calTax
  let nePrice= brPrice+ payTax

  console.log(`total price: ${nePrice}`);
}

clacTotal(5, 10, 10);

let testArray= [1, 2, 3, 4, 555, 6, 7, 80, 9];

function clacMax(arr) {

    let max= arr[0];

    arr.forEach(value =>{
      if (value > max){
        max= value;
      }
    })

    console.log(max);

}

    clacMax(testArray);


    function greetUSerBy(user, greeting= "grüezi") {

      console.log(greeting, user);
      
    }

    greetUSerBy("hans","hoi");


function sum(...numbers) {
  console.log(numbers.reduce((total, num)=> total+ num, 0));} 

sum(1, 2, 3, 4, 5, 15);

function operateOnTwoNumbers(a, b, operation) {
  operation(a, b);
  
}

function ad(a,b) {
  console.log(a+ b);
  
}

function multi(a,b) {
  console.log(a* b);
  
}

operateOnTwoNumbers(10, 10, ad);
operateOnTwoNumbers(10, 10, multi);

function operateOnNumbers(numbers, operation) {
  numbers.forEach(number => {
    operation(number);
  })
}
https://www.google.com/search?q=tltr&oq=tltr&gs_lcrp=su&sourceid=chrome&ie=UTF-8

/* operateOnNumbers([1, 2, 3], square); */

/* operateOnNumbers([1, 2, 3], double); */

operateOnNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(number){
  console.log(number/ 2);
})

let user= {
  name: "Hans",
  age: 15,
  mail: "hans@hans.com"
};

user.role= "Admin";

function verifyUser(user) {
  if (user.age >= 18 && user.role === "Admin"){
    console.log
    (`${user.name} ist alt genug und ist ${user.role}`)
  }else if(user.age >= 18 &&user.role === "Gast"){
      console.log(`${user.name} ist alt genug aber ist ${user.role}`)}
  else{
    console.log(`${user.name} ist zu jung`);
    
  }}


verifyUser(user);

const products= [
  { name: "tv",
    price: 100,
    available: true
  },
  { name: "pc",
    price: 600,
    available: true
  },
  { name: "Chromecast",
    price: 60,
    available: false
  },
  { name: "Nintendo",
    price: 350,
    available: false
  },
  { name: "Playstation",
    price: 450,
    available: true
  }
];

function available(products) {
  return products.filter(function(product) {
    return product.available === true;
  });
}

function expensive(products) {
  return products.filter(function(product) {
    return product.price > 150;
  });
}

function productFilter(products, filter) {
  const filtered= filter(products);
  console.log(filtered);
}


productFilter(products, expensive);

function textSize(text, max) {

  if (text.length > max){
    console.log("TLTR")
  }else{
    console.log("Diesen Text Kannst du lesen")
  }
  
}

textSize("Dieser Text ist viel zu lange", 100);


const functionArray= [
  function start() {
    x = 5;
    return x;
    
  },

  function add5(x) {
    x += 5;
    return x;
  },

  function divide(x) {
    x= x/2;
    return x;
  },

  function multi(x) {
    x= x*5;
    return x;
  }

]

function arrayfunction(arr) {
let result= arr[0]();


arr.slice(1).forEach(newres => {
  result = newres(result);
});
  console.log(result);
}

arrayfunction(functionArray);

function getFullName(firstName, lastName) {
  return(firstName + " " + lastName);
};

function getAge(birthYear){
   const currentYear = new Date().getFullYear();
   const age = currentYear - birthYear;
   return age;
}

let name = getFullName("John", "Smith");
let age = getAge(1988);

let message = "My name is " + name + ". My age is " + age + ".";
console.log(message);

function timeTravel(year) {
  let futureYear = year + 30;
  console.log("Traveling 30 years to the future!");
  return futureYear;
  
}

console.log("Woah! The year is now : " + timeTravel(2023) + "!");

function choosePill(pillColor) {
  if (pillColor=== "red") {
    return "Welcome to enlightenment! You've accepted the truth.";
  } else if (pillColor === "blue") {
    return "You've chosen to stay in the Matrix. Enjoy your steak!";
  } else {
    return "That's not a valid choice!";
  }
}

console.log(choosePill("red")); // should print "Welcome to enlightenment..."
console.log(choosePill("blue")); // should print "You've chosen to stay ..."
console.log(choosePill("orange")); // should print "That's not a valid ...


function theThreeStooges() {
  let stooges = ["Moe", "Curly", "Larry"];
  return stooges;
}


console.log(theThreeStooges()[2]);  //Task 1: Change this to Print Moe
                       
//Task 2: Print Curly
//Task 3: Print Larry 

function flyingCarSpecs() { 
  let specifications = { 
      model: "Nimbus 3000", 
      maxSpeed: "500mph", 
      maxAltitude: "10,000 feet",  
      color: "Iridescent Blue" 
   }; 

  return specifications; 
}

console.log("Behold the " + flyingCarSpecs().model + "!");

let message1 = "Experience the future with the " + flyingCarSpecs().model + ". Reach speeds of "+ flyingCarSpecs().maxSpeed+ ". Fly high up to "+ flyingCarSpecs().maxAltitude+ ". Reflect the color of the sky with its"+ flyingCarSpecs().color+ "body.";

console.log(message1);

//Task: Change the message variable so that it prints this message:

/*Experience the future with the Nimbus 3000. Reach speeds of 500mph. Fly high up to 10,000 feet. Reflect the color of the sky with its Iridescent Blue body.*/


function ironManCharacteristics() {
  let name = "Iron Man";
  let ability = "A mechanical suit";
  let realName = "Tony Stark";

  return {
            superName: name,
            mainAbility: ability,
            actualName: realName
          };
}


function hulkAttributes() {
  let name = "Hulk";
  let ability = "Super strong";
  let realName = "Bruce Banner";


  return {
    superName: name,
    mainAbility: ability,
    actualName: realName,
  };
}



function captainAmericaAttributes(){
  let name = "Captain America";
  let ability = "Super Strong";
  let realName = "Steve Rogers";

  return {
    superName: name,
    mainAbility: ability,
    actualName: realName,
  };
}



let ironMan = ironManCharacteristics();
let hulk = hulkAttributes();
let captainAmerica = captainAmericaAttributes();

console.log("---FIRST HERO---");
console.log(ironMan.superName);     
console.log(ironMan.mainAbility);   
console.log(ironMan.actualName);   

console.log("---SECOND HERO---");
console.log(hulk.superName);    // Not working
console.log(hulk.mainAbility);  
console.log(hulk.actualName);   // Not working

console.log("---THIRD HERO---");
console.log(captainAmerica.superName);    
console.log(captainAmerica.mainAbility);  
console.log(captainAmerica.actualName);   


function codingSchool() {
  let schoolData = {
    students: ["Sven", "Balthasar", "Catherina", "Dankmar"],
    teachers: ["Anita", "Chris", "Brandon"]
  };
  return schoolData;
}

let school = codingSchool().students[0];
console.log(school);
//Task 2: Print "Chris is a great teacher" to the console


// Arrow Funktionen

const cities = [
    { name: "Berlin", citizens: 3645000 },
    { name: "Paris", citizens: 2148000 },
    { name: "New York", citizens: 8419000 },
    { name: "Tokyo", citizens: 13929000 },
    { name: "London", citizens: 8982000 },
    { name: "Moskau", citizens: 12500000 },
    { name: "Sydney", citizens: 5230000 },
    { name: "Mumbai", citizens: 20185000 },
    { name: "Los Angeles", citizens: 3980400 },
    { name: "Rio de Janeiro", citizens: 6748000 }
];


let smallCities= cities.filter(city => city.citizens< 9000000);

console.log(smallCities);