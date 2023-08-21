const http = require('http');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Define the sensor data
const sensorData = {
  sensorId: 1,
  sensorName: 'Temperature Sensor',
  reading: getRandomInt(30),
};

// Convert the sensor data to JSON
const jsonData = JSON.stringify(sensorData);

// Set the request options
const options = {
  hostname: 'dtask-11236481.us-east-1.elb.amazonaws.com',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': jsonData.length,
  },
};

// Send the sensor data to the specified address
const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Sensor data sent successfully: to'+ options.hostname+ "\n" , data);
  });
});

req.on('error', (error) => {
  console.error('Error sending sensor data:', error.message);
});

// Write the JSON data to the request body
req.write(jsonData);
req.end();
