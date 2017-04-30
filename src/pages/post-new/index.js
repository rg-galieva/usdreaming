import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {create_post} from '../../actions/ac_posts'

class PostNew extends Component {
   getField = (field) => {
        return (
            <span className="input_wrap">
                <input {...field.input} type="text" id="title"/>
                <label htmlFor="title"><span>{field.label} {field.meta.touched ? field.meta.error : ''}</span></label>
            </span>
        )
    }

    onSubmit = (value) => {
        console.log("---", value);
       this.props.create_post(value, this.redirect)
    }

    redirect = () => {
       this.props.history.push('/')
    }

    render() {
       const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="title" label="title" component={this.getField}/>
                <Field name="author" label="author" component={this.getField}/>
                <Field name="summary" label="summary" component={this.getField}/>
                <button type="submit" className="btn"><span data-hover="Submit">Submit</span></button>
                <Link to="/" className="btn"><span data-hover="Cancel">Cancel</span></Link>
            </form>
        );
    }
}

PostNew.propTypes = {
    fields: PropTypes.string
};

const validate = (values) => {
    const errors = {}

    if (!values.title) {
        errors.title = "Please, enter a title"
    }

    if (!values.summary) {
        errors.summary = "Please, enter a summary"
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'PostNew'
})(connect(null, {create_post})(PostNew));