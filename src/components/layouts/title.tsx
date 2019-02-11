import * as React from 'react';

interface ILayoutProps {
    content: string;
}

interface ILayoutState { }

class Title extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <section className="layout title">
                { this.props.content }
            </section>
        )
    }
}

export default Title;