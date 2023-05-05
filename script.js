//id declaration
//for personal details
const nameIn = document.getElementById("your-name");
var surnameIn = document.getElementById("surname");
var phoneNoIn = document.getElementById("phone-no");
var birthDateIn = document.getElementById("birth-date");
var emailIdIn = document.getElementById("mail-id");
var linkedinIdIn = document.getElementById("linkedin-url");
var objectiveIn = document.getElementById("objective");

//for education details
var degreeIn = document.getElementById("degree");
var departmentIn = document.getElementById("department");
var cgpaIn = document.getElementById("cgpa");
var ugCompletedYearIn = document.getElementById("ug-completed-year");
//for 12th
var twelfthInstititionIn = document.getElementById("twelfth-institition-name");
var twelfthPercentageIn = document.getElementById("twelfth-percentage");
var twelfthCompletedYearIn = document.getElementById("twelfth-completed-year");
//for 10th
var tenthInstititionIn = document.getElementById("tenth-institition-name");
var tenthPercentageIn = document.getElementById("tenth-percentage");
var tenthCompletedYearIn = document.getElementById("tenth-completed-year");

// display a content in console.
function displayData() {
    //to retrive data from default browser localstorage
    var name = localStorage.getItem("name");
    var surname = localStorage.getItem("surname");
    var phoneNo = localStorage.getItem("phoneNo");
    var birthDate = localStorage.getItem("birthDate");
    var emailId = localStorage.getItem("emailId");
    var linkedinId = localStorage.getItem("linkedinId");
    var objective = localStorage.getItem("objective");

    var degree = localStorage.getItem("degree");
    var department = localStorage.getItem("department");
    var cgpa = localStorage.getItem("cgpa");
    var ugCompletedYear = localStorage.getItem("ugCompletedYear");

    var twelfthInstitition = localStorage.getItem("twelfthInstitition");
    var twelfthPercentage = localStorage.getItem("twelfthPercentage");
    var twelfthCompletedYear = localStorage.getItem("twelfthCompletedYear");

    var tenthInstitition = localStorage.getItem("tenthInstitition");
    var tenthPercentage = localStorage.getItem("tenthPercentage");
    var tenthCompletedYear = localStorage.getItem("tenthCompletedYear");

    //to display the retrived data
    console.log(name);
    console.log(surname);
    console.log(phoneNo);
    console.log(birthDate);
    console.log(emailId);
    console.log(linkedinId);
    console.log(objective);

    console.log(degree);
    console.log(department);
    console.log(cgpa);
    console.log(ugCompletedYear);

    console.log(twelfthInstitition);
    console.log(twelfthPercentage);
    console.log(twelfthCompletedYear);

    console.log(tenthInstitition);
    console.log(tenthPercentage);
    console.log(tenthCompletedYear);
}

//call this function to get the user basic details
function getUserDetails() {
    event.preventDefault();

    var name = nameIn.value;
    var surname = surnameIn.value;
    var phoneNo = phoneNoIn.value;
    var birthDate = birthDateIn.value;
    var emailId = emailIdIn.value;
    var linkedinId = linkedinIdIn.value;
    var linkedinId = linkedinIdIn.value;
    var objective = objectiveIn.value;

    var degree = degreeIn.options[degreeIn.selectedIndex].value
    var department = departmentIn.options[departmentIn.selectedIndex].value
    var cgpa = cgpaIn.value;
    var ugCompletedYear = ugCompletedYearIn.value;

    var twelfthInstitition = twelfthInstititionIn.value;
    var twelfthPercentage = twelfthPercentageIn.value;
    var twelfthCompletedYear = twelfthCompletedYearIn.value;

    var tenthInstitition = tenthInstititionIn.value;
    var tenthPercentage = tenthPercentageIn.value;
    var tenthCompletedYear = tenthCompletedYearIn.value;

    let error = false;

    if (tenthCompletedYear == "") {
        setError(tenthCompletedYearIn);
        error = true;
    } else {
        setSuccess(tenthCompletedYearIn);
    }

    if (tenthPercentage == "") {
        setError(tenthPercentageIn);
        error = true;
    } else {
        setSuccess(tenthPercentageIn);
    }

    if (tenthInstitition == "") {
        setError(tenthInstititionIn);
        error = true;
    } else {
        setSuccess(tenthInstititionIn);
    }

    if (twelfthCompletedYear == "") {
        setError(twelfthCompletedYearIn);
        error = true;
    } else {
        setSuccess(twelfthCompletedYearIn);
    }

    if (twelfthPercentage == "") {
        setError(twelfthPercentageIn);
        error = true;
    } else {
        setSuccess(twelfthPercentageIn);
    }

    if (twelfthInstitition == "") {
        setError(twelfthInstititionIn);
        error = true;
    } else {
        setSuccess(twelfthInstititionIn);
    }

    if (ugCompletedYear == "") {
        setError(ugCompletedYearIn);
        error = true;
    } else {
        setSuccess(ugCompletedYearIn);
    }

    if (cgpa == "") {
        setError(cgpaIn);
        error = true;
    } else {
        setSuccess(cgpaIn);
    }

    if (objective == "") {
        setError(objectiveIn);
        error = true;
    } else {
        setSuccess(objectiveIn);
    }

    if (linkedinId == "") {
        linkedinId = "null"
    }

    if (emailId == "") {
        setError(emailIdIn);
        error = true;
    } else {
        setSuccess(emailIdIn);
    }

    if (birthDate == "") {
        setError(birthDateIn);
        error = true;
    } else {
        setSuccess(birthDateIn);
    }

    if (phoneNo == "") {
        setError(phoneNoIn);
        error = true;
    } else {
        setSuccess(phoneNoIn);
    }

    if (surname == "") {
        surname = "null"
    }

    if (name == "") {
        setError(nameIn);
        error = true;
    } else {
        setSuccess(nameIn);
    }

    if (error == false) {
        //to store the data in default local storage of your browser
        localStorage.setItem("name", name);
        localStorage.setItem("surname", surname);
        localStorage.setItem("phoneNo", phoneNo);
        localStorage.setItem("birthDate", birthDate);
        localStorage.setItem("emailId", emailId);
        localStorage.setItem("linkedinId", linkedinId);
        localStorage.setItem("objective", objective);

        localStorage.setItem("degree", degree);
        localStorage.setItem("department", department);
        localStorage.setItem("cgpa", cgpa);
        localStorage.setItem("ugCompletedYear", ugCompletedYear);

        localStorage.setItem("twelfthInstitition", twelfthInstitition);
        localStorage.setItem("twelfthPercentage", twelfthPercentage);
        localStorage.setItem("twelfthCompletedYear", twelfthCompletedYear);

        localStorage.setItem("tenthInstitition", tenthInstitition);
        localStorage.setItem("tenthPercentage", tenthPercentage);
        localStorage.setItem("tenthCompletedYear", tenthCompletedYear);

        displayData();
    }   
}

// this function is called when user doesn't enter anything is the required input field(for error)
function setError(error) {
    error.focus();
    error.style.cssText = "border: 1px solid red; border-radius: 5px; outline: none;";

}

// this function is called when user enter something in input field(for success)
function setSuccess(success) {
    success.style.cssText = "border: 1px solid #aaa; border-radius: 2px;";
}

//onclick listerner of button next
document.getElementById("nextBtn").addEventListener("click", getUserDetails);

