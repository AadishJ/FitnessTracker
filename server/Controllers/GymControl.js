const exercise = require("../Models/Gym");
async function handleGymGet ( req, res )
{
    const userId = req.user._id;
    const date = req.query.date;
    const startDate = new Date(`${date}T00:00:00.000Z`);
    const endDate = new Date( `${date}T23:59:59.999Z` );
    try
    {
        const reqExercise = await exercise.find( {userId,createdAt: { $gte: startDate, $lt: endDate },} );
        res.status( 200 ).json( { reqExercise } );
    } catch ( err )
    {
        res.status( 400 ).json( { err:err } );
    }
}
async function handleGymPost ( req, res )
{
    const userId = req.user._id;
    const { exerciseName, weight, reps, metric } = req.body;
    try
    {
        const reqExercise = await exercise.create( { userId, exerciseName, weight, reps, metric } );
        res.status( 200 ).json( { message: "Exercise successfully added" } );
    } catch ( err )
    {
        res.status( 400 ).json( { message: "Unexpected error occured" } );
    }
    
}

module.exports = {
    handleGymGet,
    handleGymPost,
}