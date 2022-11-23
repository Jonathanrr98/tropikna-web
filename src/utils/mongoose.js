import { connect, connection } from "mongoose";

// const conn = {
//   isConnected: false,
// };

export async function dbConnect() {
  // if (conn.isConnected) return;

  const db = await connect("mongodb://localhost:27017/tropikna_db");

  console.log(db.connection[0]);

  // console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
  console.log("MongoDB se conecto");
});

connection.on("error", (err) => {
  console.log(err);
});
