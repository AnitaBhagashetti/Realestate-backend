const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const userRoutes = require('./routes/user')
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors({ origin: "*" }));
///////////schemas/////////////////
const Basicinfo_db = require('./models/basic-info')
const propertydetails_db = require('./models/property-detail')
const Generainfodetails_db = require('./models/general-info')
const locationinfodetails_db = require('./models/location-info')
const info_db = require('./models/info')


/////////////////multer////////////////////////
const multer = require("multer");
const path = require("path");
app.use("/images", express.static("images"));
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()  + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });
///storage property takes starage engine property
app.use("/images", express.static("images"));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.post("/userData",async(req,res)=>{
        const date = new Date()
        const PPDID ="PPDID" +date.getSeconds()+date.getHours() +date.getDay()
        console.log(PPDID)
        
        console.log("these from Userdata")
        console.log(req.body);
        console.log("THis is basic info")
        console.log(req.body.Basicinfo);
    
      await Basicinfo_db.create(req.body.Basicinfo)

      // await propertydetails_db.create(req.body.Propertydetail)
      //await Generainfodetails_db.create(req.body.GeneralInfo)
      //await locationinfodetails_db.create(req.body.Locationinfo)
      //await info_db.create(req.body.Info)
  
   
      console.log("error with db")
  
  
       //console.log(userBasicinfo)
 //////////////////////////////////////////////////
//  const post = new Post({
//   PPID: req.body.PPID,
//   image: req.file.filename,
//   property: req.body.property,
//   contact: req.body.contact,
//   area: req.body.area,
//   views: req.body.views,
//   status: req.body.status,
//   daysLeft: req.body.daysLeft
// });
// try{
//   const savedPost= await post.save();
//   res.json(savedPost);
// }catch(e){
//   res.json({msg:e});
// }
 //////////////////////////////////////////////////
//console.log("error")
    
    //res.end()
})
// app.post("/Generalinfo",upload.single("Image"),(req,res)=>{
//     res.send("Hello")
//     console.log("This from Generalinfo")
//     console.log(req.body)
//     console.log(req.file.filename)
//     res.end()
// })
const port = process.env.PORT || 5000

app.use(userRoutes);

const start = async() => {
    try {
        await connectDB(process.env.MONGOO_URI)
        app.listen(process.env.PORT || 5000, () => {
            console.log(`server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error)

    }

}

start()