document.addEventListener("DOMContentLoaded", function() { //this function is called when the Results.html page loads
    //Get the Query String from the URL
    const queryString = window.location.search;
    //Get the URL Params
    const urlValue = new URLSearchParams(queryString);
    // Set variables the values of the items in the query string
    const courseChoice = urlValue.get('courses');
    const islandChoice = urlValue.get('island');
    const userName = urlValue.get ('name');

    //Displaying User's Name in Results.html
    document.getElementById("userName").innerHTML = userName;

    //Choice Business & North Island
    if(courseChoice == "Business and Commerce" && islandChoice == "North Island") {
        document.getElementById("university").innerHTML = "University of Auckland"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/UoApage.jpeg" alt="Auckland 1" style=" height: 300px; width:400px">' //Display university image

    }
    //Choice Business & South Island
    if(courseChoice == "Business and Commerce" && islandChoice == "South Island") {
        document.getElementById("university").innerHTML = "University of Cantebury"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/UoCpage5.jpeg" alt="Canterbury 2" style=" height: 300px; width:500px"></img>' //Display university image

    }

    //Choice Health & North Island
    if(courseChoice == "Health and Sciences" && islandChoice == "North Island") {
        document.getElementById("university").innerHTML = "University of Auckland"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/UoApage.jpeg" alt="Auckland 1" style=" height: 300px; width:400px">' //Display university image

    }

    //Choice Health & South Island
    if(courseChoice == "Health and Sciences" && islandChoice == "South Island") {
        document.getElementById("university").innerHTML = "University of Otago"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/Otagopage3.jpeg" alt="Otago 2" style=" height: 300px; width:600px"></img>' //Display university image
    
    }

    //Choice Engineering & North Island
    if(courseChoice == "Engineering and Construction" && islandChoice == "North Island") {
        document.getElementById("university").innerHTML = "University of Auckland"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/UoApage.jpeg" alt="Auckland 1" style=" height: 300px; width:400px">' //Display university image

    }

    //Choice Engineering & South Island
    if(courseChoice == "Engineering and Construction" && islandChoice == "South Island") {
        document.getElementById("university").innerHTML = "University of Otago"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/Otagopage3.jpeg" alt="Otago 2" style=" height: 300px; width:600px"></img>' //Display university image

    }

    //Choice Media & North Island
    if(courseChoice == "Media, Music and Performing Arts" && islandChoice == "North Island") {
        document.getElementById("university").innerHTML = "Victoria University"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/victoriapage1.jpeg" alt="Victoria 1" style=" height: 300px; width:600px"></img>' //Display university image

    } 

    //Choice Media & South Island
        if(courseChoice == "Media, Music and Performing Arts" && islandChoice == "South Island") {
            document.getElementById("university").innerHTML = "University of Otago"; //Display the university name
            document.getElementById("universityImage").innerHTML = '<img src="images/Otagopage3.jpeg" alt="Otago 2" style=" height: 300px; width:600px"></img>' //Display university image
    
    }
    //Choice Law & North Island
        if(courseChoice == "Law and Justice" && islandChoice == "North Island") {
            document.getElementById("university").innerHTML = "Victoria University"; //Display the university name
            document.getElementById("universityImage").innerHTML = '<img src="images/victoriapage1.jpeg" alt="Victoria 1" style=" height: 300px; width:600px"></img>' //Display university image

    }
     //Choice Law & South Island
        if(courseChoice == "Law and Justice" && islandChoice == "South Island") {
            document.getElementById("university").innerHTML = "University of Canterbury"; //Display the university name
            document.getElementById("universityImage").innerHTML = '<img src="images/UoCpage5.jpeg" alt="Canterbury 2" style=" height: 300px; width:500px"></img>' //Display university image

    } 
     //Choice Arts & North Island
     if(courseChoice == "Arts and Design" && islandChoice == "North Island") {
        document.getElementById("university").innerHTML = "University of Auckland"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/UoApage.jpeg" alt="Auckland 1" style=" height: 300px; width:400px">'  //Display university image

    }
     //Choice Arts & South Island
     if(courseChoice == "Arts and Design" && islandChoice == "South Island") {
        document.getElementById("university").innerHTML = "University of Canterbury"; //Display the university name
        document.getElementById("universityImage").innerHTML = '<img src="images/UoCpage5.jpeg" alt="Canterbury 2" style=" height: 300px; width:500px"></img>'  //Display university image

    } 
});

