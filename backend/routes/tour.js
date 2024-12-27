import express from "express";
import { getDb } from "../db/conn.js";
import { ObjectId } from "mongodb"; // Import ObjectId from mongodb

const tourRoutes = express.Router();

// Get all tours
tourRoutes.route("/tours").get(async (req, res) => {
  try {
    const db_connect = getDb();
    const result = await db_connect.collection("tours").find({}).toArray();
    res.json(result);
  } catch (err) {
    res.status(500).send("Error retrieving tours: " + err.message);
  }
});

// Get a single tour by ID
tourRoutes.route("/tours/:id").get(async (req, res) => {
  try {
    const db_connect = getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const result = await db_connect.collection("tours").findOne(myquery);
    res.json(result);
  } catch (err) {
    res.status(500).send("Error retrieving tour: " + err.message);
  }
});

// Add a new tour
tourRoutes.route("/tours/add").post(async (req, res) => {
  try {
    const db_connect = getDb();
    const myobj = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      date: req.body.date,
      level: req.body.level,
    };
    const result = await db_connect.collection("tours").insertOne(myobj);
    res.json(result);
  } catch (err) {
    res.status(500).send("Error adding tour: " + err.message);
  }
});

// Update a tour by ID
tourRoutes.route("/tours/update/:id").post(async (req, res) => {
  try {
    const db_connect = getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const newvalues = {
      $set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        date: req.body.date,
        level: req.body.level,
      },
    };
    const result = await db_connect.collection("tours").updateOne(myquery, newvalues);
    res.json(result);
  } catch (err) {
    res.status(500).send("Error updating tour: " + err.message);
  }
});

// Delete a tour by ID
tourRoutes.route("/tours/:id").delete(async (req, res) => {
  try {
    const db_connect = getDb();
    const myquery = { _id: new ObjectId(req.params.id) };
    const result = await db_connect.collection("tours").deleteOne(myquery);
    res.json(result);
  } catch (err) {
    res.status(500).send("Error deleting tour: " + err.message);
  }
});

export default tourRoutes; // Use export default for ES modules
