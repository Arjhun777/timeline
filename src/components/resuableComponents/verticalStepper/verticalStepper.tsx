import React from 'react';
import { getFullMonth, getYear } from '../../../utils/helper';
import ReactTooltip from 'react-tooltip';

interface VerticalStepperProps {
    data: Array<any>,
    selected: number
}

function VerticalStepper({ data, selected, ...props }: VerticalStepperProps) {
    const arrLen = selected - 2 >= 0 ? 3 : selected - 2 === -1 ? 2 : 1;
    const displayLength = new Array(arrLen).fill([]);
    return (
        <React.Fragment>
            <div className="vertical-stepper-wrapper">
                {displayLength.map((d, i) => {
                    const local = data[selected - i]?.content;
                    return (
                        local && 
                        <div className="content-dot-wrap">
                            {selected !== data?.length ? 
                                <div className="dot-wrapper">
                                    <Dot size={i === 1 ? 16 : 3} />               
                                </div>
                            : ''}
                            <div className="stepper-container">
                                <Stepper data={data[selected - i]}/> 
                                <div className="stepper-content-wrapper">
                                    <div className="stepper-title-wrapper">
                                        <span>{local.title}</span>
                                        <span>{local.sub?.length ? ` : ${local.sub}` : ''}</span>
                                    </div>
                                    <div className="sub-title-wrapper">
                                    {local?.items?.map((item:any) => (
                                        <>
                                            <div data-tip data-for={item.title}>{item.title}</div>
                                            <ReactTooltip className="custom-tool-tip" id={item.title} type='info' effect='solid' place="right" backgroundColor="#4b5d6b" textColor="white">
                                                <div className="tooltip-wrap">
                                                    <div className="title">{item.title}</div>
                                                    <hr />
                                                    <div className="info-wrap">
                                                        <h4>Info :</h4>
                                                        <div className="tooltip-info">{item.info}</div>
                                                    </div>
                                                </div>
                                            </ReactTooltip>
                                        </>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </React.Fragment>
    )
}

function Stepper({ data }:any) {
    return (
        <div className="stepper-wrapper">
            <div className="stepper-year">{getYear(data.year)}</div>
            <h2 className="stepper-month-date">{`${getFullMonth(data.year)} ${getYear(data.year, 'date')}`}</h2>
        </div>
    )
}

function Dot({ size }: any) {
    const dotToMap = new Array(size).fill([]);
    return (
        <>
            {dotToMap.map(() => (
                <div className="dot"></div>
            ))}
        </>
    )
}

export default VerticalStepper;