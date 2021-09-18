import express from "express";

const app = express();

//set view engin
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
//static
app.use("/public", express.static(__dirname + "/public"));
//route
app.get("/", (req,res) => res.render("home"));
//catchall url
app.get("/*", (res,req) => req.redirect("/"));
const handleListen = () => console.log("Listening on http://localhost:3000")

app.listen(3000, handleListen);
