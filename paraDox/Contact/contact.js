document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".main");
    const nameInput = document.getElementById("youname");
    const emailInput = document.getElementById("youemail");
    const messageInput = document.getElementById("msg");
    const submitButton = document.getElementById("submit");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            nameInput.focus();
            isValid = false;
        }

        // Validate Email
        if (emailInput.value.trim() === "") {
            alert("Please enter your email address.");
            emailInput.focus();
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            messageInput.focus();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevents form submission if validation fails
        }
        location.reload()
    });

    function validateEmail(email) {
        // Basic email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


});

submitButton.addEventListener("click", function(page) {
    page.location.reload()
})

