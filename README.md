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

## License

This project is licensed under the MIT License.
