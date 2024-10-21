async function handleDashboardGet ( req, res )
{
    console.log("Asddasdasdasda");
    if ( !req.cookie.uid )
    {
        localStorage.removeItem( "token" );
        localStorage.removeItem( "userName" );
        res.redirect( "/" );
    }
}
async function handleDashboardPost ( req, res )
{
    return res.status( 200 );
}

module.exports = {
    handleDashboardGet,
    handleDashboardPost,
}