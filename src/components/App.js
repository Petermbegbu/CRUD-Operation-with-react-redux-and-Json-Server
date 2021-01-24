import React from "react";
import {Router, Route} from "react-router-dom";

import history from "../history";
import StreamList from "./streamList/StreamList";
import StreamShow from "./streamShow/StreamShow";
import StreamEdit from "./streamEdit/StreamEdit";
import StreamDelete from "./streamDelete/StreamDelete";
import StreamCreate from "./streamCreate/StreamCreate";
import Header from "./header/Header";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/show/:id" component={StreamShow} />
                    <Route path="/streams/delete/:id" component={StreamDelete} />
                </div>
            </Router>
        </div>
    )
}

export default App; 