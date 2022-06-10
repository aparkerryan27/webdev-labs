import React from 'react';
import {getHeaders} from './utils';

class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggleBookmark(ev) {
        if (this.props.bookmarkId) {
            console.log('un bookmark');
            this.bookmark();
        } else {
            console.log('bookmark');
            this.unbookmark();
        }
    }
    

    bookmark() {
        fetch("/api/posts/bookmarks/", {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
            "post_id": this.props.postId
        })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.setState({bookmarkId: data.id});
            }
        });
        this.props.requeryPost();
    }

    unbookmark() {
        fetch("/api/posts/bookmarks/" + this.props.bookmarkId, {
        method: "DELETE",
        headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            if (!data.message) {
                this.setState({ bookmarkId: null });
            }            
        });
        this.props.requeryPost();
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookmark" 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggleBookmark}>
                <i className={bookmarkId ? 'fa-bookmark fas' : ' fa-bookmark far'}></i>                        
            </button>
        ) 
    }
}

export default BookmarkButton;