import * as React from 'react';
import BaseLayout from '../base';

interface IHOProps {
    title?: string;
    elements: React.ReactElement<any>[];
}

interface IHOState {
    pages: number;
    currentPage: number;
}

class HorizontalOverflow extends React.Component<IHOProps, IHOState> {

    public state: IHOState = {
        pages: 0,
        currentPage: 0
    }

    public componentDidMount() {
        this.setState({
            pages: this.props.elements.length,
            currentPage: 0
        });

        this.setPages();
    }
    
    private setPages() {
        // read elements & structure them in a grid
    }

    public render() {
        const inFirstPage = this.state.currentPage == 0;
        const inLastPage = this.state.currentPage == (this.state.pages - 1);

        const elements = this.props.elements;
        /*const elementStyle = {
            width: this.props.grid.x,
            height: this.props.grid.y
        }; 

        for (let i = 0; i < elements.length; i++) {
            const Element = elements[i];
            elements[i] = <Element style={elementStyle} />
        }*/

        return (
            <BaseLayout className="horizontal_overflow" title={this.props.title}>
                <div className={'button left' + (inFirstPage ? ' disabled' : '')}></div>
                <div className="elements">
                    { elements }
                </div>
                <div className={'button right' + (inLastPage ? ' disabled' : '')}></div>
            </BaseLayout>
        );
    }
}

export default HorizontalOverflow;