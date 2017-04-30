import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './_styles.pcss'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/" activeClassName="is_act" exact={true}>Main</NavLink>
            <NavLink to="/post/new" activeClassName="is_act">New post</NavLink>
            <NavLink to="/styles" activeClassName="is_act">Style Guide</NavLink>
            <a href="https://github.com/rg-galieva/rg-react-redux.git" target="_blank">GitHub page</a>
        </nav>
    )
}

export default Nav;