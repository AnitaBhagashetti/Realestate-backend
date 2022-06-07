
const Info = require('../models/basic-info')


const getAlldata =async(req,res)=>{
    try {
        const users = await Info.find({})
        res.status(200).json(users)
        
    } catch (error) {
        res.status(400).json({msg:"not found"})
        
    }

}


const createProperty = async(req,res)=>{
    try {
        const user = await Info.create(req.body)
        res.status(200).json({user})
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}

/////////////////////////search////////////////////////
const getdata =async(req,res)=>{
    try {
        const { PPDID} = req.query
        console.log(UserId)
        console.log(req.query)
        console.log(req.query.UserId)
        const users = await User.find({})
        // console.log(users)
        const user = users.filter(user=>{
            if(user.PPDID==req.query.PPDID){
                return user
            }
        })
        if(!user){
            res.json({status:"User with PPDID not exist"})
        }
        console.log(user[0].PPDID)
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({msg:"not found"})
    }
}


module.exports ={getAlldata,createProperty,getdata}


