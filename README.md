# MongoDB in Amazon EC2

The aim of this task is to implement the following IoT system.

![](https://i.imgur.com/TD6sIya.png)

The aim of the project was to create a load-balanced MongoDB installation in Amazon EC2, with Node.js client programs simulating IoT nodes that generate sensor data. The load balancer accepts HTTP connections and balances them to EC2 instances, which are equipped with a Node.js server that receives HTTP GET requests and saves the contents to the MongoDB server. MongoDB is installed locally on an Ubuntu instance on EC2.

# Implementation Steps
## Creation of Ubuntu Instances on EC2: 
Two Ubuntu instances were created on Amazon EC2, with inbound TCP rule for port 3000. These instances serve as the servers for the load balancer.
## Load Balancer Configuration: 
A load balancer was created with the following configuration:
HTTP 3000 to HTTP 3000
Ping path: "/"
## MongoDB Installation: 
MongoDB 7.0 Community Edition was installed on the Ubuntu instances using the package manager. Troubleshooting errors encountered during the installation process were addressed using the troubleshooting guide.
## MongoDB Configuration: 
MongoDB was configured to bind to the localhost network interface by default, meaning it can only accept connections from clients running on the same machine. Remote clients will not be able to connect to the MongoDB server.
## Conclusion
The implementation of the IoT system using MongoDB in Amazon EC2 was successful. The load balancer effectively balanced HTTP connections to the EC2 instances, and the Node.js server saved the received documents to the MongoDB server. MongoDB was installed and configured properly, allowing for local connections.
