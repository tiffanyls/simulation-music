import React, { Component } from 'react';
import "../Styles/AllSongsView.css";
import Header from '../Header/Header';
import axios from 'axios';


class AllSongsView extends Component{
    constructor(props){
        super(props);
        this.state ={
            songs: []
        };
        
    }
    componentDidMount(){
        axios.get('/api/getSongs').then(response => {
            console.log(response, "hello")
            this.setState({songs: response.data});
        })
    }
    render(){
        return( <div><div> <Header /></div>
        <div className="all-body">  
            <div><p>This is a descendant selector</p></div>
            <div id="child"><p>This is a child selector</p></div>
            <div></div><h1> This ia a sibiling selector</h1>
            <div className='boxmodel'>This is the content of the box. </div> 
            <a href="http://agirlandherpassport.com">A Girl and Her Passport</a>
            {/* <audio controls><source src='horse.mp3' type="audio/mpeg" /></audio> */}
            <div>{this.state.songs}</div>
        </div>
        </div>
        )}
}

export default AllSongsView;