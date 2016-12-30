import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import Marionette from 'backbone.marionette';

import ReverseText from '../react/reverseText';

const Form = Marionette.View.extend({

    template: require('../templates/form.pug'),

    ui: {
        result: '#result',
        input: 'input',
    },

    events: {
        'click button': 'onButtonClick'
    },

    onButtonClick() {
        const text = this.getUI('input').val();

        render(
            <ReverseText
                text={text}
            />,
            this.getUI('result')[0]
        );
    },

    onAttach() {
        render(
            <ReverseText />,
            this.getUI('result')[0]
        );
    },

    onBeforeDetach() {
        unmountComponentAtNode(this.getUI('result')[0]);
    }
});

export default Form;
