import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addSong} from '../../src/ducks/reducer';
import Header from '../Header/Header';
import '../Styles/AddSong.css';

class AddSong extends Component {
    constructor(){
    super();
}

render(){
    return( <div>
        <Header />
        <div>
        <section>
            <h2 id="newsong"> New song </h2>
            <input type="text" placeholder="song"></input>
            <input type="text" placeholder="artist"></input>
            <input type="text" placeholder="album"></input>
        </section>
        </div>
        </div>
    )
}
}

export default AddSong;