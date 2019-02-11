import * as React from 'react';

interface ILayoutProps {
    content: string;
}

interface ILayoutState { }

class Subtitle extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <div className="layout subtitle">
                { this.props.content }
            </div>
        )
    }
}

export { Subtitle as Layout }