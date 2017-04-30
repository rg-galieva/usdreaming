import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import s from './_styles.pcss'

const Post = (props) => {
    const {id, title, createDate, author, summary} = props.post;

    return (
        <article className={[s.content, s.post].join(" ")}>
            <div className={s.post_image}>
                <NavLink to={`/post/${id}`}>
                    <div className={s.post_image_bg}></div>
                </NavLink>
            </div>

            <div className={s.post_info}>
                <NavLink to={`/post/${id}`}><h4>{title}</h4></NavLink>
                <time dateTime={createDate} className="is-emph">{createDate} | by {author}</time>

                <div className={[s.desc, "clearfix"].join(" ")}>
                    {/*<img src={require('./img/valley_of_fire.jpg')} alt=""*/}
                         {/*style={{float: "left", marginRight: "1rem"}}/>*/}
                    <p>{summary}</p>

                    <NavLink to={`/post/${id}`} className={s.link_full_post}>continue reading...</NavLink>
                </div>
            </div>
        </article>
    );
}

Post.propTypes = {
    title: PropTypes.string,
    createDate: PropTypes.string,
    author: PropTypes.string,
    summary: PropTypes.string
};

export default Post;

