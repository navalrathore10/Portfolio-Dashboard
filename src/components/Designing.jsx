import React from 'react';
import { useToggle } from '../ToggleContext';

export default function Designing() {

    const { toggled } = useToggle();

    return (
        <>
            <div className={`pb-5 md:pb-11 mt-5 rounded-3xl w-full ${toggled ? 'bg-dark24' : 'bg-orange-200'}`}>
                <div className={`text-andy heading flex w-full justify-center items-center py-14 text-5xl lg:text-8xl ${toggled ? 'text-lighte3' : 'text-dark24'}`}>
                    Designing
                </div>
                <div className="logo mx-auto w-[50px] pb-11">
                    <img src="https://github.com/navalrathore10/Picload-Naval-Rathore/blob/master/src/assets/Untitled-11.png?raw=true"
                        alt="" width={'100%'} className={`${toggled ? 'invert' : ''} `} />
                </div>
                <div className="car-image px-11 w-full h-min">
                    <img src="https://github.com/navalrathore10/Picload-Naval-Rathore/blob/master/src/assets/NRZ-2000.png?raw=true"
                        alt="" width={'100%'}
                        className={`{hover:hue-rotate-0 hue-rotate-[155deg]} ${toggled ? '' : ''} `} />
                </div>
            </div>

            <div className={`text-center w-full mt-5 text-syne ${toggled?'text-dark24':'text-lighte3'}`}> More Coming Soon</div>
        </>
    );
}
