import React from 'react';

interface SideNavProps {
    selected: string,
    setSelected: Function
}
const SIDENAV = [
    {name: 'Overview', id: 'overview'}, 
    {name: 'Document Family', id: 'documentFamily'}, 
    {name: 'Timeline', id: 'timeline'}, 
    {name: 'Documents', id: 'document'}, 
    {name: 'Alerts', id: 'alerts'}
];
function SideNav({selected, setSelected, ...props}: SideNavProps) {

    return (
        <React.Fragment>
            <div className="sidenav-wrapper">
                <section>
                    <div className="title-wrapper">
                        <h6>Relationship</h6>
                        <h4>National Bank</h4>
                    </div>
                    <div className="sidenav-content-wrapper">
                        {SIDENAV.map((data) => {
                            const classForSelected = data.id === selected ? 'selected-tab' : '';
                            return (
                            <div className={`title sidenav-title ${classForSelected}`} onClick={() => setSelected(data.id)}>{data.name}</div>
                        )})}
                    </div>
                </section>
                <hr />
                <section>
                <div className="sidenav-content-wrapper">
                    <h5>solutions</h5>
                    <div className="title">Account Research & Renegotiation</div>
                    <div className="title">Billing Accuracy</div>
                </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default SideNav;