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
            <input type="text" placeholder="song" onChange={(event) => this.handleChange('song', event)}></input>
            <input type="text" placeholder="artist" onChange={(event) => this.handleChange('artist', event)}></input>
            <input type="text" placeholder="album" onChange={(event) => this.handleChange('album', event)}></input>
            <button> Add Song </button>
        </section>
        <div className='video'>
        <video width="320" height="240" autoPlay>
        <source src={require('./342125205.mp4')} type="video/mp4" /> 
            </video>
        </div>
        </div>
        </div>
    )
}
}

export default AddSong;