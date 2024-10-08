/* eslint-disable no-undef */
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port :${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed!!!", err);
  });

// method 1
// import express from "express";

// const app = express();
// (async () => {
//   try {
//     // eslint-disable-next-line no-undef
//     await mongoose.connect(`${DATABASE_URI}`);
//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`listening to http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })(); //ifii directly execute it
