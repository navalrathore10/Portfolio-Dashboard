import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Explorations() {
    return (
        <>
            <div className='w-full h-min 
             bg-[url(/img/blackpaper.png)]
             bg-fixed'>

                {/* Hero section with parallax effect */}
                <section className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center hero-background">
                    <div className="div overflow-hidden">


                        <motion.h1
                            className="text-white text-6xl font-bold"
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            Welcome to Your Smooth Animated Page
                        </motion.h1>
                    </div>
                </section>

                {/* Additional sections with scroll animations */}
                <Section
                    title="About Us"
                    content="We are a team of passionate developers creating smooth user experiences with amazing designs."
                />
                <Section
                    title="Services"
                    content="Our services include web development, UI/UX design, and custom-built web applications tailored to your needs."
                />
                <Section
                    title="Contact"
                    content="Get in touch with us for collaborations and projects. We'd love to hear from you."
                />
            </div>
        </>
    );
}
