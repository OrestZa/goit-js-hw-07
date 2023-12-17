const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();

    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
    } else {
        const formData = {email, password};

        console.log(formData);
        evt.currentTarget.reset();
    }
}
