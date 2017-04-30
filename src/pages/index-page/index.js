import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {fetch_posts} from '../../actions/ac_posts'
import Post from '../../components/post'

class IndexPage extends Component {
    componentDidMount() {
        this.props.fetch_posts()
    }

    getPosts = () => {
        const post_data = this.props.posts;
        const post_list = [];

        for (let key in post_data) {
            post_data[key].id = key;
            post_list.push(<Post key={key} post={post_data[key]}/>)
        }

        return post_list
    };

    render() {
        return (
            <div>
                {this.getPosts()}
            </div>
        );
    }
}

IndexPage.propTypes = {
    posts: PropTypes.shape({
        title: PropTypes.string,
        createDate: PropTypes.string,
        author: PropTypes.string,
        summary: PropTypes.string
    })
}

const mapStateToProps = ({posts}) => {
    return {posts}
}

export default connect(mapStateToProps, {fetch_posts})(IndexPage);