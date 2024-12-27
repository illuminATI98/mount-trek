import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

const connectToServer = (callback) => {
  client.connect((err, db) => {
    if (db) {
      _db = db.db("mounttrek-db");
      console.log("Successfully connected to MongoDB.");
    }
    return callback(err);
  });
};

const getDb = () => {
  if (!_db) {
    throw new Error("Database not initialized. Call connectToServer first.");
  }
  return _db;
};

// Export as ES module
export { connectToServer, getDb };

