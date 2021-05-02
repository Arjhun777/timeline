import React from 'react';

const ITEMS = [
    { url: 'src/assets/images/search.svg', name: 'search' },
    { url: 'src/assets/images/home.svg', name: 'home' },
] 
function MainNav() {
    
    return (
        <React.Fragment>
            <div className="main-nav-wrapper">
                {ITEMS.map((item) => (
                    <>
                        <img src={item.url} alt={item.name} />
                    </>
                ))}
            </div>
        </React.Fragment>
    )
}

export default MainNav;