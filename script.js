// Wait for the page to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const button = document.getElementById('myButton');

    // Add a 'click' event listener to the button
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});