import React from 'react';
import Suggestion from './Suggestion';
import {getHeaders} from './utils';

class Suggestions extends React.Component {  
    constructor(props) {
        super(props);
        this.state = ({suggestions: []});
    }

    componentDidMount() {
        fetch('/api/suggestions', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ suggestions: data });
        });
    }
    
    render () {
        return (
            <div className="suggestions">
            {
                this.state.suggestions.map(sug => {
                    return <Suggestion key={sug.id} suggestion={sug} />;
                })
            }
            </div>
        )     
    }
}

export default Suggestions;