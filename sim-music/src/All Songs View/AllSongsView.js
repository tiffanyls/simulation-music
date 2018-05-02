import React, { Component } from 'react';
import "../Styles/AllSongsView.css";
import Header from '../Header/Header';
import axios from 'axios';


class AllSongsView extends Component{
    constructor(props){
        super(props);
        this.state ={
            songs: [],
            newObject: {},
            
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        axios.get('/api/getSongs').then(response => {
            console.log(response, "hello")
            this.setState({songs: response.data});
        })}

        handleChange(stateKey, event){
            let newObject = Object.assign({}, this.state.songs[this.state.currentItem])
            newObject[stateKey] = event.target.value;
            let updatedSongs = [...this.state.songs];
            updatedSongs[this.state.currentItem] = newObject;
            this.setState({newObject, songs: updatedSongs })
        }
        saveChange(e){
            axios.put('/api/updateSongs', {updatedInfo: this.state.newObject})}
        
            deleteImage(id){
                axios.delete(`/api/deleteSong/${id.target.value}`).then(res =>{
                    this.props.refreshPage();
                })
            }
    
    render(){
        const {songs} = this.state;
        let allSongs = 
        songs &&
        songs.map((curr,i) =>{
            return( <div>
                <p>Id:{curr.id}</p>
                <p>Song:{curr.song}</p><input value={curr.song} onChange={(event)=> this.handleChange("song", event)}/>
                <p>Artist:{curr.artist}</p><input value={curr.artist} onChange={(event)=> this.handleChange("artist", event)}/>
                <p>Album: {curr.album}</p><input value={curr.album} onChange={(event)=> this.handleChange("album", event)}/>
                <button onClick={()=>this.saveChange(curr.id, i)} className="save">Save</button>
                <button value={curr.id} onClick={this.deleteSong} className="delete">Delete</button> 
                </div>
            )
        })
        return( <div><div> <Header /></div>
        {/* <div className="all-body">  
            <div><p>This is a descendant selector</p></div>
            <div id="child"><p>This is a child selector</p></div>
            <div></div><h1> This ia a sibiling selector</h1>
            <div className='boxmodel'>This is the content of the box. </div> 
            <a href="http://agirlandherpassport.com">A Girl and Her Passport</a> */}
            {/* <audio controls><source src='horse.mp3' type="audio/mpeg" /></audio> */}
            <div>{allSongs}</div>
        </div>
        // </div>
        )}
}

export default AllSongsView;