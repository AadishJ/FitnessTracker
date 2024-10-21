import { useState } from "react";
import SelectExercise from "./SelectExercise";
import Exercises from "./Exercises.json"
function AddExercise ({setAddExerciseToggle})
{
    const [ bodyPart, setBodyPart ] = useState( "" );
    const [ showIntensity, setShowIntensity ] = useState( false );
    const handleChange = (e) =>
    {
        setBodyPart( e.target.value );
        setShowIntensity( false );
    }
    return (
        <div>
            <select name="body" id="exercise" onChange={ handleChange }>
                <option value="">Select Body Part</option> {/* Default option */}
                    <option value="abs">Abs</option>
                    <option value="back">Back</option>
                    <option value="biceps">Biceps</option>
                    <option value="chest">Chest</option>
                    <option value="legs">Legs</option>
                    <option value="shoulder">Shoulders</option>
                    <option value="triceps">Triceps</option>
            </select>
            { bodyPart !== "" ? (
                <SelectExercise Exercises={ Exercises[ bodyPart ] } setShowIntensity={ setShowIntensity } showIntensity={ showIntensity } setAddExerciseToggle={ setAddExerciseToggle} />
            ) : (
                    null
            )}
        </div>
    );
}

export default AddExercise;