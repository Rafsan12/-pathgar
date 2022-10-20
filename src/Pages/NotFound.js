import React from 'react';
import { motion } from "framer-motion";
import bookNotFond from "../img/book-not-found.jpg"
const NotFound = () => {
    return (
        <div>
            <motion.div className="carousel">
                <motion.div
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 30, 60, 240, 360],
                    }}
                >
                    {bookNotFond.map((image) => {
                        return (
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 2 }}
                                className="item"
                                transition={{ duration: 3 }}
                                key={image}
                            >
                                <img src={image} alt="image" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;