# HTMX Examples

A few examples on using HTMX.

The examples use a Node/Express server.

All of the HTMX is in the `/public` .html files.

Examples include...

-   `request.html`: Demonstrates how to trigger events, make GET requests, pass request params, set data output target, set loading indicator target, etc
-   `temperature.html`: Simple temperature converter that demonstrates form submission (POST request) with HTMX
-   `polling.html`: Example of HTMX polling using a mock weather api
-   `search.html`: A contact search feature that filters data from jsonplaceholder/typicode.com/users
-   `validation.html`: Form validation example
-   `profile.html`: Profile card feature, click-to-edit -> save-and-display (uses xss lib)

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

-   http://localhost:3000/request.html
-   http://localhost:3000/temperature.html
-   http://localhost:3000/polling.html
-   http://localhost:3000/search.html
-   http://localhost:3000/validation.html
-   http://localhost:3000/profile.html
