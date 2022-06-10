import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import AddComment from './AddComment';

import {getHeaders} from './utils';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model
        }

        this.requeryPost = this.requeryPost.bind(this);
    }

    requeryPost() {
        fetch(`/api/posts/${this.state.post.id}`, {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    post: data
                });
            });
    }

    handlePostComments(post) {
        var res = []
        if (post.comments.length > 0) {
            res.push(<p key={0}><strong>{post.comments[0].user.username}</strong> {post.comments[0].text}</p>);
        }
        if (post.comments.length > 1) {
            res.push(<p key={1}><strong>{post.comments[0].user.username}</strong> {post.comments[1].text}</p>);
            res.push(<button id = {post.id} className="rec_follow_button">View all {post.comments.length} comments</button>);
        }
        return res
    }
    
    render () {
        const post = this.state.post;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div>
                        <LikeButton 
                            postId={post.id} 
                            likeId={post.current_user_like_id}
                            requeryPost={this.requeryPost} />

                        <BookmarkButton 
                            postId={post.id} 
                            bookmarkId={post.current_user_bookmark_id}
                            requeryPost={this.requeryPost} />
                     
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>
     
                        <div class = "comments">
                            <p><strong>{post.user.username}</strong> {post.caption}<a className="rec_follow_button"> more</a></p> 
                            {
                                this.handlePostComments(post)
                            }
                        </div>

                    </div>
                    <p class="time">{post.display_time}</p>
                    <AddComment requeryPost={this.requeryPost} postId={post.id}/>
                </div>
            </section> 
        );     
    }
}

export default Post;