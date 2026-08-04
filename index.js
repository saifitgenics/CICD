import express from 'express';


const app = express();


app.get('/', (req, res) => {
  res.send('Mic check 1234!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server is running on port ${PORT}`);
});