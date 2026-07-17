document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;

    // Display the submitted information
    const result = document.getElementById("result");
    result.style.display = "block";

    result.innerHTML = `
        <h2>Registration Successful!</h2>
        <p class="success">Your registration has been submitted successfully.</p>
        <hr>
        <h3>Submitted Information</h3>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Level:</strong> ${level}</p>
    `;

    // Clear the form
    document.getElementById("registrationForm").reset();
});
