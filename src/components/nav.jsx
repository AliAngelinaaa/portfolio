import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function Nav() {  
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 1-second delay
        return () => clearTimeout(timer);
    }, []);
    return (
        <motion.nav
        className="bg-rose-100 rounded-md border-2 border-rose-100"
        initial={{ y: '-5vw', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: loading ? 1 : 0, type: 'spring', stiffness: 50 }}
    >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <h1 className="flex items-center space-x-3">Nafisa Anzum</h1>
            <ul className="flex flex-row space-x-8 font-medium">
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </motion.nav>
    );
  }
  
  export default Nav;
  