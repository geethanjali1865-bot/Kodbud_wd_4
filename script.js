function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (name === "" || email === "" || phone === "" || message === "") {
        error.innerHTML = "All fields are required!";
        return false;
    }

    if (!email.match(emailPattern)) {
        error.innerHTML = "Enter valid email!";
        return false;
    }

    if (!phone.match(phonePattern)) {
        error.innerHTML = "Phone number must be 10 digits!";
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}