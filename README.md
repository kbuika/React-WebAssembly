# React-WebAssembly
A simple React application that calls a Rust(WebAssembly) function 

- WebAssembly is a new type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++, C# and Rust with a compilation target so that they can run on the web. It is also designed to run alongside JavaScript, allowing both to work together.


For this application, I used Rust and targetted WebAssembly as an output.
There are 2 ways to use Rust in WebAssembly
1. Create an entire application using Yew (a Rust Framework)
2. Add WebAssembly inside an already existing application - *This is what is happening here

## Steps

- Create a React App

`` npx create-react-app react-app ``

or if you have Vite

`` npm create vite `` and follow the steps

- Inside your React App;
    - Create Rust library with `` cargo``.
        `` cargo new wasm-lib --lib ``
    - Implement a Rust function that you want to call from JavaScript.

        Do this inside `` lib.rs ``.
    - Wrap the function with `` wasm-bindgen `` to export it as Wasm.

        ``wasm-bindgen`` is Rust library that facilitate high-level interactions between Wasm and JavaScript. For example, you can call Rust(Wasm) from JavaScript, and vice versa.
    - Build as Wasm library with `` wasm-pack ``.

        Add a build command to bundle the Rust lib into a package
        
        ``"build:wasm": "cd wasm-lib && wasm-pack build --target web --out-dir pkg",``
    - Call the Wasm function from the React app.

        As seen in the ``App.tsx`` file


## Running this project

Prerequisites
 1. [NodeJS](https://nodejs.org/en/download/)
 2. [Vite](https://vitejs.dev/guide/)
 3. [Rust](https://www.rust-lang.org/tools/install)

- Clone the project
- Run;

    ``npm install`` or ``yarn install``

- Run 

    ``npm run build:wasm`` or ``yarn run build:wasm`` to create the Wasm Lib

- To view the application

    ``npm run dev`` or ``yarn dev``

Viola !!





