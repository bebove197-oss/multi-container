const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongo Connected ✅"))
.catch(err => console.log(err));

// Schema
const Item = mongoose.model("Item", {
  name: String
});

// Routes
app.get('/', (req, res) => {
  res.send("API Running 🚀");
});

app.post('/add', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.send("Item Saved");
});

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(5000, () => console.log("Server running on 5000"));