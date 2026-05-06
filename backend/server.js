const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "elden_ring_db2"
});

db.connect(err => {
    if(err){
        console.log("DB Error:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

app.get("/weapons", (req,res)=>{
    db.query("SELECT * FROM v_weapons_complete", (err,result)=>{
        if(err) res.send(err);
        else res.json(result);
    });
});

app.get("/bosses",(req,res)=>{
    db.query("SELECT * FROM bosses", (err,result)=>{
        if(err) res.send(err);
        else res.json(result);
    });
});

app.get("/armor",(req,res)=>{
    db.query("SELECT * FROM armor", (err,result)=>{
        if(err) res.send(err);
        else res.json(result);
    });
});

app.listen(5000, ()=>console.log("Server running on port 5000"));