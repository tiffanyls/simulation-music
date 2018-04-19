import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AllSongsView from './All Songs View/AllSongsView';
import AddSong from './Add Song View/AddSong';

export default (
    <Switch>
        <Route exact path ='/' component={AllSongsView}/>
        <Route path='/addsong' component={AddSong}/>
        {/* <Route path='/song/:id' component={AllSongsView}/> */}
    </Switch>
);