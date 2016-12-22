import React, { Component } from 'react';

export default class ReverseText extends Component {

    reverse(text) {
        return text.split('').reverse().join('');
    }

    render() {
        const {
            text = ''
        } = this.props;

        return (
            <div>
                {this.reverse(text)}
            </div>
        );
    }

}
