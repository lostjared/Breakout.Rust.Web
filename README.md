# Breakout Clone in Rust / WebAssembly

![Example Image](https://github.com/lostjared/Breakout.Rust.Web/blob/main/screens/breakout.rust.jpg)


# Breakout Game with WebAssembly

This project is a Breakout game implemented using JavaScript and WebAssembly. It supports both mouse and touch events for paddle movement.

## Requirements

- Rust
- wasm-pack
- JavaScript
- HTML

## Building the Project

To build the WebAssembly module, run the following command:

```sh
wasm-pack build --target web --out-dir web
```

## Running the Game

Run a Python 3 local webserver

```sh
python3 -m http.server  3000
```

1. Open the `index.html` file in your web browser to run the game.
2. Use the mouse or touch input to move the paddle and play the game.

## Project Structure

- `src/`: Contains the Rust source code for the WebAssembly module.
- `web/`: Contains the compiled WebAssembly module and other web assets (HTML, JavaScript, CSS).

## Handling Mouse and Touch Events

The project includes functions to handle both mouse and touch events for paddle movement:

### Mouse Movement

```javascript
function mouseMoveB(e) {
    var canvas = document.getElementById('myCanvas');
    var rect = canvas.getBoundingClientRect(); // Get the canvas position and size

    // Calculate the mouse position relative to the canvas
    var xpos = e.clientX - rect.left;
    var ypos = e.clientY - rect.top;

    // Ensure the paddle's x-coordinate is within the canvas boundaries
    if (xpos > 0 && xpos < canvas.width) {
        breakout.set_paddle_xy(xpos, paddle.y);
    }
}
```

### Touch Movement

```javascript
function touchMoveB(e) {
    var canvas = document.getElementById('myCanvas');
    var rect = canvas.getBoundingClientRect(); // Get the canvas position and size

    // Calculate the touch position relative to the canvas
    var xpos = e.touches[0].clientX - rect.left;
    var ypos = e.touches[0].clientY - rect.top;

    // Ensure the paddle's x-coordinate is within the canvas boundaries
    if (xpos > 0 && xpos < canvas.width) {
        breakout.set_paddle_xy(xpos, paddle.y);
    }

    e.stopPropagation();
    e.preventDefault();
}

// Add event listeners for mouse and touch events
var canvas = document.getElementById('myCanvas');
canvas.addEventListener('mousemove', mouseMoveB, false);
canvas.addEventListener('touchmove', touchMoveB, false);
```

## License

This project is licensed under the MIT License.
