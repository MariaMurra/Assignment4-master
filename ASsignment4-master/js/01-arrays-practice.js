/*eslint-env browser*/

//STEP 1

/*
var favMovies = ["The Gladiator", "Captain America, the first avenger", "Troy", "Twister", "Princess Diaries"];
window.console.log(favMovies[1]);
*/

//STEP 2

/*
var movies = new Array(length);
movies[0] = "The Gladiator";
movies[1] = "Captain America, the first avenger";
movies[2] = "Troy";
movies[3] = "Twister";
movies[4] = "Princess Diaries";
window.console.log(movies[0]);
*/

//STEP 3

/*
var movies = new Array(length);
movies[0] = "The Gladiator";
movies[1] = "Captain America, the first avenger";
movies[2] = "Troy";
movies[3] = "Twister";
movies[4] = "Princess Diaries";
//ADD to the Array

movies.push("Silence of the Lambs");
window.console.log(movies.length);
*/

//STEP 4

/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries"];
delete movies[0];
window.console.log(movies);
*/

//STEP 5

/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], i;

for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
*/

//STEP 6
/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], i;

for (i in movies) {
    window.console.log(movies[i]);
}
*/

//STEP 7

/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], i;

for (i in movies) {
    window.console.log(movies.sort());
}
*/

//STEP 8
/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], leastFavMovies = ["New york, I love you", "Son of the Mask", "Black Swan"];

window.console.log("Movies I like:" + "\n\n");
movies.forEach(function (movies) {
    "use strict";
    window.console.log(movies);
});

window.console.log("\nMovies I regret watching:" + "\n\n");
leastFavMovies.forEach(function (leastFavMovies) {
    "use strict";
    window.console.log(leastFavMovies);
});
*/


//STEP 9

/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], leastFavMovies = ["New york, I love you", "Son of the Mask", "Black Swan"], i;

i = movies.concat(leastFavMovies);

window.console.log(i.reverse());
*/


//STEP 10

/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], leastFavMovies = ["New york, I love you", "Son of the Mask", "Black Swan"], i;

i = movies.concat(leastFavMovies);

window.console.log(i[9]);
*/

//STEP 11

/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], leastFavMovies = ["New york, I love you", "Son of the Mask", "Black Swan"], i;

i = movies.concat(leastFavMovies);

window.console.log(i[0]);
*/

//STEP 12

/*
var movies = ["Gladiator", "Cap America", "Troy", "Twister", "Princess Diaries", "Silence of the Lambs", "Up"], leastFavMovies = ["New york, I love you", "Son of the Mask", "Black Swan"], i;

i = movies.concat(leastFavMovies);
i.splice(7, 9, "Bruce Almighty", "Matrix", "Robin Hood");
window.console.log(i);
*/

//STEP 13

/*
//VARIABLE/ ARRAY DECLARATIONS

var employee1 = [];
var employee2 = [];
var employees = [];

//ASSOCIATIVE ARRAY 1
employee1["id"]         = 69875;
employee1["name"]       = "Neil Anderson";
employee1["title"]      = "Web Developer";
employee1["department"] = "Tech Support";
employee1["isCurrent"]  = true;

//ASSOCIATIVE ARRAY 2
employee2["id"]         = 56341;
employee2["name"]       = "Jane Diaz";
employee2["title"]      = "Hiring Manager";
employee2["department"] = "Human Resources";
employee2["isCurrent"]  = true;


employees = [employee1, employee2];

//LOG NAME
window.console.log(employees[1]["name"]);

*/


//STEP 14

/*
var employee1 = [];
var employee2 = [];
var employees = [];
var string1 = "";

employee1["id"]         = 69875;
employee1["name"]       = "Neil Anderson";
employee1["title"]      = "Web Developer";
employee1["department"] = "Tech Support";
employee1["isCurrent"]  = true;

employee2["id"]         = 56341;
employee2["name"]       = "Jane Diaz";
employee2["title"]      = "Hiring Manager";
employee2["department"] = "Human Resources";
employee2["isCurrent"]  = true;

employees = [employee1, employee2];

employees.forEach(function (item) {
    "use strict";
    window.console.log(item["name"]);
});
*/


//STEP 15
/*

var employee1 = [];
var employee2 = [];
var employee3 = [];
var employees = [];
var string1 = "";

employee1["id"]         = 69875;
employee1["name"]       = "Neil Anderson";
employee1["title"]      = "Web Developer";
employee1["department"] = "Tech Support";
employee1["isCurrent"]  = true;

employee2["id"]         = 56341;
employee2["name"]       = "Jane Diaz";
employee2["title"]      = "Hiring Manager";
employee2["department"] = "Human Resources";
employee2["isCurrent"]  = true;

employee3["id"]         = 12345;
employee3["name"]       = "Paul Recoletto";
employee3["title"]      = "Product Tester";
employee3["department"] = "Product Development";
employee3["isCurrent"]  = false;

employees = [employee1, employee2, employee3];

employees.forEach(function (item) {
    "use strict";
    if (item["isCurrent"] === true) {
        window.console.log(item["name"]);
    }
});

*/

//STEP 16

//STILL WORKING ON THIS ONE
/*
var movieRanking = [["The Gladiator", 1], ["Captain America", 2], ["Troy", 3], ["Twister", 4], ["Princess Diaries", 5]];
var i;

movieRanking.filter(function (findTitle, self) {
    "use strict";
    window.console.log(self.indexOf(findTitle));
    }
);
*/





//STEP 17
/*
var employees = ["John", "Jacob", "Tinker", "Heimer", "Smith"];
var i;
var showEmployee = function () {
        "use strict";
        employees.forEach(function (item) {
            window.console.log(item + "\n");
        });
    };
window.console.log("Employees: \n\n\n");
showEmployee(employees);
*/

//STEP 18

// filter false, null, 0 and blank

/*
function filtering(value) {
    "use strict";
    if (value !== false || value !== null || value !== 0 || value !== "") {
        return value;
    }
}

function filter_array_values(arr) {
    "use strict";
    arr = arr.filter(filtering);
    return arr;
}

window.console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));*/


//STEP 19

/*var arr = [];

function arrRandom() {
    "use strict";
    var i = Math.round(Math.random() * arr.length);
    window.console.log(arr[i]);
}

arrRandom();*/

//STEP 20

//Write a JavaScript function to get the largest number from a numeric array.

var arr = [1, 6, 10, 25, 9, 60, 652, 125, 856, 745, 007, 74];

function largestNum() {
    "use strict";
    for(var i = 0; i < arr.length; i+=){
        if ()
        } 
}