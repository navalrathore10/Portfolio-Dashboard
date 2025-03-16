import React, { useState } from "react";
import GridGallery from "../components/GridGallery";
import CodeDisplay from "../components/CodeDisplay.jsx";
import { motion } from "framer-motion";
import galleryCode from "../assets/codeblocks/gridGalleryCode"; // Import code snippet

export default function Explorations() {

    const [showCode, setShowCode] = useState(false);
    const toggleCodeDisplay = () => {
        setShowCode(!showCode);
    };

    // const toggleCodeDisplay = () => {
    //     setShowCode(!showCode);
    // };

    const unsplashGallery = [
        { id: 1, url: "https://images.unsplash.com/photo-1718606447885-017ba27ddc21?q=80&w=1887&auto=format&fit=crop" },
        { id: 2, url: "https://images.unsplash.com/photo-1718555177136-f15cfa9ad749?q=80&w=1770&auto=format&fit=crop" },
        { id: 3, url: "https://images.unsplash.com/photo-1718606447973-d6ccdd579221?q=80&w=1887&auto=format&fit=crop" },
        { id: 4, url: "https://images.unsplash.com/photo-1662696947938-7bc8f11576b9?q=80&w=1770&auto=format&fit=crop" },
        { id: 5, url: "https://images.unsplash.com/photo-1662696931196-13b9c10264a0?q=80&w=1774&auto=format&fit=crop" },
        { id: 6, url: "https://images.unsplash.com/photo-1662696938959-8e1dac3f1bd0?q=80&w=1887&auto=format&fit=crop" },
        { id: 7, url: "https://images.unsplash.com/photo-1661967103736-e69ba837102a?q=80&w=1914&auto=format&fit=crop" },
        { id: 8, url: "https://images.unsplash.com/photo-1637662327422-7c462d38ca2e?q=80&w=1887&auto=format&fit=crop" },
        { id: 9, url: "https://images.unsplash.com/photo-1718606448174-7a1a854ed9de?q=80&w=1887&auto=format&fit=crop" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
            className="pb-[100px] flex justify-center"
        >
            <div className="borde w-[600px] h-min flex flex-col justify-end items-center gap-2">
                {/* Gallery Component */}
                <div className="gal relative h-min w-min">
                    <GridGallery images={unsplashGallery} showCode={showCode} setShowCode={setShowCode} />

                    {/* Button to Expand Code Display */}
                    {/* <button
                        id="getGalleryCode"
                        onClick={toggleCodeDisplay}
                        className="absolute -right-[120px] top-[20px] w-[100px] border rounded-xl text-xs px-3 py-2 bg-gray-800 text-white mt-4">
                        {showCode ? "Hide Code" : "Show Code"}
                    </button> */}
                </div>

                {/* Animated Code Display */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: showCode ? "auto" : 0, opacity: showCode ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden w-full">
                    <CodeDisplay code={galleryCode} />
                </motion.div>
            </div>
        </motion.div>
    );
}
