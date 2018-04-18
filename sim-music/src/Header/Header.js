import React, {Component} from 'react';

import Songster from '../../src/Assets/Songster.png';
import "../Styles/Header.css";

class Header extends Component{
    render(){
        return(
            <header>
                <div><img src={Songster} className='logo' alt='Songster Logo'/></div>
                <h2> all playlists </h2><br /> <h2> this playlist: 5 songs </h2>
            </header>
        )
    }
}

export default Header;

