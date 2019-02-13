import * as React from 'react';

import HorizontalOverflow from './utils/horizontal_overflow';

interface IRCProps {
    content: {
        title: string;
        ratings: IRating[]
    }
}

interface IRCState { }

export interface IRating {
    name: string;
    score: number;
}

class RatingContainer extends React.Component<IRCProps, IRCState> {

    private maxScore: number = 5;

    private getRatingElement(rating: IRating) {
        const scores: React.ReactElement<any>[] = [];
        
        for (let i = 0; i < this.maxScore; i++) {
            const scored = i < (rating.score - 1);
            scores.push(<div key={`score-${i}`} className={'score' + (scored ? ' scored' : '')}></div>)
        }

        return (
            <div className="rating">
                <div className="name">{ rating.name }</div>
                <div className="score_points">
                    { scores }
                </div>
                <div className="score_number">

                </div>
            </div>
        );
    }

    public render() {
        const elements = this.props.content.ratings.map((rating) => {
            return this.getRatingElement(rating);
        });

        return (
            <HorizontalOverflow title={this.props.content.title} elements={elements} />
        );
    }
}

export default RatingContainer;