import { useState, useEffect } from "react";
import axios from "axios";
function SelectIntensity ({exercise, showIntensity, setAddExerciseToggle})
{
    const [ formValues, setFormValues ] = useState( {
        exerciseName: "",
        weight: 0,
        metric: "kg",
        reps: 0,
    } );
    useEffect(() => {
        setFormValues(() => ({
            exerciseName: exercise, 
            weight: 0,
            metric: "kg",
            reps: 0,
        } ) );
    }, [exercise]);
    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        
        setFormValues((prevData) => ({
          ...prevData,
            [ name ]: value,
        }));
    }
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            const token = localStorage.getItem( "token" );
            console.log(token);
            const response = await axios.post( "/gym", formValues, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
                withCredentials: true
            } );
            alert( response.data.message );
            setAddExerciseToggle( false );            
        } catch ( err )
        {
            console.log(err.response.data.message);
        }
    }
    return (
        <div>
            { showIntensity ? (
                <form onSubmit={handleSubmit}>
                <label>Weight:</label>
                <input type="number" className="border" required name="weight" placeholder="0" onChange={handleChange} value={formValues.weight || ""}/>
                <select name="metric" id="type" required value={formValues.metric} onChange={handleChange}>
                    <option value="kg">KG</option>
                    <option value="lbs">LBS</option>
                </select>
                <div>
                <label>Repetitions:</label>
                <input type="number" name="reps" className="border" placeholder="0" required onChange={handleChange} value={formValues.reps || ""}/>
                </div>
                <button type="submit">Add Exercise</button>
            </form>
 
            ) :
         null}    
        </div>
    );
}

export default SelectIntensity;