document.getElementById('login-button').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you would validate the username and password.
    // For now, we just simulate successful login.
    if (username === 'admin' && password === 'heathen') { // replace with actual validation
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('terminal-container').classList.remove('hidden');
        document.getElementById('terminal-input').focus();
    } else {
        alert('Invalid credentials');
    }
});

let enteredGodless = false;
let enteredGodliving = false;

function clearTerminal() {
    var terminal = document.getElementById('terminal');
    terminal.value = ''; // Clear the terminal display
    // Reset any state variables if needed
    // enteredGodless = false;
    // enteredGodliving = false;
}


document.getElementById('terminal-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        var command = this.value;
        this.value = '';

        // Update state based on command
        if (command === 'godless') {
            enteredGodless = true;
        } else if (command === 'godliving') {
            enteredGodliving = true;
        }

        // Send the command to the C++ backend -- will remove for other project
        fetch('http://localhost:5000/command', {
            method: 'POST',
            body: command,
            headers: {
                'Content-Type': 'text/plain'
            }
        })
            .then(response => response.text())
            .then((response) => {
                var terminal = document.getElementById('terminal');
                terminal.value += '\n' + response;
                terminal.scrollTop = terminal.scrollHeight;
            })
            .catch(error => console.error('Error:', error));

        // Display the entered text in the terminal
        var terminal = document.getElementById('terminal');
        terminal.value += '\n> ' + command;
        terminal.scrollTop = terminal.scrollHeight;


        // Check if both godless and godliving have been entered
        if (enteredGodless && enteredGodliving) {
            // Show the link
            document.getElementById('link-container').style.display = 'block';

            // Listen for link click to display new blinking message
            document.querySelector('#link-container a').addEventListener('click', function() {
                document.getElementById('divine-question').classList.remove('hidden');
            });

            // Reset the state variables
            enteredGodless = false;
            enteredGodliving = false;
        }
        // Check for the reset state command
        else if (command.toLowerCase() === 'reset state') {
            // Send command to server to reset the state
            fetch('/reset-state', {
                method: 'POST',
                // Additional options like headers, body, etc.
            })
                .then(response => response.text())
                .then((response) => {
                    terminal.value += '\n' + response;
                    terminal.scrollTop = terminal.scrollHeight;
                })
                .catch(error => console.error('Error:', error));
        }
        // Check for the special command to open a new tab
        else if (command === 'start "rabbit.exe"') {
            window.open('../../404.html', '_blank'); // Opens a new tab with the game interface
        } else if (command === 'clear') {
            clearTerminal(); // Call the clear function
        }
        // All other inputs are displayed as they are without any error or special handling
    }
});



// Function to toggle terminal position
function toggleTerminalPosition() {
    var terminalContainer = document.getElementById('terminal-container');
    if (terminalContainer.classList.contains('bottom-left-terminal')) {
        terminalContainer.classList.remove('bottom-left-terminal');
        terminalContainer.classList.add('underneath-input');
    } else {
        terminalContainer.classList.remove('underneath-input');
        terminalContainer.classList.add('bottom-left-terminal');
    }
}

document.getElementById('toggle-button').addEventListener('click', toggleTerminalPosition);


// Function to change text color
function changeTextColor(color) {
    var terminalContainer = document.getElementById('terminal-container');
    var loginContainer = document.getElementById('login-container');
    
    // Remove existing color classes from both containers
    terminalContainer.classList.remove('white-text', 'vibrant-purple-text', 'vibrant-green-text');
    loginContainer.classList.remove('white-text', 'vibrant-purple-text', 'vibrant-green-text');
    
    // Add the selected color class to both containers
    if (color === 'white') {
        terminalContainer.classList.add('white-text');
        loginContainer.classList.add('white-text');
    } else if (color === 'purple') {
        terminalContainer.classList.add('vibrant-purple-text');
        loginContainer.classList.add('vibrant-purple-text');
    } else if (color === 'green') {
        terminalContainer.classList.add('vibrant-green-text');
        loginContainer.classList.add('vibrant-green-text');
    }
}

// Event listeners for color change buttons
document.getElementById('color-white-button').addEventListener('click', function() {
    changeTextColor('white');
});

document.getElementById('color-purple-button').addEventListener('click', function() {
    changeTextColor('purple');
});

document.getElementById('color-green-button').addEventListener('click', function() {
    changeTextColor('green');
});


