import mongoose from "mongoose";

/* Command to run db mac: brew services start mongodb-community@4.2*/

const { DB_URL } = process.env;

const dataBase = () => {
  mongoose
    .connect(DB_URL || "")
    .then(() => {
      console.log("Successful connection");
    })
    .catch((error) => {
      console.log("Database connection failed");
      console.log(error);
      process.exit(1);
    });
};

export default dataBase;
