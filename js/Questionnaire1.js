function recommendationSubmit() {

    // Set variables for fields that need to be validated
    var course = document.getElementsByName('courses');
    var island = document.getElementsByName('island');
    var userAge = document.getElementById("age").value;
    var userName = document.getElementById("name").value;
    var lowerBoundary = 15;
    var higherBoundary = 91;
    //const courseButtons = document.querySelectorAll('input[name="courses"]');

    //Error message array
    const errorMessages = [
        "Please enter your name",
        "Name field can only contain a-z, A-Z",
        "Please enter a valid age between 15-90",
        "Please select a course you are interested in pursuing",
        "Please select where in New Zealand you want to study"

    ];

    //Name field validation
    if(userName == ""){
        alert(errorMessages[0]);
        return false;
    }
    
    //Name field character validation
    var letterNumber = /^[a-z A-Z]+$/;
    if(!userName.match(letterNumber)){
        alert(errorMessages[1]); 
        return false;
    }
    
    
    //Age field validation
    if (userAge < lowerBoundary || userAge > higherBoundary) {
        alert(errorMessages[2]);
        return false;
    }

    //Course choice validation
    var courseSelected = document.querySelector('input[type=radio][name=courses]:checked');
    if(courseSelected == null){
        alert(errorMessages[3]);
        return false;
    }

    //Island choice validation
    var islandSelected = document.querySelector('input[type=radio][name=island]:checked');
    if(islandSelected == null){
        alert(errorMessages[4]);
        return false;
    }


    for (i = 0; i < course.length; i ++) {
        if(course[i].checked){
            console.log(course[i].value);
            if(course[i].value != ""){
                document.getElementById("quiz").submit();
            }
        }
    }
    

}



