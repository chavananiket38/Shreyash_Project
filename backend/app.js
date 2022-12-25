require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

const CollectedData = require('./models/dataSchema')
//DB Connection
require('./conn');


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//PORT
const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Hello"))

app.post("/formSubmit", async(req,res)=>{
  try {
      const {eventType,firstName,lastName,emailAddress,mobileNumber,enquiry} = req.body;
      await new CollectedData({
          eventType:eventType,
          firstName: firstName,
          lastName: lastName,
          email: emailAddress,
          mobileNumber: mobileNumber,
          enquiry: enquiry
      }).save()
      res.status(201).json({"message":"Data Saved"});
  } catch (error) {
      console.log("Server Error")
      console.log(error)
      res.status(422).send({err:error})
  }
})

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
