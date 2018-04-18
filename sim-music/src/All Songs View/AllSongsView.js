import React, { Component } from 'react';
import "../Styles/AllSongsView.css";
import Header from '../Header/Header';
import axios from 'axios';


class AllSongsView extends Component{
    render(){
        return( <div><div> <Header /></div>
        <div className="all-body">  
        </div></div>
        )}
}

export default AllSongsView;