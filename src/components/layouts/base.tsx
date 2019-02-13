import * as React from 'react';

interface IBLProps {
    type: string;
    title?: string;
}

interface IBLState { }

class BaseLayout extends React.Component<IBLProps, IBLState> {

    public render() {
        return (
            <section className={`layout ${this.props.type}`}>
                { this.props.title &&
                    <div className="layout-title">{ this.props.title }</div> }
                <div className="content">
                    { this.props.children }
                </div>
            </section>
        )
    }
}

export default BaseLayout;