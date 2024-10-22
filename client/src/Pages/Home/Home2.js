import dumbell from "../../Assets/Dumbell2-removebg-preview.png"
import { motion } from "framer-motion";
function Home2 ()
{
    return (
        <div className="mt-44 w-80 ml-20">
        <motion.img 
            src={dumbell} 
            alt="" 
            initial={{ opacity: 0, y: 50, rotateZ: 0 }}
            animate={{ opacity: 1, y: 0, rotateZ: 360 }}
            transition={{ duration: 1.5 }}
        />
    </div>
    );
}

export default Home2;