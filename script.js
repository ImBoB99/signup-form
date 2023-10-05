function passwordVerify () {
    const passwordOne = document.getElementById("password");
    const passwordTwo = document.getElementById("passwordConfirm");
    const errorMessage = document.querySelector(".error-message");

    if (passwordOne.value !== passwordTwo.value) {
        errorMessage.classList.add("error-message-shown");
    }
}


const button = document.querySelector(".form-button");

button.addEventListener("click", passwordVerify);