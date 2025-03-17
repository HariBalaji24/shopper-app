import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import jwt from "jsonwebtoken";

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));

const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

mongoose.connect("mongodb+srv://Hari:shari%402006@cluster0.yzhd4.mongodb.net/e-commerce");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => cb(null, `${file.originalname}`)
});

const upload = multer({ storage });
app.use("/images", express.static(uploadDir));

app.post("/upload", upload.single("product"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const imageUrl = `http://localhost:${port}/images/${req.file.filename}`;
    console.log("Image uploaded:", imageUrl);
    res.json({ imageUrl });
});

const userschema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true }, 
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    description:{type:String, required:true},
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true }
});

const schema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    cart:{type:Object}
})
const User = mongoose.model("User",schema)
const Product = mongoose.model("Product", userschema);

app.post("/signup", async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ errors: "Email already exists" });
        }

        let cartdata = {};

        for (let i = 1; i < 300; i++) {
            cartdata[i] = 0;  
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cart: cartdata
        });

        await user.save();
        const data = { user: { id: user.id } };
        const token = jwt.sign(data, 'secret_ecom');

        res.json({ success: true, token });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ errors: "Server error" });
    }
});


app.post('/login',async (req,res)=>{
    let using = await User.findOne({email:req.body.email})
    if (using){
        if (req.body.password === using.password){
             const data= {user:{id:using.id}}
             const token = jwt.sign(data,'secret_ecom')
             res.json({success:true,token})
        }
        else{
            res.json({success:false,errors:"wrong password"})
        }
    }
    else{
        res.json({success:false,errors:"wrong email"})
    }
})

app.post("/addproduct", async (req, res) => {
    try {
        console.log("Received Product Data:", req.body);

        if (!req.body.image) return res.status(400).json({ error: "Image URL is missing" });

        const lastProduct = await Product.findOne().sort({ id: -1 }); 
        
        const product = new Product({
            id: lastProduct ? ( lastProduct.id + 1) : 1, 
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
            description:req.body.description
        });

        await product.save();
        console.log("Product saved successfully:", product);
        res.json({ success: true, product });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ error: "Error saving product" });
    }
});
app.get("/showproducts", async (req, res) => {
    try {
        const elements = await Product.find({});
        res.json(elements);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Error fetching products" });
    }
});

app.post("/removeproduct",async (req,res)=>{
    const deleted =await Product.findOneAndDelete({id:req.body.id})
})

app.get("/newcollections",async (req,res)=>{
    const products= await Product.find({})
    let elements = products.slice(-8)
    res.send(elements)
})

app.get("/popular",async (req,res)=>{
    const products= await Product.find({category:"men"})
    let elements = products.slice(-4)
    res.send(elements)
})

const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) {
       return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, "secret_ecom");
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Invalid token" });
    }
};

app.post("/addproducttocart",fetchuser,async (req,res) => {
    let userdata = await User.findOne({_id:req.user.id})
    userdata.cart[req.body.itemId]+=1
    await User.findByIdAndUpdate({_id:req.user.id},{cart:userdata.cart})
   
})

app.post("/removeproducttocart",fetchuser,async (req,res) => {
    let userdata = await User.findOne({_id:req.user.id})
    userdata.cart[req.body.itemId]-=1
    await User.findByIdAndUpdate({_id:req.user.id},{cart:userdata.cart})
   
})

app.post("/getcart",fetchuser,async (req,res)=>{
     let userdata = await User.findOne({_id:req.user.id})
     res.json(userdata.cart)
})
     
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});    