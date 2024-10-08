const {getUser} = require("../Service/Authentication")
async function restrictToLoggedInUserOnly ( res, req, next )
{
    const userId = req.cookies?.uid;
    if ( !userId )
    {
        
    }
    const user = await getUser( userId );
    if ( !user )
    {

    }
    req.user = user;
    next();
}

async function checkAuth ( res, req, next )
{
    const userId = req.cookies.uid;
    const user =await getUser( userId );
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly,
    checkAuth,
}