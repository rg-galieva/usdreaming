import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import s from './_styles.pcss'

const Post = (props) => {
    const {id, title, createDate, author, summary} = props.post;

    return (
        <article className={[s.content, s.post].join(" ")}>
            <div className={s.post_image}>
                <Link to={`/post/${id}`}>
                    <div className={s.post_image_bg}></div>
                </Link>
            </div>

            <div className={s.post_info}>
                <Link to={`/post/${id}`}><h4>{title}</h4></Link>
                <time dateTime={createDate} className="is-emph">{createDate} | by {author}</time>

                <div className={[s.desc, "clearfix"].join(" ")}>
                    {/*<img src={require('./img/valley_of_fire.jpg')} alt=""*/}
                         {/*style={{float: "left", marginRight: "1rem"}}/>*/}
                    <p>{summary}</p>

                    <Link to={`/post/${id}`} className={s.link_full_post}>continue reading...</Link>
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

