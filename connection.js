const mongoose = require("mongoose");

const uri =
  "mongodb+srv://raushankumar2909:raushan2504@cluster0.yeznl4l.mongodb.net/myonlinearchive?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });
