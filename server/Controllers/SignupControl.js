async function handleSignupGet ( req, res )
{
    return res.status(200);
}
async function handleSignupPost ( req, res )
{
    console.log( req.body );
    return res.status( 200 );
}

module.exports = {
    handleSignupGet,
    handleSignupPost
}