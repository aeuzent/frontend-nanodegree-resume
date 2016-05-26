/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Alex Euzent";
 var role = "Web Developer";

 var bio = {
 	"name" : "Alex Euzent",
 	"role" : "Web Developer",
 	"contacts" : {
 		"mobile" : "555-55555",
 		"email" : "aeuzent@gmail.com",
 		"github" : "aeuzent",
 		"location" : "Seattle"
 	},
 	"welcome" : "I'm not the messiah",
 	"skills" : ["I can fly", "Shoot lasers", "Eat pennies"],
 	"bipPic" : "http://i.imgur.com/pVl6W3C.jpg"
};

var education
 

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


$("header").append(HTML)