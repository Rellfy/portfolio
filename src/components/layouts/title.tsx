import * as React from 'react';
import BaseLayout from './base';

interface ILayoutProps {
    content: string;
}

interface ILayoutState { }

class Title extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <BaseLayout type="title">
                { this.props.content }
            </BaseLayout>
        )
    }
}

export default Title;