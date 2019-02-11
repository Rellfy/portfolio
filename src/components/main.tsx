import * as React from 'react';
import * as input from './input.json';

interface IProps { }

interface IState {
    layouts: object[];
}

export class Main extends React.Component<IProps, IState> {

    public state: IState = {
        layouts: []
    };
    
    public componentDidMount(): void {
        this.readLayouts();
    }

    private async readLayouts(): Promise<void> {
        const layouts = [];
        const layoutNames = input.layouts.map(layout => layout.type.toLowerCase());
        
        for (let i = 0; i < layoutNames.length; i++) {
            // Import layout module from file
            const Layout = (await import(`./layouts/${layoutNames[i]}`)).Layout;
            const props = this.inputLayoutContent(layoutNames[i]);
            layouts.push(<Layout {...props} />);
        }

        this.setState({ layouts });
    }
    
    private inputLayoutContent(type: string): object {
        for (let i = 0; i < input.layouts.length; i++) {
            if (input.layouts[i].type == type)
                return input.layouts[i];
        }
    }

    public render() {
        return (
            <div className="container">
                { this.state.layouts }
            </div>
        )
    }
}