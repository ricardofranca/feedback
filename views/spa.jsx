import React from 'react';

export default class SinglePageApplication extends React.Component {
    render() {
        return (
            <div>
                <div id="app"></div>
                <script src="/assets/js/bundle.js" />
            </div>
        );
    }
}
