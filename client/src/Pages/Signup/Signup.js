import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Signup ()
{
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState( {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isGoogle: Boolean,
    } );
    const handleSuccess = async ( res ) =>
        {
            try
            {
                formData.isGoogle = true;
                const decoded = jwtDecode( res.credential );
                formData.email = decoded.email;
                formData.name = decoded.name;
                await axios.post( "/signup", formData, {
                    headers:
                    {
                        "Content-Type": "application/json",
                    },
                } );
                console.log( decoded ); 
                alert( "Success");
                localStorage.setItem( "token", res.credential );
                localStorage.setItem( "userName", decoded.name );
                navigate( "/dashboard" );
            } catch ( err )
            {
                if ( err.response.status === 400 )
                {
                    console.log(err.response.data.message);
                    alert(err.response.data.message);
                }
                else if ( err.response.status === 404 )
                {
                    console.log( err.response.data.message );
                    alert( err.response.data.message );
                }
                else
                {
                    alert( "Unexpected error occured" );
                }
            }
        }
        const handleFailure = ( res ) =>
        {
            console.log( "Failure", res );
            alert("Failure");
        }
    const handleSubmit = async(e) =>
    {
        e.preventDefault();
        formData.isGoogle = false;
        if ( formData.confirmPassword !== formData.password )
        {
            alert( "Password and Confirm Password do not match" );
            return;
        }
        try
        {
            const response = await axios.post( "/signup", formData, {
                headers:
                {
                    "Content-Type": "application/json",
                },
            } );
            alert( response.data.message );
            navigate("/login")
        } catch ( err )
        {
            if ( err.response.status === 400 )
            {
                console.log(err.response.data.message);
                alert(err.response.data.message);
            }
            else if ( err.response.status === 409 )
            {
                    console.log(err.response.data.message);
                    alert(err.response.data.message);
            } else
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
        <div className="flex flex-col justify-center items-center mt-36 border w-96 h-fit shadow-lg">
        <div className="p-2 text-3xl text-green-700">Signup</div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
            <div className="flex gap-1 flex-col">
                <span>Name</span>
                    <input type="text" placeholder="Name" autoFocus name="name" required className="border-2" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="flex gap-1 flex-col">
                <span>Email</span>
                <input type="text" placeholder="Email" name="email" required className="border-2" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="flex gap-1 flex-col">
                <span>Password</span>
                <input type="password" placeholder="Password" name="password" required className="border-2" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="flex gap-1 flex-col">
                <span>Confirm Password</span>
                <input type="password" placeholder="Confirm Password" required name="confirmPassword" className="border-2" value={formData.confirmPassword} onChange={handleChange}/>
            </div>
            <button type="submit" className="bg-green-400 p-1 rounded-md">SignUp</button>
                </form>
                <div className="text-lg">or Login With</div>
                    <div>
                        <GoogleLogin
                            onSuccess={ handleSuccess }
                        onError={ handleFailure }
                        text="signup_with"
                        />
                    </div>
            <span>Already Signed Up?</span>
            <Link className="pb-4" to="/login">Login</Link>
    </div>
    </div>
);
}

export default Signup;