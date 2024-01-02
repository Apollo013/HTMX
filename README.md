# HTMX Examples

A few examples on using HTMX.
The examples use a Node/Express server. All of the HTMX is in the `/public` .html files.

Examples include...

-   `request.html`: Demonstrates how to trigger events, make GET requests, pass request params, set data output target, set loading indicator target, etc
-   `temperature.html`: Simple temperature converter that demonstrates form submission with HTMX

## Usage

Install dependencies

```bash
npm install
```

Run the server with nodemon

```bash
npm run dev
```

#### OR

Run the server with node >= v18

```bash
node --watch server.js
```

Visit the following pages...

http://localhost:3000/request.html
http://localhost:3000/temperature.html
