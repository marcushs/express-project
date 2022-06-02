const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const posts = require('./route/api/posts');
const { application } = require('express');
const { json } = require('express/lib/response');

app.use('/api/posts', posts);

const port = process.env.port || 5000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
