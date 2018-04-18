import React from 'react';
import LoadingIcon from '../content/loading.gif';

class Loading extends React.Component {
    render() {
        return (
            <div className="loading-img-container">
                <img src={LoadingIcon} className="loading-image" alt="loading" />
            </div>
        );
    }
}

export default Loading;