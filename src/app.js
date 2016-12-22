import Marionette from 'backbone.marionette';

import Form from './marionette/form';

const App = Marionette.View.extend({

    el: '#root',

    template: require('./templates/app.pug'),

    regions: {
        main: '#main'
    },

    onRender() {
        this.showChildView('main', new Form());
    }
})

const app = new App();
app.render();
setTimeout(() => app.render(), 1000)
