const mongoose= require("mongoose");

mongoose.connect('mongodb://localhost:27017/convrse')
.then(console.log("Login successful"))
  .catch(console.error);