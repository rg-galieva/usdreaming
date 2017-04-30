import React from 'react'
import history from './history'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from './pages/layout'
import IndexPage from './pages/index-page'
import PostNew from './pages/post-new'
import PostFull from './pages/post-full'
import StyleGuide from './pages/style-guide'
import NoMatch from './pages/no-match'

export default (
    <BrowserRouter>
        <Layout>
            <Switch location={location} key={location.pathname}>
                <Route path="/post/new" component={PostNew}/>
                <Route path="/post/:id" component={PostFull}/>
                <Route path="/styles" component={StyleGuide}/>
                <Route path="/" component={IndexPage} exact/>
                <Route component={NoMatch}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)