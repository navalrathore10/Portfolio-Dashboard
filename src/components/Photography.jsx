import React, { useEffect, useState } from 'react';
import { useToggle } from '../ToggleContext';
import titlewhite from '../../public/img/photographywhite.png';


export default function Photography() {


    const unsplashGallery = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1718606447885-017ba27ddc21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-cat-standing-on-top-of-a-brick-wall-Ik12ZMv0nJM'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1718555177136-f15cfa9ad749?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-red-flower-with-water-droplets-on-it-Xi1IssDGT9w'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1718606447973-d6ccdd579221?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-small-bird-sitting-on-top-of-a-tree-branch-X9nokVmRLqc'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1662696947938-7bc8f11576b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/jal-mahal-with-lights-on-at-night-MvSNnaiK2So'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1662696931196-13b9c10264a0?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-building-with-lights-at-night-8SuuNT0JeJw'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1662696938959-8e1dac3f1bd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-building-with-many-windows-gRGPEBpA8eU'
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1661967103736-e69ba837102a?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-black-background-with-white-lines-hwGzdxAReiI'
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1637662327422-7c462d38ca2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-silhouette-of-a-man-in-front-of-a-sunset-Oaqi0M70KYQ'
        },
        {
            id: 9,
            url: 'https://images.unsplash.com/photo-1718606448174-7a1a854ed9de?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-cat-sitting-in-the-middle-of-a-forest-WAdyVLGLcF0'
        },
        {
            id: 10,
            url: 'https://images.unsplash.com/photo-1661966789012-184cc44eb690?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-large-fire-at-night-dFZYr_gwjIg'
        },
        {
            id: 11,
            url: 'https://images.unsplash.com/photo-1661967105163-dd22c9c02e9d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/a-view-of-a-city-from-a-window-FqD6De0QWZA'
        },
        {
            id: 12,
            url: 'https://images.unsplash.com/photo-1718606448186-435c1941d976?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            downloadLink: 'https://unsplash.com/photos/Wv5W-omFP6s'
        },
    ];

    const { toggled } = useToggle();
    const [selectedImage, setSelectedImage] = useState(null); // Track clicked image

    const handleImageClick = (src) => {
        setSelectedImage(prev => prev === src ? null : src); // Set new image, or null if clicking same image
    };

    // Handle global click to deselect image when clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Close download button if clicked outside of an image
            if (!e.target.closest(".image-container")) {
                setSelectedImage(null); // Deselect any image
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            // Clean up the event listener when the component is unmounted
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const renderImages = (start, end) => {
        return unsplashGallery.slice(start, end).map((image) => (
            <div key={image.id} className="relative image-container">
                <img
                    src={image.url}
                    alt={`Gallery ${image.id}`}
                    className="w-full object-cover rounded-md cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent click from propagating to the document
                        handleImageClick(image.url); // Handle image click
                    }}
                />
                {/* Show download button only if this image is clicked */}
                {selectedImage === image.url && (
                    <div className="absolute border-white top-5 right-1/2 translate-x-[50%]">
                        <a href={image.downloadLink} download className={`${toggled ? '' : ''} bg-lightop20 text-syne rounded-full text-lighte3 px-3 py-1`}>
                            Download
                        </a>
                    </div>
                )}
            </div>
        ));
    };



    return (
        <>
            <div className={`h-min mt-5 rounded-3xl w-full p-3 mb-2 md:mb-0 md:p-11 ${toggled ? 'bg-dark17 text-lighte3' : 'bg-lighte3 text-dark17'}`}>
                <img
                    src={titlewhite}
                    alt=""
                    className={`w-[300px] md:w-[600px] max-w-[600px] py-11 mx-auto ${toggled ? '' : 'invert'}`}
                />

                <div className="content w-full h-min border-black">
                    <div className="grid grid-cols-3 gap-3 md:gap-1 md:gap-5 bg-lighte3 p-1 md:p-3 rounded-xl relative z-10">
                        {/* First Column */}
                        <div className="col-span-3 sm:col-span-1 flex flex-col gap-1 gap-3 md:gap-5">
                            {renderImages(0, 4)} {/* Rendering 1, 2, 3, 11 */}
                        </div>

                        {/* Second Column */}
                        <div className="col-span-3 sm:col-span-1 flex flex-col gap-1 gap-3 md:gap-5">
                            {renderImages(4, 8)} {/* Rendering 4, 5, 6, 10 */}
                        </div>

                        {/* Third Column */}
                        <div className="col-span-3 sm:col-span-1 flex flex-col gap-1 gap-3 md:gap-5">
                            {renderImages(8, 12)} {/* Rendering 7, 8, 9, 12 */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
