import React, { createContext, useState } from 'react';

import regeneratorRuntime from "regenerator-runtime";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {

    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');

    return (
        <StoreContext.Provider value={{
            city,
            setCity,
            location, 
            setLocation,
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
