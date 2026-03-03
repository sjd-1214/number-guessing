# Number Guessing Game

A simple, interactive web-based number guessing game where players try to guess a randomly generated number between 1 and 100.

## Features

- **Random Number Generation**: Each game generates a new random number between 1 and 100
- **Intelligent Feedback**: Get hints whether your guess is too high or too low
- **Attempt Tracking**: Keeps count of how many guesses you've made
- **Input Validation**: Ensures only valid numbers (1-100) are accepted
- **Keyboard Support**: Press Enter to submit your guess
- **Play Again**: Restart the game anytime after winning without refreshing the page
- **Responsive Design**: Clean, centered layout that works on various screen sizes

## How to Play

1. Open `index.html` in your web browser
2. Enter a number between 1 and 100 in the input field
3. Click "Guess" or press Enter to submit
4. Follow the hints:
   - **Blue message**: Your guess is too low
   - **Red message**: Your guess is too high
   - **Green message**: Congratulations! You guessed correctly
5. Click "Play Again" to start a new game

## Project Structure

```
number-guessing/
├── index.html      # Main HTML file with game structure
├── styles.css      # CSS styles for the game interface
├── script.js       # Game logic and interactivity (jQuery)
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with shadows, border-radius, and hover effects
- **JavaScript**: Game logic and DOM manipulation
- **jQuery 3.6.0**: Simplified event handling and DOM operations (CDN loaded)

## Installation

No installation required! Simply:

1. Clone or download this repository
2. Open `index.html` in any modern web browser

```bash
git clone <repository-url>
cd number-guessing
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or just double-click index.html
```

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Customization

### Change the Number Range

In `script.js`, modify the random number generation:

```javascript
// Change from 1-100 to 1-50
var randomNumber = Math.floor(Math.random() * 50) + 1;
```

Don't forget to update the message in `index.html` as well.

### Modify Styles

Edit `styles.css` to customize:
- Colors and themes
- Font styles
- Container dimensions
- Button appearances

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Future Enhancements

- [ ] Difficulty levels (easy: 1-50, medium: 1-100, hard: 1-500)
- [ ] High score tracking with local storage
- [ ] Sound effects
- [ ] Animated feedback
- [ ] Multiplayer mode