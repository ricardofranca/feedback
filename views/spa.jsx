import React from 'react';

export default class SinglePageApplication extends React.Component {
    render() {
        return (
            <div>
                <div id="app">
                    <div id="app__spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>
                </div>
                <script src="/assets/js/bundle.js" />
            </div>
        );
    }
}
