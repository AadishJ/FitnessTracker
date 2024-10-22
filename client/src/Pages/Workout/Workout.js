import Card from "../../UI/Card";
import Dumbell from "../../Assets/Dumbell-removebg-preview.png";
import Yoga from "../../Assets/Yoga-removebg-preview.png";
import Cardio from "../../Assets/Treadmill-removebg-preview.png";
function Workout ()
{
    return (
        <div>
            <div className="flex justify-center items-center gap-12 m-16">
                <Card thing="Gym" image={ Dumbell } />
                <Card thing="Yoga" image={ Yoga } />
                <Card thing="Cardio" image={ Cardio } />
            </div>
            {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 shadow-md h-72 w-44 z-0"></div> */}
        </div>

    );
}

export default Workout;