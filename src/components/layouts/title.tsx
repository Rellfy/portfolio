import * as React from 'react';

interface ILayoutProps {
    content: string;
}

interface ILayoutState { }

class Title extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <div className="layout title">
                { this.props.content }
            </div>
        )
    }
}

export { Title as Layout }