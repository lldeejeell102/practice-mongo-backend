const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

// created api routing to desired url
const posts = require('./routes/api/todo')
app.use('/api/posts', posts);


// SERVER LISTENER
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Server started on port ${port}`))