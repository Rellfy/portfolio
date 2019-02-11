import * as React from 'react';
import * as input from './input.json';

export class Main extends React.Component {

    private layouts: any[] = [];

    async componentDidMount() {
        let layoutNames = input.layouts.map(layout => layout.type.toLowerCase());
        
        for (let i = 0; i < layoutNames.length; i++) {
            // Import layout module from file
            const layout = (await import(`./layouts/${layoutNames[i]}`)).Layout;
            this.layouts.push(layout);
        }
    }

    render() {
        return (
            <div>
                Main
            </div>
        )
    }
}