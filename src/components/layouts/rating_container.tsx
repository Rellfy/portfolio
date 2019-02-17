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
            const scored = i <= (rating.score - 1);
            scores.push(<div key={`score-${i}`} className={'score' + (!scored ? ' empty' : '')}></div>)
        }

        return (
            <div className="rating">
                <div className="name">{ rating.name }</div>
                <div className="score_points">
                    { scores }
                </div>
                <div className="score_number">
                    <span className="out_of">{ rating.score }</span>
                    <span className="separator">/</span>
                    <span className="total">{ this.maxScore }</span>
                </div>
            </div>
        );
    }

    public render() {
        const elements = this.props.content.ratings.map((rating) => {
            return this.getRatingElement(rating);
        });
        
        return (        
            <HorizontalOverflow type="rating_container"
                                title={this.props.content.title}
                                scrollWidth={window.innerWidth * 0.15}
                                elements={elements} />
        );
    }
}

export default RatingContainer;