const express = require('express')
const app = express()
const port = 3000

app.get('*', async (req, res) => {
  res.set({
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  })
  const apiUrl = `https://api.deezer.com${req.url}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.end(JSON.stringify(data));
  } catch (error) {
    res.end(error.message);
  }
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})