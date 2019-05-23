import express from 'express';
import seed from './seed';
import graphql from './middlewares/graphql';
if (process.env.SEED == 'true') {
    seed();
}

const app = express();

const PORT = process.env.PORT || 8000;

app.use('/graphql-website', graphql)
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server running on ${PORT}`)
})