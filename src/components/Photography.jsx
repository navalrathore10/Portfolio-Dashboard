import React from 'react';
import { useToggle } from '../ToggleContext';
import titlewhite from '../../public/img/photographywhite.png';


export default function Photography() {


    const unsplashGallery = {
        image1: 'https://images.unsplash.com/photo-1718606447885-017ba27ddc21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image2: 'https://images.unsplash.com/photo-1718555177136-f15cfa9ad749?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image3: 'https://images.unsplash.com/photo-1718606448174-7a1a854ed9de?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image4: 'https://images.unsplash.com/photo-1662696931196-13b9c10264a0?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image5: 'https://images.unsplash.com/photo-1662696938959-8e1dac3f1bd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image6: 'https://images.unsplash.com/photo-1661967103736-e69ba837102a?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image7: 'https://images.unsplash.com/photo-1637662327422-7c462d38ca2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image8: 'https://images.unsplash.com/photo-1662696947938-7bc8f11576b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image9: 'https://images.unsplash.com/photo-1718606447973-d6ccdd579221?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image10: 'https://images.unsplash.com/photo-1661967105163-dd22c9c02e9d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image11: 'https://images.unsplash.com/photo-1661966789012-184cc44eb690?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image12: 'https://images.unsplash.com/photo-1718606448186-435c1941d976?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        image13: 'https://images.unsplash.com/photo-1718606448186-435c1941d976?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }

    const { toggled } = useToggle();

    return (
        <>
            <div className={`h-min 
             mt-5 rounded-3xl w-full p-3 md:p-11
             ${toggled ? 'bg-dark17 text-lighte3' : 'bg-lighte3 text-dark17'}`}>
                <img src={titlewhite} alt="" className={` w-[300px] md:w-[600px] max-w-[600px] py-11 mx-auto ${toggled?'':'invert'}`} />

                <div className="content w-full h-min border-black">
                    <div className={`grid grid-cols-3 gap-1 md:gap-5 bg-lighte3 p-1 rounded-xl relative z-10`}>
                        <div className="col-span-3 sm:col-span-1 flex flex-col gap-1 md:gap-5">
                            <img src={unsplashGallery?.image1} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image2} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image3} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image11} alt="" className='w-full object-cover rounded-md' />

                        </div>
                        <div className="col-span-3 sm:col-span-1 flex flex-col gap-1 md:gap-5">
                            <img src={unsplashGallery?.image4} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image5} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image6} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image10} alt="" className='w-full object-cover rounded-md' />
                            <img src="https://github.com/navalrathore10/Picload-Naval-Rathore/blob/master/src/assets/SIGN%202%20WHITE.png?raw=true"
                                alt="" className={`w-full object-cover rounded-md invert`} />

                        </div>
                        <div className="col-span-3 sm:col-span-1 flex flex-col gap-1 md:gap-5">
                            <img src={unsplashGallery?.image7} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image8} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image9} alt="" className='w-full object-cover rounded-md' />
                            <img src={unsplashGallery?.image12} alt="" className='w-full object-cover rounded-md' />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
