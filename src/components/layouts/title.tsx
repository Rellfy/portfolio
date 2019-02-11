import * as React from 'react';

interface ILayoutProps {
    content: string;
}

interface ILayoutState { }

class Title extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        console.log('rendering title w props ', this.props)
        return (
            <section className="layout title">
                { this.props.content }
            </section>
        )
    }
}

export { Title as Layout }