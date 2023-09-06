const UserDB = require("../db/user");
const TokenDB = require("../db/token");

const register = async(req,res) => {
    let { email, password, display_name } = req.body;
    try{
        const existingUser = await UserDB.getUser(email);
        if(existingUser!=null){
            res.send({msg:"one of your identifiers is already taken."});
            return;
        }
        const newUser = await UserDB.create(email,password,display_name);
        /*Now, that the user was created, a token must be generated */

        res.send({user:{email:newUser.email,display_name:newUser.display_name}});
        return;
    }
    catch(error){}
}

module.exports = {
    register
};