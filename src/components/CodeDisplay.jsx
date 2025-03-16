import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useToggle } from "../ToggleContext";

export default function CodeDisplay({ code }) {
    const [copied, setCopied] = useState(false);
    const { toggled } = useToggle(); // Get theme state

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative w-full max-w-[600px] p-4 rounded-lg overflow-auto shadow-lg transition-all
                    ${toggled ? "bg-white text-gray-800" : "bg-[#1e1e1e] text-gray-200"}`}>
            <div className="flex justify-between items-center mb-2">
                <span
                    className={`text-md ${toggled ? "text-gray-600" : "text-gray-400"}`}>
                    Gallery Component Code
                </span>
                <button
                    onClick={copyToClipboard}
                    className={`flex items-center gap-1 text-sm transition-all
            ${toggled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"}`}>
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
            <pre
                className={`text-sm overflow-x-auto whitespace-pre-wrap transition-all max-h-[200px]
          ${toggled ? "bg-gray-100 text-gray-800 p-3 rounded-md" : "bg-[#252526] text-gray-300 p-3 rounded-md"}`}>
                <code>{code}</code>
            </pre>
        </div>
    );
}
