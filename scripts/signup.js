// scripts/signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const messageDiv = document.getElementById('message'); // For displaying feedback messages to the user

    // Add an event listener to the form that fires when it's submitted
    signupForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior, which would reload the page
        event.preventDefault();

        // Get the values from the input fields and remove any leading/trailing whitespace
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // --- Start of Front-end Validation ---
        // (Remember: On GitHub Pages, there's no actual server-side saving of accounts.
        // This is purely for a good user experience and learning validation basics.)

        // 1. Check if any field is empty
        if (username === '' || password === '' || confirmPassword === '') {
            messageDiv.style.color = 'orange'; // Set message color to orange for warnings
            messageDiv.textContent = 'Please fill in all fields!'; // Display an alert message
            return; // Stop the function here if validation fails
        }

        // 2. Check password length (example: at least 4 characters for kids)
        if (password.length < 4) {
            messageDiv.style.color = 'orange';
            messageDiv.textContent = 'Password needs to be at least 4 characters!';
            return;
        }

        // 3. Check if password and confirm password match
        if (password !== confirmPassword) {
            messageDiv.style.color = 'red'; // Set message color to red for errors
            messageDiv.textContent = 'Passwords do not match!';
            return;
        }

        // --- End of Front-end Validation ---

        // If all validation checks pass, simulate a successful sign-up
        messageDiv.style.color = 'lightgreen'; // Set message color to green for success
        messageDiv.textContent = `Welcome ${username}! You're signed up. Now, let's log in!`;

        // After a short delay (2 seconds), redirect the user to the login page
        // This simulates moving to the next step after account creation.
        setTimeout(() => {
            window.location.href = 'login.html'; // Redirect to your login page
        }, 2000); // 2000 milliseconds = 2 seconds
    });
});
