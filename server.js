import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server running on ${PORT}`)
})