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


