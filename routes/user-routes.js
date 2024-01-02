import express from "express";

let router = express.Router();

router.get("/", async (req, res) => {
    // https://jsonplaceholder.typicode.com/users

    // const users = [
    //     { id: 1, name: "John", age: 25 },
    //     { id: 2, name: "Jane", age: 24 },
    //     { id: 3, name: "Jack", age: 26 },
    // ];

    const limit = +req.query.limit || 10;

    setTimeout(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
        const users = await response.json();

        const output = `<h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>${users.map((user) => `<li>${user.name}</li>`).join("")}</ul>`;
        res.send(output);
    }, 2000);
});

export default router;
