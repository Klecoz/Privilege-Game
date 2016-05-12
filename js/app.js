//Data to decide your starting point
var race = ['White', 'Black', 'Asian', 'Native American', 'Latino'];
    
var gender = ['Male', 'Female'];
        
var sexualOrientation = ['Hetrosexual', 'Bisexual', 'Homosexual'];

var socialStatus = ['Lower Class', 'Working Class', 'Lower Middle', 'Upper Middle', 'Upper Class'];

var education = ['Less than high school', 'High School', 'Some College', 'Associate', 'Bachelor', 'Master', 'Doctor' ];
        


//Bunch of random variables to decide your starting point in the game.
var decide = Math.floor((Math.random() * race.length) + 0);
var decide2 = Math.floor((Math.random() * gender.length) + 0);
var decide3 = Math.floor((Math.random() * sexualOrientation.length) + 0);
var decide4 = Math.floor((Math.random() * socialStatus.length) + 0);
var decide5= Math.floor((Math.random() * education.length) + 0);
var decide6 = Math.floor((Math.random() * 2) + 1);


//Creates new person based on random and available data.
var person = {
    race: race[decide],
    gender: gender[decide2],
    sexualOrientation: sexualOrientation[decide3],
    socialStatus: socialStatus[decide4],
    education: education[decide5],
    parents: decide6,
};


console.log(person.race);
console.log(person.gender);
console.log(person.sexualOrientation);
console.log(person.socialStatus);
console.log(person.education);
console.log(person.parents);

//Actual Game part

var privilegeCounter = 0;

//Figure out inital privilege based on privilege walk statements.
if (person.race === 'White') {
    privilegeCounter++;
}

if (person.gender === 'Male') { 
    privilegeCounter++;
}

if (person.sexualOrientation === 'Hetrosexual') {
    privilegeCounter++;
}

if (person.socialStatus === ('Upper Middle' || 'Upper Class')) {
    privilegeCounter++;
}

if (person.education === ('Bachelor' || 'Master' || 'Doctor')) {
    privilegeCounter++;
}

if (person.parents === 2){
    privilegeCounter++;
}

console.log('Intial Privilege Counter is:');
console.log(privilegeCounter);

//Inputs general information
$('#race').append('Race: ' + person.race);
$('#gender').append('Gender: ' + person.gender);
$('#sexual').append('Sexual Orientation: ' + person.sexualOrientation);
$('#social').append('Social Status: ' + person.socialStatus);
$('#education').append('Education: ' + person.education);
$('#parents').append(person.parents + ' parent(s)');