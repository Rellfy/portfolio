import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import * as History from 'history';

import { Main } from './main';

// Using react router for future features
const history = History.createHashHistory();

class Page {
    
    static get router(): any {
        return <HashRouter basename="/">
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </HashRouter>
    }

    static route(callback?: Function): void {
        // @ts-ignore - The second argument to react-dom.render may cause
        // problem in the latest @types/react and @types/react-dom versions
        ReactDOM.render(Page.router, document.getElementById('root'), callback);
    }

    static renderIndex(): void {
        history.push('/');
        Page.route();
    }
}

console.log('Running');
Page.renderIndex();