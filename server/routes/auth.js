import { Router } from "express";

const router = Router();

// controller
import { register } from "../controllers/auth.js";

router.get("/register", register)

// Or
// router.get("/register", (req, res) => {
//     res.send("register user from routes/auth.js")
// })

export default router;