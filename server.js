const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;
// Connect to MongoDB
const uri = 'mongodb://0.0.0.0:27017/latestdb';
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectToMongoDB();
// Define the sensor data collection
const sensorDataCollection = client.db().collection('sensorData');

// Handle POST requests to the specified address
app.post('/', express.json(), (req, res) => {
  const sensorData = req.body;

  // Save the sensor data to MongoDB
  sensorDataCollection.insertOne(sensorData)
    .then(() => {
      console.log('Sensor data saved to MongoDB:', sensorData);
      res.sendStatus(200);
    })
    .catch(error => {
      console.error('Error saving sensor data:', error.message);
      res.sendStatus(500);
    });
});
app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
