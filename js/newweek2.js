function akanNames() {
    /*OUR WORKING LISTS */
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //List of days of the week
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //List of female names
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //List of male names

    /* USER PROMPS */
    var dateInput = prompt("Enter date of birth (YYYY-MM-DD):");


    /*DATE MANIPULATION VARIABLES*/
    var birthDate = new Date(dateInput);//uses the variable dateInputfrom the user to create a caleder date
    var dateyenyewe = birthDate.getDay();//pick the day from the date object
    var birthMonth = birthDate.getMonth();//picks the month from the object
    var birthYear = birthDate.getFullYear();// picks the month from the object

    /* USING THE DATES TO ACCESS THE NAM LIST*/
    var genderFemale = femaleNames[dateyenyewe];
    var genderMale = maleNames[dateyenyewe];

    /*CAPTURE WRONG DATE INPUTS*/
    if (
        dateyenyewe >= 0 &&
        dateyenyewe <= 7 &&
        birthMonth >= 0 &&
        birthMonth <= 12 &&
        dateInput.length === 10 &&
        birthYear >= 1000
    ) {
        var sex = prompt("Enter your Gender (M/F):").toUpperCase(); //takes the user gender and convert it to toUpperCase
        /* to capture wrong gender choice */

        if (sex === "M" || sex === "F" || sex === "MALE" || sex === "FEMALE") {

            if (sex === "M") {
                document.getElementById("myFeedback").innerHTML="Your Akan name is " + genderMale;
                // alert("Your Akan name is " + genderMale);
            }
            else {
                document.getElementById("myFeedback").innerHTML="Your Akan name is " + genderFemale;            
                

                // alert("Your Akan name is " + genderFemale);

            }
        }
        else {
            alert("Invalid Gender use F/M");
        }
    }

    else {
        alert("WRONG DATE FORMAT. PLEASE USE YYYY-MM-DD\nExample: 2022-10-08");
    }
}
