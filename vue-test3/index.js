import Vue from 'vue'
import App from './src/App'
import Router from './src/router'

new Vue({
    el: '#app',
    template: `<App/>`,
    router: Router,
    components: {
        App
    }
})
