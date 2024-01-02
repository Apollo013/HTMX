import express from "express";
import morgan from "morgan";
import userApi from "./routes/user-routes.js";
import tempApi from "./routes/temperature-routes.js";
import searchApi from "./routes/search-routes.js";
import validatorApi from "./routes/validation-routes.js";
import profileApi from "./routes/profile-routes.js";

const app = express();

// Set the static folder to 'public'
app.use(express.static("public"));

// Parse requests using JSON
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Your routes and other middleware can be added here
app.use(morgan("dev"));

app.use("/users", userApi);
app.use("/temperature", tempApi);
app.use("/search", searchApi);
app.use("/validation", validatorApi);
app.use("/profile", profileApi);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
