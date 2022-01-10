const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/admin');
}
const kittySchema = new mongoose.Schema({
    name: String
  });