/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 /*$("#main").append(["Norah Altwaim"]);
 var name = "Norah Altwaim";
 var role = "Web Developer";
 var formattedName =  HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName); */
 
 var bio = {
	 "name" : "Norah Altwaim",
     "role": "Web Developer",
      "contacts" : {
            "mobile" : " 054xxxxxxx",
            "email": " nora_altwaim@yahoo.com",
            "twitter": " @NorahMT",
			"github": " Norah92",
            "location": " Riyadh"
	  },
      "welcomeMessage": "Welcome!", 
      "skills": ["Web Development","Java Script", "HTML", "Css"],
      "biopic": "images/abstract-q-c-300-300-1.jpg"
 };

 bio.display = function() {
	 var formattedName =  HTMLheaderName.replace("%data%",bio.name);
	 $("#header").append(formattedName);
	 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
     $("#header").append(formattedRole);
	 var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	 $("#topContacts").append(formattedMobile);
	 var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
	 $("#topContacts").append(formattedEmail);
	 var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	 $("#topContacts").append(formattedTwitter);
	 var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	 $("#topContacts").append(formattedGithub);
	 var formattedLocation = HTMLlocation.replace("%data%",bio.location);
	 $("#topContacts, #footerContacts").append(formattedLocation);
	 var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	 $("#footerContacts").append(formattedWelcomeMsg);
	 var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	 $("#header").append(formattedBioPic);     

     if (bio.skills.length > 0 ) {
    $('#header').append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
}	 
	 
 } ;
 
 bio.display();
  
 var education = {
	 "schools": [
	 {
	 "name": "Princess Nora University", 
		   "degree": "Bachelor",
		   "dates": "2010 - 2015",
           "location": "Riyadh",
           "majors": ["Computer Sciences"],
	 "url": "pnu.com.sa" }
	 ],
	 
      "onlineCourses": [
	  {
           "title": "Front-End Web Development",
           "school": "Udacity",
           "dates": "2016 - 2017",
	       "url": "Udacity.com" 
	  }		   
		   ]
		   
 }; 
 
 education.display = function() {
 education.schools.forEach(function(school) {
	 $("#education").append(HTMLschoolStart);
	 
	 var formattedName = HTMLschoolName.replace("%data%",school.name);
	 $(".education-entry:last").append(formattedName);
	 var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
	 $(".education-entry:last").append(formattedDegree);
	 var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
	 $(".education-entry:last").append(formattedDates);
	 var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
	 $(".education-entry:last").append(formattedLocation);
	 var formattedMajors = HTMLschoolMajor.replace("%data%",school.majors);
	 $(".education-entry:last").append(formattedMajors);
 } )
    
     education.onlineCourses.forEach(function(onlineCourse) { 
     $("#education").append(HTMLonlineClasses);
	 $("#education").append(HTMLschoolStart);
	 var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
	 $(".education-entry:last").append(formattedOnlineTitle);
	 var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
	 $(".education-entry:last").append(formattedOnlineSchool);
	 var formattedOnlineDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
	 $(".education-entry:last").append(formattedOnlineDates);
	 var formattedOnlineUrl = HTMLonlineURL.replace("%data%",onlineCourse.url);
	 $(".education-entry:last").append(formattedOnlineUrl);
 }  )
 };
   
 education.display();


 var work = {
	 "jobs": [
	 {
           "employer": "NCB", 
           "title": "Trainee", 
           "dates": "2015 - 2016",
		   "location": "Jeddah",
	 "description": "IT Trainee" 
	 }	
	 ]
 };
 work.display = function() {
 work.jobs.forEach(function(job) { 
    $("#workExperience").append(HTMLworkStart);
	 
	 var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
	 $(".work-entry:last").prepend(formattedEmployer);
	 var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
	 $(".work-entry:last").prepend(formattedTitle);
	 var formattedDates = HTMLworkDates.replace("%data%",job.dates);
	 $(".work-entry:last").prepend(formattedDates);
	 var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
	 $(".work-entry:last").prepend(formattedLocation);
	 var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
	 $(".work-entry:last").prepend(formattedDescription);
 } )
  };
  work.display();
  
 var projects = {
	 "projects" : [
	 {
            "title":"Future Library",
            "dates": "2015 - 2016",
            "description": "A website hosted on a cloud server",
	    "images":["images\homepage1.jpg","images\bookspage.jpg"]  
	 }
    ]   
	 
 };
 
projects.display = function () {
projects.projects.forEach(function(project) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
	 $(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
	 $(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
	 $(".project-entry:last").append(formattedDescription);

	 
	 project.images.forEach(function(image) {
     var formattedImages = HTMLprojectImage.replace("%data%",project.image);
	 $(".project-entry:last").append(formattedImages);
	 
	 });
		      
    });			
        	 
       
 };
 projects.display();
 
 $("#mapDiv").append(googleMap);

	
 

