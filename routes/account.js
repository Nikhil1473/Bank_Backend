const express = require('express');
const checkBalance=require("./balance");
const transferbalnce=require("./transfer");
const router = express.Router();




router.use("/transfer",transferbalnce);
router.use("/balance",checkBalance);




module.exports = router;