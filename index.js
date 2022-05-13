const express = require("express");
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
mongoose.connect('mongodb+srv://sara:sa2000@cluster0.gvz3u.mongodb.net/noteAPP?retryWrites=true&w=majority');


app.use("/users", require("./Routes/userRoute"));
app.use("/notes", require("./Routes/notesRoute"));
app.use("/login", require("./Routes/login"));

app.listen(3000, () => {
  console.log("Server running...");
});

