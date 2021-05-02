import React, { useEffect, useState } from 'react';
import { getTimeline } from '../../../services/commonApi';
import Slider from '../../resuableComponents/slider/slider';
import VerticalStepper from '../../resuableComponents/verticalStepper/verticalStepper';

interface MainContentProps {
    selected: string
}

function MainContent({ selected, ...props }: MainContentProps) {
    const isTimeline = selected === 'timeline';
    const [currentFocus, setCurrentFocus] = useState(0);
    const [currentRange, setCurrentRange] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        getTimeline().then((res:any) => {
            setData(res);
        })
    }, [])
    return (
        <React.Fragment>
            {isTimeline ? 
                    <div className="main-content-wrapper">
                        <h4 className="title">Timeline</h4>
                        <div className="timeline-head">Select focus year</div>
                        <Slider data={data} onChange={setCurrentFocus} currentRange={currentRange} setCurrentRange={setCurrentRange} />
                        <VerticalStepper data={data} selected={currentFocus}/>
                    </div>
                : ''
            }
        </React.Fragment>
    )
}


export default MainContent;