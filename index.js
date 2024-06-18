const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoDb = require("./db");
mongoDb();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173/");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With, Contect-Type,Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World!, how are yall ?");
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.use("/api", require("./Routes/LoginUser"));

app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/Getuser"));
app.use("/api", require("./Routes/GetLocation"));
app.use("/api", require("./Routes/MyOrder"));
app.use("/api", require("./Routes/FoodData"));

 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
