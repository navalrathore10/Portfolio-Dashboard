// CodeBlock.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, dark, synthwave84, coldarkCold, coldarkDark, nightOwl, atomDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your style
import { useToggle } from '../ToggleContext';
import { jsx } from 'react/jsx-runtime';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CodeBlock = ({ code, language = "jsx" }) => {



    const { toggled } = useToggle();

    return (
        <div className={`${toggled ? 'bg-white' : 'bg-dark24'} rounded-xl shadow-lg p-2`}>
            <SyntaxHighlighter
                language={'jsx'}
                style={!toggled ? atomDark : materialLight} // You can change to different styles like 'prism', 'atomDark', etc.
                showLineNumbers={true}
                wrapLongLines={true}
                className={`rounded-md shadow-[inset_0px_0px_10px] ${toggled ? 'shadow-darkop10' : 'shadow-transparent'}`}
                PreTag={({ children }) => (
                    <pre className={`text-sm p-2 ${toggled?'':'bg-dark17'} rounded-md shadow-md`}>
                        {children}
                    </pre>
                )}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
