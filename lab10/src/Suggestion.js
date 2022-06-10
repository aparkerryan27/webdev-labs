import React from 'react';
import {getHeaders} from './utils';

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = ({followId: null});
        this.toggleFollow = this.toggleFollow.bind(this);
        this.followUser = this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
    }

    toggleFollow() {
        if (this.state.followId) {
            this.unfollowUser();
        } else {
            this.followUser();
        }
    }

    followUser() {

        fetch("/api/following/", {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                "user_id": this.props.suggestion.id
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.setState({ followId: data.id });
            }
        });
    }


    unfollowUser() {
        fetch("/api/following/" + this.state.followId, {
            method: "DELETE",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ followId: null });
        });

    }
 
    render () {
        return (
            <div className="rec">
                    <img className="prof_img" src={this.props.suggestion.thumb_url} alt={this.props.suggestion.username} />
                    <div className="rec_body_text">
                        <p><strong>{this.props.suggestion.username}</strong></p>
                        <p>suggested for you</p>
                    </div>
                    <div>
                        <button
                            className= {this.state.followId ? 'rec_follow_button selected' : 'rec_follow_button unselected'}
                            aria-label="Follow"
                            aria-checked={this.state.followId ? true : false}
                            data-user-id={this.props.suggestion.id}
                            onClick={this.toggleFollow}>follow</button>
                    </div>
                </div>
        )     
    }
}

export default Suggestion;