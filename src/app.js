const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")

require("./db/conn");
const Register = require("./models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")    
});


app.post("/register",async(req,res)=>{
    try{
        const tr=req.body.Password
        const registerEmployee = new Register({
            EmpID: req.body.EmpID,
            Password: tr
        })
        
        const registered = await registerEmployee.save();
        res.status(201).send(registered)


    }catch(error){
        res.status(400).send(error)
    }
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})
