import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { getYear } from '../../../utils/helper';
interface SlideProps {
    data: Array<Object>,
    onChange: Function
    currentRange: number,
    setCurrentRange: Function
}

function Slide({ data, onChange, ...props }: SlideProps) {
    let pairSet:any = useRef([]);
    
    useEffect(() => {
        data.map((item:any, i) => {
            const valueToPush = Math.floor((100/(data.length-1))*i);
            pairSet.current.push(valueToPush);
        });
    }, [data])

    const handleSliderChange = (e:any, value?:number) => {
        const currentValue = value ?? e.target.value;
        const index = pairSet.current.indexOf(parseInt(currentValue));
        if (index >= 0) {
            props.setCurrentRange(parseInt(currentValue));
            onChange(index);
        }
    }
    return (
        <React.Fragment>
            <input className="slider" type="range" min="0" max="100" value={props.currentRange} onChange={handleSliderChange}/>
            <div className="slider-data-wrapper">
                {data.map((item:any, index) => {
                    return (
                    <div className="data-wrap" onClick={() => handleSliderChange(event, pairSet.current[index])}>
                        <div className="slider-item">
                            {getYear(item?.year)}
                        </div>
                        <div className="slider-status">{item.status}</div>
                    </div>
                )})
                }
            </div>
        </React.Fragment>
    )
}

export default Slide;