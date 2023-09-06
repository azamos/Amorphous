const User = require("../models/user");
const Token = require("../models/token");

///////////////
///
///
///
///
///
///////////////

/* the create function expects that the user's email and display_name are unique.
ths controller should make sure of that. */
const create = async (email, password, display_name) => {
    try {
        return newUser = await new User({ email, password, display_name });
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

////////////
///       ///
///       ///
///////////
///   ///
///    ///
///     //////

const ADMIN_getUsersList = async () => {
    try{
        return await User.find({});
    }
    catch(err){
        console.log(err);
        return null;
    }
}

const getUser = async email => {
    try{
        return await User.findOne({email});
    }
    catch(err){
        console.log(err);
        return null;
    }
}

///         ///
///         ///
///         ///
///         ///
///         ///
///         ///
///////////////

const update = async (email,newData) => {
    try{
        const user = User.findOne({email});
        /* the db service does not perform sanitation of newData of any kind.
        again, it is in the scope of responsibility of the user controller */
        Object.keys(newData).forEach(field=> user[field]=newData[field]);
        await user.save();
        return user;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

//////////////
///         ///
///          ///
///          ///
///         ///
///        ///
////////////

/* actualy removes from database */
const AdminDeleteUser = async email => {
    try{
        const user = await User.deleteOne({email});
        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
}
/* not actualy deleting the user, in case user wishes to re-register
in the future */
const userInitiatedDeletion = async email => {
    try{
        const user = await User.findOne({email});
        user.deleted = {
            flag: true,
            at: new Date(Date.now()).toISOString()
        }
        await user.save();
        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
}
module.exports = { create,
    ADMIN_getUsersList,getUser,
    update,
    AdminDeleteUser, userInitiatedDeletion
 };