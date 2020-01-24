import React from 'react'
import logo from '../assets/img/forex-icon.png'

const title = 'Forex data';

class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <div className="content">
                <img src={logo} className="logo" alt="logo" />
                <h1>{title}</h1>
           </div>
        </div>
        )
    }
}

export default Header;