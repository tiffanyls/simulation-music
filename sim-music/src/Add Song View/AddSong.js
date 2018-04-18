import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addSong} from '../../src/ducks/reducer';

class AddSong extends Component {
    constructor(){
    super();
}

render(){
    return(
        <section>
            <h2 id="newsong"> New song </h2>
            <input type="text" placeholder="song"></input>
            <input type="text" placeholder="artist"></input>
            <input type="text" placeholder="album"></input>
        </section>
    )
}
}

export default AddSong;