import React, { useState } from 'react';
import { useToggle } from '../ToggleContext';

export default function Designing() {

    const { toggled } = useToggle();
    const [carColor, setCarColor] = useState('');

    return (
        <>
            <div className={`pb-5 md:pb-11 mt-5 rounded-3xl w-full ${toggled ? 'bg-dark24' :
                carColor == 'blue' ? 'bg-blue-200' :
                    carColor == 'green' ? 'bg-green-200' :
                        carColor == 'pink' ? 'bg-red-200' :
                            'bg-orange-200'}`}>
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
                        className={`
                            ${carColor == 'blue' ? 'hue-rotate-[155deg]' :
                                carColor == 'green' ? 'hue-rotate-[105deg]' :
                                    carColor == 'pink' ? 'hue-rotate-[295deg]' :
                                        'hue-rotate-[0deg]'
                            }
                        
                        ${toggled ? '' : ''} `} />
                </div>
                <div className="bnts flex gap-2 justify-center mt-5">
                    <button className=' w-5 h-5 md:w-10 md:h-10 border-2 border-white rounded-full bg-[#13c6ff] 155 hover:w-14  duration-300 transition-ease-in'
                        onClick={() => { setCarColor('blue') }}
                    ></button>
                    <button className=' w-5 h-5 md:w-10 md:h-10 border-2 border-white rounded-full bg-[#00dc75] 105 hover:w-14  duration-300 transition-ease-in'
                        onClick={() => { setCarColor('green') }}
                    ></button>
                    <button className=' w-5 h-5 md:w-10 md:h-10 border-2 border-white rounded-full bg-[#ff6fb6] 295 hover:w-14  duration-300 transition-ease-in'
                        onClick={() => { setCarColor('pink') }}
                    ></button>
                    <button className=' w-5 h-5 md:w-10 md:h-10 border-2 border-white rounded-full bg-[#ff990d] 0 hover:w-14  duration-300 transition-ease-in'
                        onClick={() => { setCarColor('orange') }}
                    ></button>
                </div>
            </div>

            <div className={`text-center w-full mt-5 text-syne ${toggled ? 'text-dark24' : 'text-lighte3'}`}> More Coming Soon</div>
        </>
    );
}
