import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import {NavLink} from 'react-router-dom'
import Nav from '../nav'
import s from './_styles.pcss'
const icons = require('../../assets/svg/icons.svg');

class Header extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (ev) => {
        if (window.scrollY > 50) {
            findDOMNode(this.refs.head).classList.add('is_sticky');
        } else {
            findDOMNode(this.refs.head).classList.remove('is_sticky');
        }
    }

    render() {
        return (
            <header ref="head" className={s.header}>
                <section className="clearfix">
                    <NavLink to="/" className={s.logo}>
                        <svg viewBox="0 0 54.21 9.89">
                            <use xlinkHref={`${icons}#logo`}></use>
                        </svg>
                    </NavLink>
                    <Nav />
                </section>
            </header>
        )
    }
}

export default Header