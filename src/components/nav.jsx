import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll'; // {{ edit_1 }}

function Nav() {  
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 1-second delay
        return () => clearTimeout(timer);
    }, []);
    
    const scrollToSection = (section) => { // {{ edit_2 }}
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -70, // Adjust this value based on your navbar height
        });
    };

    return (
        <motion.nav
        className="bg-rose-100 rounded-md bg-gradient-to-br from-rose-100 to-rose-200 border-rose-100"
        initial={{ y: '-5vw', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: loading ? 1 : 0, type: 'spring', stiffness: 50 }}
    >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
                <h1 className="text-2xl mr-1 italic">Nafisa</h1>
                <h1 className="text-2xl ">Anzum</h1>
            </div>
            <ul className="flex flex-row space-x-8 font-medium">
                <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
                <li><Link to="/" onClick={() => scrollToSection('timeline')}>Projects</Link></li>
                <li><Link to="/" onClick={() => scrollToSection('skills')}>Skils</Link></li>
            </ul>
        </div>
    </motion.nav>
    );
}

export default Nav;
