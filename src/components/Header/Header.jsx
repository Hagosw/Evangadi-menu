import { Component } from 'react';

import headerStyles from '../Header/header.module.css';

class Header extends Component {
    render() {
        return (

            <div className={headerStyles.title}>

                <h1>Evangadi Menu</h1>

            </div>
        );
    }
}

export default Header;

