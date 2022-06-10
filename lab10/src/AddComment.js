import React from 'react';
import {getHeaders} from './utils';

class AddComment extends React.Component {  
    constructor(props) {
        super(props);
        this.postComment = this.postComment.bind(this);
        this.state = ({inputValue: ""});
    }

    postComment() {     
        const comment = this.state.inputValue;
        if (comment.length != "") {

            //make comment
            fetch("/api/comments", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify({
                    "post_id": this.props.postId,
                    "text": comment
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    this.props.requeryPost();
                } else {
                    console.log("comment failed to post!");
                }
            });
    
        } else {
            console.log("text box is empty, not posting");
        }
    }

    render() {
        return (
            <div className="addcomment">
                <i className="far fa-face-smile"></i>
                <input type="text" onChange={e => this.setState({inputValue: (e.target.value)}) } className ="text_entry" placeholder = "Add a comment..." />
                <button className="post_button send-right" onClick={this.postComment}>POST</button>
            </div> 
        )
    }
}

export default AddComment;