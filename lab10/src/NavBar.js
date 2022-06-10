import React from 'react';
import {getHeaders} from './utils';

class NavBar extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {username: props.username};
        // constructor logic
        console.log('NavBar component created');
    }
    render () {
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1>
                <ul>   
                    <li><a href="/api">API Docs</a></li>
                    <li><span>{this.state.username}</span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul> 
            </nav>       
        );
    }
}

export default NavBar;