$(document).ready( function() {
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
}

//Keeps track of current stage
var stageCounter = 1;

//Checks click for some buttons
//Dem random life events yo
function randomLifeEvent(stage) {
    var randomvar = Math.floor((Math.random() * 8) + 1);
    
    $('.s' + stage).append('<h2 id="random">You encounted a random life event:</h2>');
    switch(randomvar) {
        case 1:
            $('.s' + stage).append('<p>You had to skip a meal since you do not have enough money to buy food. Privliege  -1</p>');
            privilegeCounter = privilegeCounter - 1;
            break;
        case 2:
            $('.s' + stage).append('<p>You get a work holiday off. Privliege +1</p>');
            privilegeCounter++;
            break;
        case 3:
            $('.s' + stage).append('<p>You or a family member has had a depressive episode. Privliege -1</p>');
            privilegeCounter = privilegeCounter -1;
            break;
        case 4:
            $('.s' + stage).append('<p>You feel unsafe walking around one night. Privliege -1</p>');
            privilegeCounter = privilegeCounter - 1;
            break;
        case 5:
            $('.s' + stage).append('<p>You identified with a person on TV of the same race as you in a positive way. Privliege +1</p>');
            privilegeCounter++;
            break;
        case 6:
            $('.s' + stage).append('<p>You were in an accident and had to get your right arm amputated. Privliege -1</p>');
            privilegeCounter = privilegeCounter - 1;
            break;
        case 7:
            $('.s' + stage).append('<p>You did not get a job and felt discriminated against either due to gender, race, age, or sexual orientation. Privliege -1</p>');
            privilegeCounter = privilegeCounter - 1;
            break;
        case 8:
            $('.s' + stage).append('<p>Your family supported you through a tramatic event. Privliege +1</p>');
            privilegeCounter++;
            break;
            
        default:
            break;
    }
}

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


if (person.sexualOrientation === 'Homosexual') {
    privilegeCounter--;
}
    
if (person.socialStatus === ('Upper Middle Class' || 'Upper Class')) {
    privilegeCounter++;
}

if (person.socialStatus === 'Lower Class') {
    privilegeCounter--;
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
    $('.progress-bar').css('width', '12.5%').empty().append('12.5% Complete'); 
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
   $('.s3').fadeIn(300);
   $('.map').empty().append('<img src="images/map/map3_1.png" alt="" width="100%">');
   });
    $('.progress-bar').css('width', '12.5%').empty().append('12.5% Complete'); 
    $('.s3').append('<p>Looks like you chose to go to public school, or had no other choice. Your privilege points have stayed the same.</p>');
});

//If private schooling is picked
$('#pri').click(function(){
  $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   privilegeCounter++;
   $('#points').empty().append('Privilege Points: ' + privilegeCounter);
   $('.s3').fadeIn(300);
   $('.map').empty().append('<img src="images/map/map3_2.png" alt="" width="100%">');
   });
    $('.progress-bar').css('width', '25%').empty().append('25% Complete'); 
    $('.s3').append('<p>Looks like you got to go to private school. Lucky you! You have gained a privilege point.</p>');
});

//Stage3


$('.s3').append('<button type="button" class="next2 btn btn-primary"><h3>Next</h3></button>');

    

    
$('.next2').click(function() {
   $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map' + stageCounter + '.png" alt="" width="100%">');
    $('.progress-bar').css('width', '37.5%').empty().append('37.5% Complete'); 
   });
    
});

//Stage4 RANDOM LIFE EVENT STAGE AND HIGHSCHOOL - College stage
randomLifeEvent(4);

if (person.education === 'Less than high school') {
     $('.s4').append('<p>Your parent or parents did not manage to get past high school, and unfortunally you did not either. Privilege -1</p>');
} else {
     $('.s4').append('<p>Congratulations! You managed to get through High School! What would you like to do now?');
    $('.s4').append('<button id="col" type="button" class="btn btn-primary"><h3>Go to College</h3></button>');
}

$('.s4').append('<button id="job" type="button" class="btn btn-primary"><h3>Get a Job</h3></button>');

//Stage5
//If job is picked
$('#job').click(function(){
  $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map5_2.png" alt="" width="100%">');
   });
    $('.progress-bar').css('width', '50%').empty().append('50% Complete'); 
  $('.s5').append('<p>College would have been a great start, but you chose to get a job. At least you are not getting into debt.</p>');
    if (person.gender === 'Woman') {
        $('.s5').append('<p>Women only make 79 centers for ever dollar erned by men, and you are part of that gender wage gap. Privilege -1</p>');
    }
});

//If college is picked
$('#col').click(function(){
  $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   privilegeCounter++;
   $('#points').empty().append('Privilege Points: ' + privilegeCounter);
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map5_1.png" alt="" width="100%">');
   });
    $('.progress-bar').css('width', '50%').empty().append('50% Complete'); 
 $('.s5').append('<p>Great choice getting an education! You are on your way to getting a great career!</p>');
    if ((person.socialStatus != 'Upper Middle Class') || (person.socialStatus != 'Upper Class')) {
        $('.s5').append('<p>Unfortunally, in order to take this next big step in your career, you needed to take on some debt. Privilege -1</p>');
        privilegeCounter--;
    }
});

    $('.s5').append('<button type="button" class="next3 btn btn-primary"><h3>Next</h3></button>');
    
    $('.next3').click(function() {
   $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map' + stageCounter + '.png" alt="" width="100%">');
   });
        $('.progress-bar').css('width', '62.5%').empty().append('62.5% Complete'); 
        });
    
//Stage6
randomLifeEvent(6);
randomLifeEvent(6);
$('.s6').append('<p>You made it this far in life just by being the way you are! If you have not noticed your Privilege Points by now, why not take a look?');
    
$('.s6').append('<button type="button" class="next4 btn btn-primary"><h3>Next</h3></button>');
    
 $('.next4').click(function() {
   $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map' + stageCounter + '.png" alt="" width="100%">');
   });
     $('.progress-bar').css('width', '75%').empty().append('75% Complete'); 
        });

//Stage 7
    $('.s7').append('You are finally at that stage of life where you would want to buy a home, and maybe even start a family.');
    privilegeCounter++;
    if ((person.race === 'Black') ||(person.race === 'Native American') || (person.race === 'Latino'))
        {
            $('.s7').append('<p>Unfortunally for you, it has been difficult getting a house in a nice neighborhood. You are being redlined. Privilege -1</p>');
            privilegeCounter--;
        }
    randomLifeEvent(7);
    
    $('.s7').append('<button type="button" class="next5 btn btn-primary"><h3>Next</h3></button>');
    
     $('.next5').click(function() {
   $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: ' + (stageCounter-1));
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').empty().append('<img src="images/map/map' + stageCounter + '.png" alt="" width="100%">');
   });
         $('.progress-bar').css('width', '87.5%').empty().append('87.5% Complete'); 
        });
    
    $('.s8').append('Life has come and gone. You are in your deathbed, waiting until the end.</p>');
    if (person.socialStatus === 'Lower Class') {
        $('.s8').append('<p>Due to your social class, it is unlikely that you will be able to afford your own funural. Privilege -1</p>');
        privilegeCounter--;
    }
    
    if (person.socialStatus === 'Upper Class') {
        $('.s8').append('<p>You have enough money to buy a country. And more than enough to give to your bratty kids. Privilege +1</p>');
        privilegeCounter++;
    }
    
     $('.s8').append('<button type="button" class="next6 btn btn-primary"><h3>Next</h3></button>');
    
     $('.next6').click(function() {
   $('.s' + stageCounter).fadeOut(300, function() {
    stageCounter++;
   $('#current').empty().append('Current Level: DONE!');
   $('#points').empty().append('Privilege Points: ' + (privilegeCounter));
   $('.s' + stageCounter).fadeIn(300);
   $('.map').fadeOut(300, function() {
      $('.end').fadeIn(300); 
   });
   });
         $('.progress-bar').css('width', '100%').empty().append('100% Complete'); 
        });
    
    $('.s9').append('<h2>Great Job!</h2>');
    $('.s9').append('<p>You successfully simulated the privliege of your individual character!</p>');
    $('.end').append('<div id="endcharacter"></div>');
    $('.end').append('<ul><li>Race: ' + person.race + '</li>' + '<li>Gender: ' + person.gender + '</li>' + '<li>Sexual Orientation: ' + person.sexualOrientation + '</li>' + '<li>Social Status: ' + person.socialStatus + '</li>' + '<li>Education: ' + person.education + '</li>' + '<li>' + person.parents + ' parent(s)</li></ul>');

    //Picks character if Male
if (person.race === 'White' && person.gender === 'Male') {
    $('#endcharacter').append('<img src="images/people/male1.png" alt="">');
}

if (person.race === 'Asian' && person.gender === 'Male') {
    $('#endcharacter').append('<img src="images/people/male1.png" alt="">');
}

if (person.race === 'Native American' && person.gender === 'Male') {
    $('#endcharacter').append('<img src="images/people/male2.png" alt="">');
}

if (person.race === 'Latino' && person.gender === 'Male') {
    $('#endcharacter').append('<img src="images/people/male2.png" alt="">');
}

if (person.race === 'Black' && person.gender === 'Male') {
    $('#endcharacter').append('<img src="images/people/male3.png" alt="">');
}

//Picks character if female

if (person.race === 'White' && person.gender === 'Female') {
    $('#endcharacter').append('<img src="images/people/female1.png" alt="">');
}

if (person.race === 'Asian' && person.gender === 'Female') {
    $('#endcharacter').append('<img src="images/people/female1.png" alt="">');
}

if (person.race === 'Native American' && person.gender === 'Female') {
    $('#endcharacter').append('<img src="images/people/female2.png" alt="">');
}

if (person.race === 'Latino' && person.gender === 'Female') {
    $('#endcharacter').append('<img src="images/people/female2.png" alt="">');
}

if (person.race === 'Black' && person.gender === 'Female') {
    $('#endcharacter').append('<img src="images/people/female3.png" alt="">');
}

$('.s9').append('<h3>You managed to score: ' + privilegeCounter + ' Privilege Points.</h2>');

    if (privilegeCounter === 0) {
        $('.s9').append('<p>You are exactly where you started. That seems unfair.</p>');
    }
    else if (privilegeCounter > 0) {
        $('.s9').append('<p>You managed to make it with a bit more Privilege than everyone else!</p>');
    }
    else if (privilegeCounter < 0) {
        $('.s9').append('<p>You do not seem to have much Privilege in this life. Perhaps refresh the page and try again?</p>');
    }

});