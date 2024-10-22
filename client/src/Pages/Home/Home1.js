import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


function Home1 ()
{
    const words = [ "Better.", "Healthier.", "Simpler.", "Easier." ];
    const [ currentWordIndex, setCurrentWordIndex ] = useState( 0 );

    useEffect( () =>
    {
        const interval = setInterval( () =>
        {
            setCurrentWordIndex( ( prevIndex ) => ( prevIndex + 1 ) % words.length );
        }, 2000 ); // Change word every 3 seconds

        return () => clearInterval( interval );
    }, [ words.length ] );

    const TextAnimation = () =>
    {
        return (
            <motion.div
                key={ currentWordIndex }
                initial={ { opacity: 0, y: 25 } }    // Start slightly below
                animate={ { opacity: 1, y: 0 } }     // Animate to original position
                exit={ { opacity: 0, y: -20 } }      // Exit with slight upward motion
                transition={ {
                    opacity: { duration: 0.8, ease: "easeInOut" }, // Smooth fade-out
                    y: { duration: 0.8, ease: "easeInOut" },       // Smooth upward motion
                } }
                exitTransition={ {
                    opacity: { duration: 0.8, ease: "easeInOut" }, // Smooth fade-out
                    y: { duration: 0.8, ease: "easeInOut" },       // Smooth upward motion
                } }
            >
                { words[ currentWordIndex ] }
            </motion.div>

        );
    }

    return (
        <div>
            <div className="text-white mx-40 mt-40 text-7xl">
                Making your Life
            </div>
            <div className="text-textPurple mx-40 mt-10 text-7xl">
                { TextAnimation() }
            </div>
        </div>
    );
}

export default Home1;
