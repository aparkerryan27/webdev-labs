import React from 'react';

class Profile extends React.Component {  

    render () {
        return (
            <div className="rec">
                <img className="prof_img" src={this.props.user.thumb_url} alt={this.props.user.username}/>
                <h1 id="recs_current_user">{this.props.user.username}</h1> 
            </div>
        );
    }
}

export default Profile;