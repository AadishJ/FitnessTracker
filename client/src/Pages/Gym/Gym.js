import { useState } from "react";
import AddExercise from "./AddExercise";
import ShowExercise from "./ShowExercise";
function Gym ()
{
    const [ addExerciseToggle, setAddExerciseToggle ] = useState( false );
    const handleClick = () =>
    {
        setAddExerciseToggle( !addExerciseToggle );
    }
    return (   
        <div>
        <button onClick={ handleClick }>Add new exercise</button>
            { addExerciseToggle && <AddExercise setAddExerciseToggle={setAddExerciseToggle} /> }
            { !addExerciseToggle && <ShowExercise /> } 
        </div>
    )
}

export default Gym;