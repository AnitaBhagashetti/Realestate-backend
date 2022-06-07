const express = require("express");
const { signup, signin } = require("../controllers/auth.controller");
const {getAlldata,createProperty,getdata} = require('../controllers/Restapi')
const router = express.Router();
router.route("/register").post(signup);
router.route("/login").post(signin)
router.route('/props').get(getAlldata).post(createProperty)
router.route('/PPDID').get(getdata)




module.exports = router;

