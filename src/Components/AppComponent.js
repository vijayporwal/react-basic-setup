import React from 'react';
import fetch from 'isomorphic-fetch';

/** Importing css for the components */
import {MainContainer} from './CSS/AppComponentCss';

class AppComponent extends React.Component {
    render () {
        return (<MainContainer>Welcome - Basic React Application with Testing framework(Mocha)</MainContainer>);
    }
}

export default AppComponent;
