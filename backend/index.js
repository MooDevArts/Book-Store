import express from "express";
import { PORT } from "./config.js";
import router from "./routes/booksRoutes.js";
import cors from 'cors';

const app = express();

//middleware for parsing req.body
app.use(express.json());

//middle ware for CORS
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//sending books request to router
app.use('/books', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});