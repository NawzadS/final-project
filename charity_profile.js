// charity_profile.js

// Function to display the volunteer form
function showVolunteerForm() {
    // Create a form element
    const formContainer = document.createElement('div');
    formContainer.style.background = '#eef8fb';
    formContainer.style.padding = '1.5em';
    formContainer.style.borderRadius = '8px';
    formContainer.style.border = '1px solid #b6dde8';
    formContainer.style.marginTop = '1em';

    // Create form elements
    const form = document.createElement('form');
    form.id = 'volunteer-form';

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Full Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your full name';
    nameInput.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email Address';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'you@example.com';
    emailInput.required = true;

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Why do you want to volunteer with us?';
    const messageInput = document.createElement('textarea');
    messageInput.rows = 4;
    messageInput.placeholder = 'Your message';
    messageInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    // Append elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(submitButton);

    // Append form to the container
    formContainer.appendChild(form);

    // Append the form container to the main section
    const mainSection = document.querySelector('main');
    mainSection.appendChild(formContainer);

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for signing up to volunteer! We will be in touch soon.');
        form.reset();
        formContainer.remove(); // Remove the form after submission
    });
}

// Add event listener to the "Volunteer Now" button
document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.querySelector('#volunteer-button');
    volunteerButton.addEventListener('click', showVolunteerForm);

    // Additional interactive element: Show more charity details on hover
    const charityDetails = document.querySelector('.charity-details');
    charityDetails.addEventListener('mouseover', function() {
        const additionalInfo = document.createElement('div');
        additionalInfo.textContent = 'Helping Hands has been active since 2010, impacting thousands of lives.';
        additionalInfo.style.background = '#f0f8ff';
        additionalInfo.style.padding = '0.5em';
        additionalInfo.style.borderRadius = '5px';
        additionalInfo.style.position = 'absolute';
        additionalInfo.style.zIndex = '10';
        additionalInfo.style.border = '1px solid #007a99';
        additionalInfo.style.marginTop = '0.5em';
        charityDetails.appendChild(additionalInfo);

        // Remove additional info on mouse out
        charityDetails.addEventListener('mouseout', function() {
            additionalInfo.remove();
        });
    });
});
