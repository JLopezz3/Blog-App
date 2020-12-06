const express = require('express');
const db = require('./config/db');
const app = express();

const PORT = 3001;

app.get('/', (req, res) => {});

app.post('./api/create', (req, res) => {
    db.query(
        "INSERT INTO posts (title, post_text, user_name) VALUES ('a title', 'safsafgasfgsafs', 'jereltech')", (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result);
            }
        });
})

app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
});