import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, content }) => {
    return (
        <>
            <section key={i} className="min-h-screen flex flex-col items-center justify-center p-10">
                <motion.h2 
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {title}
                </motion.h2>
                <motion.p         
                    className="text-lg text-gray-700 max-w-2xl text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    {content}
                </motion.p>
            </section>
        </>
    );
};

export default Section;
