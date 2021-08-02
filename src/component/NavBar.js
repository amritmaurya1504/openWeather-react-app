import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
const NavBar = () => {
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    <h3>openWeather</h3>
                    <h5>Jehanabad, Bihar 29.2&deg;C</h5>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search location" />
                    <div className="serchIcon">
                     <SearchIcon />
                    </div>
                </div>
            </div>
            <div className="miniNav">
                <a>Now</a>
                <a>Daily</a>
            </div>
            <hr />
        </div>
    )
}

export default NavBar
