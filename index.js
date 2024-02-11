const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world! This is a simple Node.js website deployed on Render.com');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
