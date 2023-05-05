// Adding a Default Option in Switch Statements
// A default statement should be the last case.
//  start function switchOfStuff
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);
//   end function switchOfStuff

// Multiple Identical Options in Switch Statement
// START function sequentialSizes
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);
// end function sequentialSizes
//   Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";

            break;
        case 99:
            answer = "Missed me by this much!";
            break;

        case 7:
            answer = "Ate Nine";
            break;

    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);

//   Returning Boolean Values from Functions
function isLess(a, b) {
    // Only change code below this line
    if (a < b) {
        return true;
    } else {
        return false;
    }
    // or
    //   return a<b;

    // Only change code above this line
}

isLess(10, 15);


//   Return Early Pattern for Functions

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0)
        return undefined;

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//   Counting Cards
// You will write a card counting function.
// It will receive a card parameter, which can be a number or a string,
//  and increment or decrement the global count
//   variable according to the card's value (see table).
//   The function will then return a string with
//   the current count and the string
//    Bet if the count is positive, or Hold
//    if the count is zero or negatiF
let count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
case 2:
case 3:
case 4:
case 5:
case 6:
count++;
break;
case 7:
case 8:
case 9:break;
case 10:
case "J":
case "Q":
case "K":
case "A":
count--;
break;


}
if(count>0)
 {return (`${count} ${"Bet"}`);} 
  return (`${count} ${"Hold"}`);
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Build JavaScript Objects
// You may have heard the term object before.
// Objects are similar to arrays, except that
// instead of using indexes to access and modify their data, 
// you access the data in objects through what are called properties.
const myDog = {
    // Only change code below this line
  name:"Dogb",
  legs:4,
  tails:4,
  friends:["mm","cat"]
    // Only change code above this line
  };

//   Accessing Object Properties with Dot Notation
// There are two ways to access the properties of an object:
//  dot notation (.) and bracket notation ([]), similar to an array.
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line 


//   Accessing Object Properties with Bracket Notation
// Note that property names with spaces in them must be in quotes (single or double).
// Setup
const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj1["an entree"];   // Change this line
  const drinkValue = testObj1["the drink"];    // Change this line

//   Accessing Object Properties with Variables
//   Another use of bracket notation on objects
//    is to access a property which is stored as
//     the value of a variable. This can be very useful 
//   for iterating through an object's 
//   properties or when accessing a lookup table.
   // Setup
const test2Obj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = test2Obj[playerNumber];   // Change this line

//   Updating Object Properties
// Setup
const my1Dog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  my1Dog.name="Happy Coder";

//   Add New Properties to a JavaScript Object
const my2Dog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  my2Dog.bark="woof";
  // my2Dog["bark"]="woof"; anthor way


//   Delete Properties from a JavaScript Object
const my3Dog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  delete my3Dog.bark;
// Using Objects for Lookups (SERCHING)
// Objects can be thought of 
// as a key/value storage, 
// like a dictionary. If you have tabular data, 
// you can use an object to lookup values rather
//  than a switch statement or an if/else chain. 
//  This is most useful when you know that your
//   input data is limited to a certain range.
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    // }
    // we can do this in better way as below
    const lookup={
   "alpha": "Adams",
  "bravo":"Boston",
  "charlie":"Chicago",
  "delta":"Denver",
  "echo":"Easy",
  "foxtrot":"Frank"
    }
  result=lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
//   Testing Objects for Properties
// Sometimes it is useful to check if 
// the property of a given object exists or not.
//  We can use the .hasOwnProperty(propname) method 
function checkObj(obj, checkProp) {
    // Only change code below this line
   if( obj.hasOwnProperty(checkProp)){
    return obj[checkProp];}
    return "Not Found";
  
    // Only change code above this line
  }
  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");
checkObj({city: "Seattle"}, "city");
// Manipulating Complex Objects
// Sometimes you may want to store data in a flexible Data Structure. 
// A JavaScript object is one way to handle flexible data.
//  They allow for arbitrary combinations of strings, 
//  numbers, booleans, arrays, functions, and objects.
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    { "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"]}
  ];


//   Accessing Nested Objects
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
//   Accessing Nested Arrays
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
//   Record Collection
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
  if(prop !== "tracks" && value!== ""){
  records[id][prop]= value;
  }
  else if (prop==="tracks"&& !records[id].hasOwnProperty(prop)){
    
  records[id][prop]=[];
  records[id][prop].push(value);}
  else
    if(prop==="tracks"&&value!==""){
    records[id][prop].push(value);
  }
  else if(value==="")
  { delete records[id][prop]}
  
    
  
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//   Iterate with JavaScript While Loops
// Setup
const myArray = [];
let index=0;
let content=5;
while(index <6){

  myArray[index]=content;
  index++;
  content--;
}
// Replace Loops using Recursion
array.forEach(element => {
    
});