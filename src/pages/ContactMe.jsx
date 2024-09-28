import React from 'react';
import { useToggle } from '../ToggleContext';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
// import CodeBlock from '../components/CodeBlock';

const codeExample =
    `<div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
        <CodeBlock code={codeExample} language="javascript" />            
</div>`;

export default function ContactMe() {

    const { toggled } = useToggle();

    return (
        <div className="min-h-screen flex justify-center items-start p-8">
            <div className="inner mx-auto w-full max-w-[700px] flex flex-col justify-start gap-5 border-white">
                {/* <CodeBlock code={codeExample} language="javascript" /> */}
                <div className={`text-xl text-syne font-bold 
                    ${!toggled ? 'bg-dark19 border-dark24 text-lighte3' : 'bg-lightop20 border-white text-dark24'}
                     rounded-lg flex justify-between border  p-3 px-5 shadow-lg border-[2px]`}>
                    <span className=''>Contact Me</span>
                </div>


                <div className={`px-5 py-6 text-syne ${toggled ? 'bg-lightop20 border-white text-dark17' : 'bg-dark19 border-dark24 text-white'}
                     border-2 rounded-lg flex flex-col justify-center items-center shadow-xl`}>
                    <h1 className={`text-3xl font-bold mb-6 ${toggled ? 'text-dark17' : 'text-white'}`}>Let's Get in Touch!</h1>
                    <p className="text-lg mb-8 text-center">Feel free to reach out via any of the platforms below. I'm always excited to connect!</p>

                    <ul className="grid lg:grid-cols-2 gap-5 text-lg w-full">
                        <li className={`flex items-center justify-between gap-4 p-3 border-2 shadow-lg ${toggled?'border-gray-100':'border-dark24'} rounded-md
                             hover:scale-[1.05] hover:bg-prim cursor-pointer overflow-hidden group`}>
                            <FaEnvelope size={24} className={`relative scale-[4] z-10  ${toggled ? 'text-red-300' : 'text-yellow-400'}`} />
                            <a href="mailto:navalrathore10@gmail.com" className={`hover:underline relative z-20 group-hover:text-dark24`}>navalrathore10@gmail.com</a>
                        </li>
                        <li className={`flex items-center justify-between gap-4 p-3 border-2 shadow-lg ${toggled?'border-gray-100':'border-dark24'} rounded-md
                             hover:scale-[1.05] hover:bg-prim cursor-pointer overflow-hidden group`}>
                            <FaPhone size={24} className={`relative scale-[4] z-10 ${toggled ? 'text-blue-500' : 'text-blue-300'}`} />
                            <a href="tel:+916230031442" className={`hover:underline relative z-20 group-hover:text-dark24`}>+91 6230031442</a>
                        </li>
                        <li className={`flex items-center justify-between gap-4 p-3 border-2 shadow-lg ${toggled?'border-gray-100':'border-dark24'} rounded-md
                             hover:scale-[1.05] hover:bg-prim cursor-pointer overflow-hidden group`}>
                            <FaWhatsapp size={24} className={`relative scale-[4] z-10  ${toggled ? 'text-green-400' : 'text-green-500'}`} />
                            <a href="https://wa.me/916230031442" target="_blank" className={`hover:underline relative z-20 group-hover:text-dark24`}>WhatsApp</a>
                        </li>
                        <li className={`flex items-center justify-between gap-4 p-3 border-2 shadow-lg ${toggled?'border-gray-100':'border-dark24'} rounded-md
                             hover:scale-[1.05] hover:bg-prim cursor-pointer overflow-hidden group`}>
                            <FaLinkedin size={24} className={`relative scale-[4] z-10  ${toggled ? 'text-blue-700' : 'text-blue-700'}`} />
                            <a href="https://linkedin.com/in/naval-rathore-972045296" target="_blank" className={`hover:underline relative z-20 group-hover:text-dark24`}>LinkedIn</a>
                        </li>
                        <li className={`flex items-center justify-between gap-4 p-3 border-2 shadow-lg ${toggled?'border-gray-100':'border-dark24'} rounded-md
                             hover:scale-[1.05] hover:bg-prim cursor-pointer overflow-hidden group`}>
                            <FaInstagram size={24} className={`relative scale-[4] z-10  ${toggled ? 'text-pink-400' : 'text-pink-500'}`} />
                            <a href="https://instagram.com/your-instagram" target="_blank" className={`hover:underline relative z-20 group-hover:text-dark24`}>Instagram</a>
                        </li>
                        <li className={`flex items-center justify-between gap-4 p-3 border-2 shadow-lg ${toggled?'border-gray-100':'border-dark24'} rounded-md
                             hover:scale-[1.05] hover:bg-prim cursor-pointer overflow-hidden group`}>
                            <FaGithub size={24} className={`relative scale-[4] z-10 ${toggled ? 'text-orange-300' : 'text-orange-400'}`} />
                            <a href="https://github.com/navalrathore10" target="_blank" className={`hover:underline relative z-20 group-hover:text-dark24`}>Github</a>
                        </li>
                    </ul>

                </div>



            </div>

        </div>
    );
};
