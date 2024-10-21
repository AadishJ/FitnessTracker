import { React } from "react";
import Card from "../../UI/Card";
import Dumbell from "../../Assets/Dumbell.jpeg";
function Dashboard ()
{
    return (
        <div className="flex items-center justify-center h-5/6">
            <Card thing="Workout" image={Dumbell } />
            <Card thing="Diet" image={Dumbell }/>
            <Card thing="Body" image={Dumbell }/>
        </div>
    );
}

export default Dashboard;
