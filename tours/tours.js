function sendEmail() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const departureDateInput = document.getElementById('departureDate');
    const returnDateInput = document.getElementById('returnDate');

    // Determine the tour type based on the h1 tag
    const tourType = document.querySelector('.tour-info h1').textContent.trim();

    let templateId;

    // Map tour types to EmailJS template IDs
    if (tourType === 'Slum Tour in Mumbai') {
        templateId = 'template_slum_tour';
    } else if (tourType === 'Bicycle Tour') {
        templateId = 'template_bicycle_tour';
    } else {
        alert('Tour type not recognized.');
        return;
    }

    let valid = true;

    // Validation logic (as per your code)

    // If validation fails, stop execution
    if (!valid) return;

    // Prepare the email parameters
    const templateParams = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        departure_date: departureDateInput.value.trim(),
        return_date: returnDateInput.value.trim(),
        tour_type: tourType, // Include the tour type in the email
    };

    // Use EmailJS to send the email
    emailjs.send('service_yvug0d6', templateId, templateParams)
        .then(() => {
            alert('Email sent successfully!');
            $('#slumTourModal').modal('hide'); // Close the modal
        })
        .catch(error => {
            alert('Failed to send email: ' + error.text);
        });
}
