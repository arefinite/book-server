import { app } from "./api/app.js"
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    connectDB()
})