var race = ['White', 'Black', 'Asian', 'Native American', 'Latino', 'Other'];
    
var gender = ['Male', 'Female'];
        
var sexualOrientation = ['Hetrosexual', 'Bisexual', 'Other'];
    
var status = ['Lower Class', 'Working Class', 'Lower Middle', 'Upper Middle', 'Upper Class'];
        
var education = ['Less than high school', 'High School', 'Some College', 'Associate', 'Bachelor', 'Master', 'Doctor' ];
        
var parents;


var decide = Math.floor((Math.random() * race.length) + 0);
var decide2 = Math.floor((Math.random() * gender.length) + 0);
var decide3 = Math.floor((Math.random() * sexualOrientation.length) + 0);
var decide4 = Math.floor((Math.random() * status.length) + 0);
var decide5= Math.floor((Math.random() * education.length) + 0);
var decide6 = Math.floor((Math.random() * 2) + 0);



console.log(decide);
console.log(decide2);
console.log(decide3);
console.log(decide4);
console.log(decide5);
console.log(decide6);
