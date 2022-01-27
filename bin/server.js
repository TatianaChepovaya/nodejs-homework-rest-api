const mongoose = require("mongoose");
const app = require("../app");

const { PORT = 3000, DB_HOST } = process.env;

mongoose
  .connect(
    "mongodb+srv://TatianaChepovaya:k343003s@cluster0.esijz.mongodb.net/db-contacts?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
