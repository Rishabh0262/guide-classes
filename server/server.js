import express from "express";
import cors from "cors"
// const morgan = require("morgan")    // we'll face error, if we use "import"
// require("dotenv").config();         // this will helps in loading env. variables
import morgan from "morgan";
import dotenv from "dotenv";
import {readdirSync} from 'fs'
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config();

// create express app
const app = express();



// apply middleware : it'll run before any response is send back to our client.
app.use(cors())
app.use(express.json())     // data[FE -> BE] if available as JSON data.
app.use(morgan("dev"))      // we pass 'dev' flag as string.
// app.use(bodyParser.json()); // Middleware to parse JSON bodies


// custom middleware : to test...
// app.use((req, res, next) => {
//     console.log("This is the custom middleware.")
//     next();

// })



// MongoDB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("🔥 MongoDB Connected!"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));



// route
app.get('/', (req, res) => {
    res.send("you hit the server endpoint...")
})

// fs.readdirSync('./routes').map((r) => 
//     app.use("./api", import(`./routes/${r}`))
// )


const routes = readdirSync('./routes');
for (const r of routes) {
    import(`./routes/${r}`).then((module) => {
        app.use("/api", module.default);
    }).catch(err => console.error(`Error loading route ${r}:`, err));
}


// port : we can use .env file. which will be helpful in production use.
const port = process.env.PORT || 8000       // "process" is a Top Lvl obj. Where the node.js entire process run. Where we get access to "env" & many diff. Fn./properties.


// we can listen to our server...
app.listen(port, () => console.log(`Server is running on port ${port}`));


  