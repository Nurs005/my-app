'use client'
import React, { useEffect, useState } from 'react';
import styles from './css/circle.module.css'
import { useRaiting } from './hooks/raitingHook';



const CircleSVG: React.FC = () => {
    const [dashArray, setDashArray] = useState<string>('');
    const { raiting } = useRaiting()
    const [displayStyle, setDisplay] = useState("none");

    function style() {
        return {
            display: displayStyle
        }
    }

    useEffect(() => {
        if (raiting == -1) {
            return
        }
        const ConvertToProsentage = (valueFor: number): number => {
            return (raiting / 5.0) * 100;
        }
        console.log(raiting)
        var procent = ConvertToProsentage(raiting)
        var circle = Math.PI * 45 * 2;
        var dashLegth = (procent / 100) * circle
        setDashArray(`${dashLegth} ${circle}`);
        setDisplay("flex")
    }, [raiting])


    return (
        <div className={styles.circleContainer}>
            <svg viewBox="0 0 100 100">
                <circle className={styles.circleBgUnfilled} cx="50" cy="50" r="45" style={style()}></circle>
                <circle className={styles.circleBg} cx="50" cy="50" r="45" style={style()} strokeDasharray={dashArray}></circle>
                <text className={styles.value} x="50" y="55" style={style()} >{raiting}</text>
            </svg>
        </div>
    );
};

export default CircleSVG;