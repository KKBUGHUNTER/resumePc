//id declaration
const nameIn = document.getElementById("your-name");
var surnameIn = document.getElementById("surname");
var degreeIn = document.getElementById("degree");
var departmentIn = document.getElementById("department");
var emailIdIn = document.getElementById("mail-id");
var linkedinIdIn = document.getElementById("linkedin-url");


//call this function to get the user basic details
function getUserDetails() {
    event.preventDefault();

    var name = nameIn.value;
    var surname = surnameIn.value;
    var degree = degreeIn.options[degreeIn.selectedIndex].value
    var department = departmentIn.options[departmentIn.selectedIndex].value
    var emailId = emailIdIn.value;
    var linkedinId = linkedinIdIn.value;
    let error = false;

    if (name == "") {
        setError(nameIn);
        error = true;
    } else {
        setSuccess(nameIn);
    }

    if (surname == "") {
        surname = "null"
    }

    if (emailId == "") {
        setError(emailIdIn);
        error = true;
    } else {
        setSuccess(emailIdIn);
    }

    if (linkedinId == "") {
        linkedinId = "null"
    }

    if (error == false) {
        //to store the data in default local storage of your browser
        localStorage.setItem("name", name);
        localStorage.setItem("surname", surname);
        localStorage.setItem("degree", degree);
        localStorage.setItem("department", department);
        localStorage.setItem("emailId", emailId);
        localStorage.setItem("linkedinId", linkedinId);

    }
}

// this function is called when user doesn't enter anything is the required input field(for error)
function setError(error) {
    error.style.cssText = "border: 1px solid red; border-radius: 2px";
}

// this function is called when user enter something in input field(for success)
function setSuccess(success) {
    success.style.cssText = "border: 1px solid gray; border-radius: 2px";
}

//onclick listerner of button next
document.getElementById("nextBtn").addEventListener("click", getUserDetails);
