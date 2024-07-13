const express = require('express')
const router = express.Router();
router.get('/', (req, res)=>{
    res.send("it is working na bala")
})

module.exports = router;