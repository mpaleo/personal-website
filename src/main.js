// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Injected function to resolve easter eggs
window.binaryToString = (input) => // eslint-disable-line no-unused-vars
{
    const tokens = input.split(/\s/)
    const answer = []

    for (let i = 0; i < tokens.length; i++)
    {
        answer.push(String.fromCharCode(parseInt(tokens[i], 2)))
    }

    return answer.join('')
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
})
