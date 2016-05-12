//Data to decide your starting point
var race = ['White', 'Black', 'Asian', 'Native American', 'Latino'];
    
var gender = ['Male', 'Female'];
        
var sexualOrientation = ['Hetrosexual', 'Bisexual', 'Homosexual'];
    
//var status = ['Lower Class', 'Working Class', 'Lower Middle', 'Upper Middle', 'Upper Class'];

var socialStatus = ['Lower Class', 'Working Class', 'Lower Middle', 'Upper Middle', 'Upper Class'];

var education = ['Less than high school', 'High School', 'Some College', 'Associate', 'Bachelor', 'Master', 'Doctor' ];
        


//Bunch of random variables to decide your starting point in the game.
var decide = Math.floor((Math.random() * race.length) + 0);
var decide2 = Math.floor((Math.random() * gender.length) + 0);
var decide3 = Math.floor((Math.random() * sexualOrientation.length) + 0);
var decide4 = Math.floor((Math.random() * socialStatus.length) + 0);
var decide5= Math.floor((Math.random() * education.length) + 0);
var decide6 = Math.floor((Math.random() * 2) + 1);



console.log(decide);
console.log(decide2);
console.log(decide3);
console.log(decide4);
console.log(decide5);
console.log(decide6);

//Creates new person based on random and available data.
var person = {
    race: race[decide],
    gender: gender[decide2],
    sexualOrientation: sexualOrientation[decide3],
    status: socialStatus[decide4],
    education: education[decide5],
    parents: decide6,
};

console.log(socialStatus[1]);

console.log(person.race);
console.log(person.gender);
console.log(person.sexualOrientation);
console.log(person.status);
console.log(person.education);
console.log(person.parents);