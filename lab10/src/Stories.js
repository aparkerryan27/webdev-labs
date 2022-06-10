import React from 'react';
import {getHeaders} from './utils';

class Stories extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {stories: []};
    }

    componentDidMount() {
        fetch('/api/stories', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(stories => {
            this.setState({ stories: this.stories2JSX(stories) });
        });
    }

    stories2JSX(stories) {
        var s = []
        if (stories.length >= 5) {
            for (var i = 0; i < 5; i++) {
                const story = stories[i]
                s.push(
                    <div key={i} className="story">
                        <img src={story.user.thumb_url} className="story_img" alt={story.user.username} />
                        <p>{story.user.username}</p>
                    </div>
                )
            }
        }
        return s;
    }
    render () {
        return (
            <header className="stories"> 
                {this.state.stories}
            </header>  
        );
    }
}

export default Stories;