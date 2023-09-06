const indexRouter = require("express").Router();
const crypto = require("crypto");
// const bcrypt = require("bcrypt");
indexRouter.post('/',async (req,res)=>{
    const {key} = req.body;
    const result = await crypto.createHash("sha256").update(key).digest('hex');
    // const result2 = await bcrypt.hash(key,12);
    res.send({result});
})

module.exports = indexRouter;