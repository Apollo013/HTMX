import express from "express";

const router = express.Router();

// Define your routes here

// Handle POST request for temp conversion
router.post("/convert", (req, res) => {
    setTimeout(() => {
        const fahrenheit = parseFloat(req.body.fahrenheit);
        const celsius = ((fahrenheit - 32) * 5) / 9;

        console.log("fahrenheit", fahrenheit, "celsius", celsius);

        res.send(`
        <p>
          ${fahrenheit} degrees Fahrenheit is equal to ${Math.round(celsius)} degrees Celsius
        </p>
      `);
    }, 2000);
});

let currentTemperature = 0;

// Handle GET request for weather
router.get("/poll", (req, res) => {
    currentTemperature += Math.random() * 2 - 1; // Random temp change
    res.send(currentTemperature.toFixed(1) + "°C");
});

export default router;
