import express from 'express';


const app = express();


app.get('/', (req, res) => {
  res.send('its me ');
});

const PORT = process.env.PORT || 3000;

app.listen( "0.0.0.0",() => {
  console.log(`Server is running on port ${PORT}`);
});