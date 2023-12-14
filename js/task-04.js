const form = document.querySelector(".login-form");
const response = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim(); 

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
    }

    const data = new FormData(event.target);

    data.forEach((value, key) => {
        response[key] = value;
    })

    console.log(response);

    form.reset();
});