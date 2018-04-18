import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AllSongsView from './All Songs View/AllSongsView';

export default (
    <Switch>
        <Route exact path ='/' component={AllSongsView}/>
    </Switch>
);