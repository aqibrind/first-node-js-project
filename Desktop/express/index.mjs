import express from 'express';
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('My name is aaqib nazeer')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
