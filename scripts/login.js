// scripts/login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from reloading the page

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            messageDiv.style.color = 'orange';
            messageDiv.textContent = 'Please enter your username and password!';
            return;
        }

        // --- IMPORTANT: No actual password check here! ---
        // Since we removed validAccounts, any non-empty username/password
        // will now be considered 'valid' for demonstration purposes.
        // In a real app, this is where you'd send data to a server for verification.

        messageDiv.style.color = 'lightgreen';
        messageDiv.textContent = `Logging in as ${username}...`;

        // Set a cookie with the entered username
        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // Cookie expires in 7 days
        const expires = "expires=" + d.toUTCString();
        document.cookie = `kidstalk_username=${username};${expires};path=/`;
        console.log("Cookie set:", document.cookie);

        // Redirect to the chat page
        setTimeout(() => {
            window.location.href = 'chat.html';
        }, 1500);
    });
});
