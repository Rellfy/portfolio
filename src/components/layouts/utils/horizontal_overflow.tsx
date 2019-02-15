import * as React from 'react';
import BaseLayout from '../base';

interface IHOProps {
    title?: string;
    elements: React.ReactElement<any>[];
}

interface IHOState {
    pageCount: number;
    currentPage: number;
}

class HorizontalOverflow extends React.Component<IHOProps, IHOState> {

    private static maxPageElements = 6;

    private firstElement: HTMLDivElement;
    private elementsDiv: HTMLDivElement;

    public state: IHOState = {
        pageCount: 1,
        currentPage: 0
    }

    public componentDidMount() {
        this.setState({
            pageCount: Math.ceil(this.props.elements.length / HorizontalOverflow.maxPageElements),
            currentPage: 0
        });
    }

    private scrollElements(right: boolean) {
        this.elementsDiv.scrollTo();
    }
    
    public render() {
        const inFirstPage = this.state.currentPage == 0;
        const inLastPage = this.state.currentPage == (this.state.pageCount - 1);

        const elements = this.props.elements.map((Element: any, i) => {
            if (i != 0)
                return;
            
            return <Element ref={(ref: any) => { this.firstElement = ref }} />
        });

        return (
            <BaseLayout type="horizontal_overflow" title={this.props.title}>
                <div className={'button left' + (inFirstPage ? ' disabled' : '')} onClick={() => { this.scrollElements(false) }}>&lt;</div>&nbsp;
                <div className="elements" ref={(ref) => { this.elementsDiv = ref }}>
                    { elements }
                </div>
                <div className={'button right' + (inLastPage ? ' disabled' : '')} onClick={() => { this.scrollElements(true) }}>&gt;</div>
            </BaseLayout>
        );
    }
}

export default HorizontalOverflow;