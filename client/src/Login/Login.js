function Login ()
{
    return (
        <div className="flex flex-col justify-center items-center mt-36">
            <div>Login</div>
            <form action="POST" className="flex flex-col gap-4">
                <div className="flex gap-1 flex-col">
                    <span>Name</span>
                    <input type="text" placeholder="Name" className="border-2" />
                </div>
                <div className="flex gap-1 flex-col">
                    <span>Email</span>
                    <input type="text" placeholder="Email" className="border-2" />
                </div>
                <div className="flex gap-1 flex-col">
                    <span>Password</span>
                    <input type="text" placeholder="Password" className="border-2" />
                </div>
                <div className="flex gap-1 flex-col">
                    <span>Confirm Password</span>
                    <input type="text" placeholder="Confirm Password" className="border-2" />
                </div>
                <button type="submit" className="bg-green-400 p-1 rounded-md">Login</button>
            </form>
        </div>
    );
}

export default Login;