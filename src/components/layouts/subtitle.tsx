import * as React from 'react';
import BaseLayout from './base';

interface ILayoutProps {
    content: string;
}

interface ILayoutState { }

class Subtitle extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <BaseLayout type="subtitle">
                { this.props.content }
            </BaseLayout>
        )
    }
}

export default Subtitle;