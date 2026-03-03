$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var attempts = 0;

    $('#guess-btn').click(function() {
        var guess = parseInt($('#guess-input').val());
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            $('#message').text('Please enter a number between 1 and 100!');
            $('#message').css('color', 'orange');
            return;
        }

        attempts++;

        if (guess < randomNumber) {
            $('#message').text('Too low! Try again.');
            $('#message').css('color', 'blue');
        } else if (guess > randomNumber) {
            $('#message').text('Too high! Try again.');
            $('#message').css('color', 'red');
        } else {
            $('#message').text('Correct! You got it!');
            $('#message').css('color', 'green');
            $('#guess-btn').hide();
            $('#reset-btn').show();
        }

        $('#attempts').text('Attempts: ' + attempts);
    });

    $('#reset-btn').click(function() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        $('#guess-input').val('');
        $('#message').text('');
        $('#attempts').text('');
        $('#guess-btn').show();
        $('#reset-btn').hide();
    });

    // Allow pressing Enter to guess
    $('#guess-input').keypress(function(e) {
        if (e.which === 13) {
            $('#guess-btn').click();
        }
    });
});
