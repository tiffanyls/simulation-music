import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { addSong } from '../ducks/reducer';
import Header from '../Header/Header';
import '../Styles/AddSong.css';

class AddSong extends Component {
    constructor(){
    super();
    this.state={
        song:'',
        artist: '',
        album:''
    }

    this.handleChange=this.handleChange.bind(this);
    this.submitForm=this.submitForm.bind(this);
}

handleChange(e){
    this.setState({
        song: e.target.value,
        artist: e.target.value,
        album: e.target.value
    });
}
submitForm(e){
    axios.post('/api/addSong', {song: this.state.song, artist: this.state.artist, album: this.state.album})
    .then(response =>{
    })
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
            <button onClick={this.submitForm}> Add Song </button>
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
const mapStateToProps = state => state;
export default connect(mapStateToProps, {AddSong});