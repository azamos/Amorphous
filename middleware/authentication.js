const crypto = require("crypto");
const bcrypt = require("bcrypt");

const hashPassword = async (req, res, next) => {
    try {
        const { password } = req.body;
        const saltRounds = process.env.SALT_ROUNDS;
        const secret = process.env.SECRET;
        const result = await bcrypt.hash(password+secret,saltRounds);
        req.body.password = result;
        next();
    }
    catch (err) {
        console.log(err);
        res.send({error:'ERROR: problem with password'});
    }
}

module.exports = { hashPassword };