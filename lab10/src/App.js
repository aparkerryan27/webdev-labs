import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';
import {getHeaders} from './utils';

class App extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {profile: {username: "blank", thumb_url: ""}};
        this.getUser = this.getUser.bind(this);
    }

    componentDidMount(){
        this.getUser();
    }
    
    getUser() {
        fetch("/api/profile/", {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(profile => {
            this.setState({ profile: profile });
        });
    }

    render () {
        return (
            <div>
                <NavBar title="Photo App" username={this.state.username} />
                <aside>
                    <Profile user={this.state.profile}/>
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>
      
            </div>
        );
    }
}

export default App;