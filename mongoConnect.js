const uri = "mongodb://172.30.152.62:27017/?replicaSet=rs0";
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri);
module.exports = async () => {
  try {
    // Connect the client to the server
    console.log('connecting')
    await client.connect();
    // Establish and verify connection
    // await client.db("orders");
    // global.DB = client.db("records");
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}