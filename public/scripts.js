// Function to display the contact form
function displayForm() {
    document.getElementById('contact-form').style.display = 'block';
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to the contact button
document.getElementById('contactButton').addEventListener('click', displayForm);

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.text())
        .then(data => {
            alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
            document.getElementById('contactForm').reset();
            document.getElementById('contact-form').style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    } else {
        alert('Please fill out all fields.');
    }
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
