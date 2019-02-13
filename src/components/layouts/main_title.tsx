import * as React from 'react';

import Title from './title';
import Subtitle from './subtitle';
import BaseLayout from './base';

interface ILayoutProps {
    content: {
        title: string;
        subtitle: string;
    };      
}

interface ILayoutState { }

class MainTitle extends React.Component<ILayoutProps, ILayoutState> {

    render() {
        return (
            <BaseLayout type="main_title">
                <Title content={this.props.content.title} />
                <Subtitle content={this.props.content.subtitle} />
            </BaseLayout>
        )
    }
}

export default MainTitle;