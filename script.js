// Smooth scrolling when clicking on nav links
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.hash);
        target.scrollIntoView({behavior: 'smooth'});
    });
}

// Form submission
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    const formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
    formData.append('message', messageInput.value);

    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            form.reset();
        })
        .catch(error => {
            console.error(error);
            alert('Oops! Something went wrong. Please try again later.');
        });
});
