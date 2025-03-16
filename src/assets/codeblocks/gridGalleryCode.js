const galleryCode = `// GridGallery Component
import React, { useState } from 'react';
import { useToggle } from '../ToggleContext';
import { motion } from 'framer-motion';

export default function GridGallery({ images }) {
    const { toggled } = useToggle();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={\`w-[600px] mt-12 rounded-2xl \${toggled ? 'bg-white' : 'bg-lightop10'} mx-auto p-2 h-min shadow-xl\`}>
            <div className={\`ComponentTitle text-syne \${toggled ? 'text-darkop80' : 'text-lightop80'} text-2xl mb-2\`}>
                Animated Grid Gallery
            </div>
            <div className="InnerGridGallery w-full mx-auto h-[350px]">
                <motion.div layout className="grid grid-cols-12 w-full h-full rounded-xl overflow-hidden mx-auto">
                    {images.map((image, index) => {
                        const row = Math.floor(index / 3);
                        const col = index % 3;
                        const hoveredRow = hoveredIndex !== null ? Math.floor(hoveredIndex / 3) : null;
                        const hoveredCol = hoveredIndex !== null ? hoveredIndex % 3 : null;

                        let colSpan = 'col-span-4';
                        let rowSpan = 'row-span-2';

                        if (hoveredIndex !== null) {
                            if (index === hoveredIndex) {
                                colSpan = "col-span-8";
                                rowSpan = "row-span-2";
                            } else if (row === hoveredRow) {
                                colSpan = "col-span-2";
                            } else if (col === hoveredCol) {
                                colSpan = "col-span-8";
                                rowSpan = "row-span-1";
                            } else {
                                colSpan = "col-span-2";
                                rowSpan = "row-span-1";
                            }
                        }

                        return (
                            <motion.div
                                layout
                                key={image.id}
                                className={\`overflow-hidden flex justify-center items-center \${colSpan} \${rowSpan}\`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={image.url}
                                    alt={\`Gallery \${image.id}\`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}`;

export default galleryCode;
