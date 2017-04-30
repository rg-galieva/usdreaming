import React from 'react'
import history from './history'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from './pages/layout'
import IndexPage from './pages/index-page'
import StyleGuide from './pages/style-guide'
import NoMatch from './pages/no-match'

export default (
    <BrowserRouter>
        <Layout>
            <Switch location={location} key={location.pathname}>
                <Route path="/" component={IndexPage} exact/>
                <Route path="/styles" component={StyleGuide}/>
                <Route component={NoMatch}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)