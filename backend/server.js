const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const axios = require('axios');

dotenv.config();

const app = express();

app.use(express.json());

const token = process.env.BEARER_TOKEN;

app.get('/search', (req, res) => {
    axios.get('https://api.twitter.com/2/tweets/search/recent?query='+req.query.q+'&tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld&expansions=author_id,referenced_tweets.id&user.fields=description,created_at', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => {
        res.json(response.data.data);
    })
    .catch(error => {
        res.json(error);
    });
});
app.get('/users/:userId', (req, res) => {
    axios.get('https://api.twitter.com/2/users/'+req.params.userId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
        res.json(response.data.data);
    })
    .catch(error => {
        res.json(error);
    });
});


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
