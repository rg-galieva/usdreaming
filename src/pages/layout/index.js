import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from '../../components/header'
require('../../assets/styles/common.gcss')
import s from './_styles.pcss'

export default function (props) {
    return (
        <div className={s.wrap}>
            <Header/>

            <main>
                <ReactCSSTransitionGroup
                    transitionName="sliding"
                    transitionEnterTimeout={350}
                    transitionLeave={false}
                    component="section">
                    {props.children}
                </ReactCSSTransitionGroup>
            </main>

            <footer className={s.footer}>
                <nav>
                    <a href="">Links</a>
                    <a href="">Links</a>
                    <a href="">Links</a>
                </nav>
            </footer>
        </div>
    );
}

