const express = require("express");
const path = require("path");
const db = require('./config/mongoose-connection')
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter")
const ownerRouter = require("./routes/ownerRouter")
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/users', userRouter);
app.use('/owner', ownerRouter);
app.use('/products', productRouter);

app.get('/', (req, res)=>{
  res.send("this is good")
})

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
