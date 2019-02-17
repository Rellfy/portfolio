import * as React from 'react';
import BaseLayout from './base';

interface ILayoutProps {
    content: {
        title: string;
        text: string;
    };
}

interface ILayoutState { }

class Subtitle extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <BaseLayout type="text_container" title={this.props.content.title}>
                <div className="text" dangerouslySetInnerHTML={{__html: this.props.content.text}}></div>
            </BaseLayout>
        )
    }
}

export default Subtitle;