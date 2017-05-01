import React, {Component} from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import s from './_styles.pcss'

class Alert extends Component {
    componentWillMount() {
        this.alert = document.createElement('div');
        this.alert.className = s.alert;
        document.body.appendChild(this.alert);
        this.showAlert()
    }

    componentDidMount() {
        window.setTimeout(this.removeAlert, 10000)
    }

    componentWillUpdate() {
        this.showAlert()
    }

    componentWillUnmount() {
        this.removeAlert()
    }


    showAlert = () => {
        render(<div>{this.props.children}</div>, this.alert);
    }

    removeAlert = () => {
        unmountComponentAtNode(this.alert);
        document.body.removeChild(this.alert)
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Alert;