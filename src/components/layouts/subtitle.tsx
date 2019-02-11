import * as React from 'react';

interface ILayoutProps {
    content: string;
}

interface ILayoutState { }

class Subtitle extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <section className="layout subtitle">
                { this.props.content }
            </section>
        )
    }
}

export { Subtitle as Layout }