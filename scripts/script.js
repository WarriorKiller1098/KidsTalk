// Get a reference to your textarea
const messageInput = document.querySelector('.messagebar');
let chatroom = document.querySelector('.chatroom');

// Add an event listener to it
messageInput.addEventListener('keydown', function(event) {
  // Check if the key pressed was 'Enter'
  if (event.key === 'Enter') {
    // Prevent the default behavior of the Enter key (which is a new line in a textarea)
    event.preventDefault();

    // Call your function to handle sending the message
    sendMessage(messageInput.value); // Assuming you have a function named sendMessage()
  }
});


function sendMessage(value) {
    let message = document.createElement('p');
    message.textContent = "User: " + value;
    chatroom.appendChild(message);
}