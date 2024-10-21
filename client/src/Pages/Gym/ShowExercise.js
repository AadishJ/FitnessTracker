import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useDate } from "../../Context/DateContext";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function ShowExercise ()
{
    const [ exercises, setExercises ] = useState( [] );
    const { selectedDate, changeDate } = useDate();
    const { changeAuthenticated } = useAuth();
    const navigate = useNavigate();
    const handleChangeDate = ( date ) =>
    {
        changeDate( date );
    }
    useEffect( () =>
    {
        const fetchData = async () =>
        {
            try
            {   
                const date = moment( selectedDate ).startOf( 'day' ).format( "YYYY-MM-DD" );
                const res = await axios.get( "/gym", {
                    params: { date },
                });
                const resExercises = res.data.reqExercise;
                if ( resExercises )
                {
                    setExercises( resExercises );
                }
            } catch ( err )
            {
                if ( err.response.status === 404 )
                {
                    console.log( "Asdas" );
                    localStorage.removeItem( "userName" );
                    localStorage.removeItem( "token" );
                    alert( err.response.data.message );
                    changeAuthenticated( false );
                    setTimeout( () =>
                    {
                        navigate( "/" );
                    }, 1000 );         
                }else
                    alert( err.response.data.message );
            }
        }
        fetchData();
    }, [selectedDate, navigate, changeAuthenticated] );

    return (
        <div>
            <Calendar onChange={handleChangeDate} value={selectedDate}/>
            { exercises.map( ( exercise ) =>
            {
                return (
                    <div key={ exercise._id } className="flex gap-4">
                        <div>
                        Name:{ exercise.exerciseName }
                        </div>
                        <div>
                        Repetitions:{exercise.reps}
                        </div>
                        <div>
                        Weight:{exercise.weight}
                        { exercise.metric }
                        </div>
                    </div>
                    
                )
            }) }
        </div>
    );
}

export default ShowExercise;