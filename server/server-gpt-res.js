import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { readdirSync } from 'fs';
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// MongoDB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("🔥 MongoDB Connected!"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Sample route to test
app.post('/api/register', (req, res) => {
    const responseObject = {
        message: 'Registration successful',
        data: req.body
    };
    res.json(responseObject);
});

const routes = readdirSync('./routes');
for (const r of routes) {
    import(`./routes/${r}`).then((module) => {
        app.use("/api", module.default);
    }).catch(err => console.error(`Error loading route ${r}:`, err));
};

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
