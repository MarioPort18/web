document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage('Tú: ' + userInput);
        handleUserInput(userInput);
        document.getElementById('user-input').value = '';
    }
});

function addMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleUserInput(input) {
    
    const responses = {
        "lema de la unefa": "Exelencia Educativa Abierta al Pueblo!",
        "lema": "Exelencia Educativa Abierta al Pueblo!",
        // aqui van las preguntas q se van a colocar //
    };

    const response = responses[input] || "Lo siento, no tengo una respuesta para eso.";
    addMessage('Tutor: ' + response);
}