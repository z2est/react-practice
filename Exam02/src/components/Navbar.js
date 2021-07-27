import React from 'react';
import "./Navbar.scss"


class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <div className="home">
                    <li>7Connected</li>
                </div>
                <div className="menu">
                    <li>Menu1</li>
                    <li>Menu2</li>
                    <li>Menu3</li>
                </div>
            </div>
        );
    }

}

export default Navbar;