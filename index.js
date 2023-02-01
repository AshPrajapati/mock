const express = require("express");
const app = express();

app.listen(3000);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users",(req,res)=>{
    res.json(userList);
})

userList = [
  {
    id: 1,
    name: "Aayush",
  },
  {
    id: 2,
    name: "Dhaval",
  },
];
