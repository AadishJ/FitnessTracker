import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Login ()
{
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState( {
        email: "",
        password: "",
    } );
    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        try
        {
            const response = await axios.post( "/login",  formData , {
                headers:
                {
                    "Content-Type": "application/json",
                },
            } );
            console.log( response.data );
            alert( response.data.message );
            navigate( "/dashboard" );
            localStorage.setItem( "token", response.data.jwtToken );
            localStorage.setItem( "userName", response.data.name );
        } catch ( err )
        {
            if ( err.response.status === 400 )
            {
                console.log( err?.response.data.error.details[ 0 ]?.message );
                alert(err?.response.data.error.details[ 0 ]?.message)
            }
            else if ( err.response.status === 404 )
            {
                console.log(err.response.data.message);
                alert(err.response.data.message);
            }
            else
            {
                alert( "Unexpected error occured" );
            }
        }
    }
    const handleChange = ( e ) =>
    {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.value,
        } );
    };
    return (
        <div className="flex justify-center align-center w-98">
        <div className="flex flex-col justify-center items-center mt-36 border w-96 h-72 shadow-lg">
            <div>Login</div>
            <form className="flex flex-col gap-4" onSubmit={ handleSubmit } >
                <div className="flex gap-1 flex-col">
                    <span>Email</span>
                    <input type="text" placeholder="Email" name="email" className="border-2" required value={ formData.email } onChange={ handleChange } />
                </div>
                <div className="flex gap-1 flex-col">
                    <span>Password</span>
                    <input type="text" placeholder="Password" name="password" className="border-2" required value={ formData.password } onChange={ handleChange } />
                </div>
                    <button type="submit" className="bg-green-400 p-1 rounded-md">Login</button>
            </form>
            <span>Already Logged In?</span>
            <Link to="/signup">SignUp</Link>
            </div>
            </div>
    );
}

export default Login;