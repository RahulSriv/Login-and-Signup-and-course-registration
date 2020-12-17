function validatecnfpsw() {
    var c = document.myform.cnfpsw.value;
    var d = document.myform.psw.value;
    if(c!=d) { 
        alert("Passwords do not match! Please try again.");
        return false;
    }
    else {
        alert("Account created successfully!");
    }
}

function validatepsw() {
    var p = document.myform.psw.value;
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!p.match(decimal)) { 
        alert("Please enter a valid password.\n"+"Password must be 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
        return false;
    }
    validatecnfpsw();
}

function validateemail() {
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }
    validatepsw();
}

function validatename() {
    var name = document.myform.name.value;
    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }
    validateemail();
}

function validateform() {
    validatename();
}

function selected() {
    alert("Selected courses added successfully!");
}