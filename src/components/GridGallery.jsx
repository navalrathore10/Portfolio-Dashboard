import React, { useState } from 'react';
import { useToggle } from '../ToggleContext';
import { motion } from 'framer-motion';

export default function GridGallery({ images, showCode, setShowCode }) {
    const { toggled } = useToggle();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleCodeDisplay = () => {
        setShowCode(!showCode);
    };

    return (
        <div className={`w-[600px] mt-12 rounded-2xl ${toggled ? 'bg-white' : 'bg-lightop10'} mx-auto p-2 h-min shadow-xl grid gap-2`}>
            <div className={`flex justify-between ComponentTitle text-syne ${toggled ? 'text-darkop80' : 'text-lightop80'} text-xl`}>
                <h2>Animated Grid Gallery</h2>
                <button id='getGalleryCode' onClick={toggleCodeDisplay} className={`border rounded-xl text-xs px-3 
                        ${toggled ? 'bg-lighte3 text-darkop60 border-darkop20' : 'bg-dark17 text-lightop60 border-lightop20'}`}
                >
                    {showCode ? "Hide Code" : "Show Code"}</button>
            </div>
            <div className="InnerGridGallery w-full mx-auto h-[350px]">
                <motion.div layout className="grid grid-cols-12 w-full h-full rounded-xl overflow-hidden mx-auto ">
                    {images.map((image, index) => {
                        const row = Math.floor(index / 3);
                        const col = index % 3;
                        const hoveredRow = hoveredIndex !== null ? Math.floor(hoveredIndex / 3) : null;
                        const hoveredCol = hoveredIndex !== null ? hoveredIndex % 3 : null;

                        let colSpan = 'col-span-4'; // Default size
                        let rowSpan = 'row-span-2';

                        if (hoveredIndex !== null) {
                            if (index === hoveredIndex) {
                                colSpan = "col-span-8"; // Expand hovered image
                                rowSpan = "row-span-2";
                            } else if (row === hoveredRow) {
                                colSpan = "col-span-2"; // Shrink other row items
                            } else if (col === hoveredCol) {
                                colSpan = "col-span-8"; // Expand hovered image
                                rowSpan = "row-span-1"; // Shrink other column items
                            } else {
                                colSpan = "col-span-2"; // Shrink out-of-row & out-of-column items
                                rowSpan = "row-span-1";
                            }
                        }

                        return (
                            <motion.div
                                layout
                                key={image.id}
                                className={`overflow-hidden flex justify-center items-center ${colSpan} ${rowSpan}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={image.url}
                                    alt={`Gallery ${image.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
