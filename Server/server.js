var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var Trip = require("./models/trips");
var Diary = require("./models/diary");

var app = express();
var PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Trip");

app.listen(PORT, () => console.log("Listening on port "));

app.get("/service", async (req, res) => {
  try {
    const r = await Trip.find({});
    console.log(r);
    res.send(r);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get("/travel-diary", async (req, res) => {
  try {
    const r = await Diary.find({});
    console.log(r);
    res.send(r);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/search-service", async (req, res) => {
  const des = req.body.dest;
  console.log("des =", des);
  try {
    const r = await Trip.find({ heading: { $regex: des, $options: "i" } });
    console.log(r);
    res.send(r);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

app.post("/search-diary", async (req, res) => {
  const pl = req.body.place;
  console.log("des=", pl);
  try {
    const t = await Diary.find({ Destination: { $regex: pl, $options: "i" } });
    console.log(t);
    res.send(t);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});
