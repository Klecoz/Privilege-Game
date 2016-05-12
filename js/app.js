//Data to decide your starting point
var race = ['White', 'Black', 'Asian', 'Native American', 'Latino'];
    
var gender = ['Male', 'Female'];
        
var sexualOrientation = ['Hetrosexual', 'Bisexual', 'Homosexual'];

var socialStatus = ['Lower Class', 'Working Class', 'Lower Middle Class', 'Upper Middle Class', 'Upper Class'];

var education = ['Less than high school', 'High School', 'Some College', 'Associate Degree', 'Bachelor Degree', 'Master Degree', 'Doctorate' ];
        


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

//Keeps track of current stage
var stageCounter = 1;

//Checks click for some buttons
var hasBeenClickedPri = false;
var hasBeenClickedPub = false;

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

if (person.socialStatus === ('Upper Middle Class' || 'Upper Class')) {
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

//Picks character if Male
if (person.race === 'White' && person.gender === 'Male') {
    $('#character').append('<img src="images/people/male1.png" alt="">');
}

if (person.race === 'Asian' && person.gender === 'Male') {
    $('#character').append('<img src="images/people/male1.png" alt="">');
}

if (person.race === 'Native American' && person.gender === 'Male') {
    $('#character').append('<img src="images/people/male2.png" alt="">');
}

if (person.race === 'Latino' && person.gender === 'Male') {
    $('#character').append('<img src="images/people/male2.png" alt="">');
}

if (person.race === 'Black' && person.gender === 'Male') {
    $('#character').append('<img src="images/people/male3.png" alt="">');
}

//Picks character if female

if (person.race === 'White' && person.gender === 'Female') {
    $('#character').append('<img src="images/people/female1.png" alt="">');
}

if (person.race === 'Asian' && person.gender === 'Female') {
    $('#character').append('<img src="images/people/female1.png" alt="">');
}

if (person.race === 'Native American' && person.gender === 'Female') {
    $('#character').append('<img src="images/people/female2.png" alt="">');
}

if (person.race === 'Latino' && person.gender === 'Female') {
    $('#character').append('<img src="images/people/female2.png" alt="">');
}

if (person.race === 'Black' && person.gender === 'Female') {
    $('#character').append('<img src="images/people/female3.png" alt="">');
}

//Inputs general information
$('#race').append('Race: ' + person.race);
$('#gender').append('Gender: ' + person.gender);
$('#sexual').append('Sexual Orientation: ' + person.sexualOrientation);
$('#social').append('Social Status: ' + person.socialStatus);
$('#education').append('Education: ' + person.education);
$('#parents').append(person.parents + ' parent(s)');



//Start Button
$('.play').click(function() {
   $('.intro').fadeOut(300, function() {
   $('.s' + stageCounter).fadeIn(300);
   $('.map').fadeIn(300);
   $('#current').fadeIn(300);
   $('#points').fadeIn(300);    

   });
    
});

//Progresses Game
$('.next').click(function() {
   $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map' + stageCounter + '.png" alt="" width="100%">');
   });
    
});

//Stage2
$('.s2').append('<div id="character"></div>');
$('.s2').append('<p>You were born into a ' + person.race + ' ' + person.socialStatus + ' family with ' + person.parents + ' parent(s).</p>');
$('.s2').append('<p>Your parents decide to put you in Private or Public schooling when you are of age. What do they choose?</p>');
$('.s2').append('<button id="pub" type="button" class="btn btn-primary"><h3>Public School</h3></button>');
if ((person.socialStatus !== 'Lower Class') && (person.socialStatus !== 'Working Class')){
$('.s2').append('<button id="pri" type="button" class="btn btn-primary"><h3>Private School</h3></button>');
} else {
    $('.s2').append('<h3>Sorry, it seems that your social class is not high enough for private school.');
}

//If public school is picked
$('#pub').click(function(){
  $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map3_1.png" alt="" width="100%">');
   });
});

//If private schooling is picked
$('#pri').click(function(){
  $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   privilegeCounter++;
   $('#points').empty().append('Privilege Points: ' + privilegeCounter);
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map3_2.png" alt="" width="100%">');
   });
});