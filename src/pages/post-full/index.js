import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {get_post} from '../../actions/ac_posts'
import s from './_styles.pcss'

class PostFull extends Component {
    componentWillMount() {
        this.props.get_post(this.props.match.params.id);
    }

    render() {
        const {id, title, createDate, author, summary} = this.props.post;

        return (
            <article className={[s.content, s.post].join(" ")}>
                 <div className={s.post_image}>
                    <div className={s.post_image_bg}></div>
                </div>

                <div className={s.post_info}>
                    <Link to={`/post/${id}`}><h4>{title}</h4></Link>
                    <time dateTime={createDate} className="is-emph">{createDate} | by {author}</time>

                    <div className={[s.desc, "clearfix"].join(" ")}>
                        {/*<img src={require('./img/valley_of_fire.jpg')} alt=""*/}
                        {/*style={{float: "left", marginRight: "1rem"}}/>*/}
                        <p>{summary}</p>
                    </div>
                    <button onClick={(ev) => this.props.history.goBack()} className="btn"><span data-hover="Go Back">Go Back</span></button>
                </div>
            </article>
        )
    }
}

PostFull.propTypes = {
    title: PropTypes.string,
    createDate: PropTypes.string,
    author: PropTypes.string,
    summary: PropTypes.string
};

const mapStateToProps = ({post}) => {
    return {post}
}

export default connect(mapStateToProps, {get_post})(PostFull);

