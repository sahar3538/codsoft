// Select the calculator screen and buttons
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.btn-clear');
const equalButton = document.querySelector('.btn-equal');

// Add event listeners to number and operator buttons
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const value = event.target.dataset.num;
        // Append the clicked button's value to the screen
        if (value) {
            screen.value += value;
        }
    });
});

// Add event listener to the equal button
equalButton.addEventListener('click', function () {
    try {
        // Evaluate the expression entered on the screen
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error'; // Show error if the expression is invalid
    }
});

// Add event listener to the clear button
clearButton.addEventListener('click', function () {
    // Clear the screen
    screen.value = '';
});
