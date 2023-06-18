require("dotenv").config();


const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const studentRoutes = require("./routes/students");
const userRoutes = require("./routes/user");
const roomRoutes = require("./routes/room");

//express app
const app = express();

//middleware
app.use(cors());
app.use(express.json())


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});



//routes
app.use("/api/student", studentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/room", roomRoutes);


//connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
