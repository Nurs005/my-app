import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface RaitingState {
    raiting: number;
    setRaiting: Dispatch<SetStateAction<number>>;
}
const MyContext = createContext<RaitingState | number>(-1);

const MyContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {

    const [raiting, setRaiting] = useState<number>(-1);
    const value: RaitingState = {
        raiting,
        setRaiting,
    };

    return (
        <MyContext.Provider value={value}>{children}</MyContext.Provider>
    )
}

export default MyContextProvider

export const useRaiting = () => {
    const context = useContext(MyContext);
    if (typeof context === 'number') {
        throw new Error("useRaiting must be used within a MyContextProvider");
    }
    return context
}