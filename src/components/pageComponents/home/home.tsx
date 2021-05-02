import React, { useState } from "react"
import MainNav from '../mainnav/mainnav';
import Sidenav from '../sidenav/sidenav';
import MainContent from '../maincontent/maincontent';

function HomeComponent() {
    const [selected, setSelected] = useState('timeline');

    return (
        <React.Fragment>
            <div className="home-wrapper">
                <MainNav />
                <Sidenav selected={selected} setSelected={setSelected}/>
                <MainContent selected={selected}/>
            </div>
        </React.Fragment>
    )
}

export default HomeComponent;