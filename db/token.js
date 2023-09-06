const Token = require("../models/token");

///////////////
///
///
///
///
///
///////////////

const create = async (_id,email) => {
    try {
        return newToken = await new Token({ _id,email});
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

const ADMIN_getTokensList = async () => {
    try{
        return await Token.find({});
    }
    catch(err){
        console.log(err);
        return null;
    }
}

const getToken = async _id => {
    try{
        return await Token.findOne({_id});
    }
    catch(err){
        console.log(err);
        return null;
    }
}

const getUsersToken = async email => {
    try{
        return await Token.find({email});
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

const update = async (_id,newData) => {
    try{
        const token = Token.findOne({_id});
        /* the db service does not perform sanitation of newData of any kind.
        again, it is in the scope of responsibility of the user controller */
        Object.keys(newData).forEach(field=> token[field]=newData[field]);
        await token.save();
        return token;
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

module.exports = { create,
    ADMIN_getTokensList,getToken,getUsersToken,
    update
 };