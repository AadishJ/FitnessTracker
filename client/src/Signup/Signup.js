import axios from "axios";
import { useState } from "react";

function Singup ()
{
    const [ formData, setFormData ] = useState( {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    } );
    const handleSubmit = async(e) =>
    {
        e.preventDefault();
        try
        {
            const response = await axios.post( "/signup", formData, {
                headers:
                {
                    "Content-Type": "application/json",
                },
            } );
            if ( response.status === 200 )
            {
                alert( "Post successfull" );
            } else
            {
                alert( "post failed" );
            }
        } catch ( err )
        {
            console.error( "Error occured", err );
            alert(err.message)
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
        <div className="flex flex-col justify-center items-center mt-36">
        <div>SignUp</div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
            <div className="flex gap-1 flex-col">
                <span>Name</span>
                    <input type="text" placeholder="Name" name="name" className="border-2" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="flex gap-1 flex-col">
                <span>Email</span>
                <input type="text" placeholder="Email" name="email" className="border-2" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="flex gap-1 flex-col">
                <span>Password</span>
                <input type="text" placeholder="Password" name="password" className="border-2" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="flex gap-1 flex-col">
                <span>Confirm Password</span>
                <input type="text" placeholder="Confirm Password" name="confirmPassword" className="border-2" value={formData.confirmPassword} onChange={handleChange}/>
            </div>
            <button type="submit" className="bg-green-400 p-1 rounded-md">SignUp</button>
        </form>
    </div>
);
}

export default Singup;