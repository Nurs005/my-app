import React, { useEffect, useState } from 'react';
import { useRaiting } from './hooks/raitingHook';

const DIV_STYLE: React.CSSProperties = {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const WichProtocol: React.FC = () => {
    const [display, setDisplay] = useState("none")
    function style(): React.CSSProperties {
        return {
            display: display,
            textAlign: 'center',
            color: 'black'
        }
    }
    const { raiting } = useRaiting()
    useEffect(() => {
        if (raiting == -1) {
            return
        }
        setDisplay("flex")

    }, [raiting])
    return (
        <div style={DIV_STYLE}>
            <p style={style()}>For analys your score we get data from: Aave Protocol.</p>
        </div>
    );
};

export default WichProtocol;