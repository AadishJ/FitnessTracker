import { useState } from "react";
import SelectIntensity from "./SelectIntensity";

function SelectExercise ({Exercises , setShowIntensity, showIntensity, setAddExerciseToggle})
{
    const [exercise, setExercise] = useState(null || String)
    const handleClick = (e)=>
    {
        setExercise( e.target.value );
        setShowIntensity( true );
    }
    const render = Exercises.map( ( exercise ) =>
    {
        return (
            <div  key={ exercise }>
                <button onClick={ handleClick } value={ exercise }>
                    { exercise }
                </button>
            </div>
        )
    } );
    return (
        <div>
            { render }
            { exercise && <SelectIntensity exercise={ exercise } setShowIntensity={ setShowIntensity } showIntensity={ showIntensity } setAddExerciseToggle={ setAddExerciseToggle } />}
        </div>
    );
}

export default SelectExercise;