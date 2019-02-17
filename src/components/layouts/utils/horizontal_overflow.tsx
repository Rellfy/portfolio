import * as React from 'react';
import BaseLayout from '../base';

interface IHOProps {
    type: string;
    title?: string;
    elements: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>[];
    scrollWidth: number;
}

interface IHOState {
    pageCount: number;
    currentPage: number;
}

class HorizontalOverflow extends React.Component<IHOProps, IHOState> {

    private static maxPageElements = 6;

    private inFirstPage: boolean;
    private inLastPage: boolean;
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
        const scrollValue = (right ? this.props.scrollWidth : -this.props.scrollWidth) * HorizontalOverflow.maxPageElements;
        this.elementsDiv.scroll({ left: this.elementsDiv.scrollLeft + scrollValue, behavior: 'smooth' })

        if ((this.inLastPage && right) || (this.inFirstPage && !right))
            return;
        
        this.setState({
            currentPage: right ? this.state.currentPage + 1 : this.state.currentPage - 1
        });
    }
    
    public render() {
        this.inFirstPage = this.state.currentPage == 0;
        this.inLastPage = this.state.currentPage == (this.state.pageCount - 1);

        return (
            <BaseLayout type={`horizontal_overflow ${this.props.type}`} title={this.props.title}>
                <div className={'button left' + (this.inFirstPage ? ' disabled' : '')} onClick={() => { this.scrollElements(false) }}>&lt;</div>&nbsp;
                <div className="elements" ref={(ref) => { this.elementsDiv = ref }}>
                    { this.props.elements }
                </div>
                <div className={'button right' + (this.inLastPage ? ' disabled' : '')} onClick={() => { this.scrollElements(true) }}>&gt;</div>
            </BaseLayout>
        );
    }
}

export default HorizontalOverflow;