import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

export const useToggle = () => useContext(ToggleContext);

export const ToggleProvider = ({ children }) => {
    const [toggled, setToggled] = useState(false);

    const darkModeHandler = () => setToggled(!toggled);

    return (
        <ToggleContext.Provider value={{ toggled, darkModeHandler }}>
            {children}
        </ToggleContext.Provider>
    );
};
