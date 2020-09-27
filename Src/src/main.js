import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDT-zb0EAhlC42NmWwDQBu0brbs2g067dQ",
    authDomain: "todo-list-30a87.firebaseapp.com",
    databaseURL: "https://todo-list-30a87.firebaseio.com",
    projectId: "todo-list-30a87",
    storageBucket: "todo-list-30a87.appspot.com",
    messagingSenderId: "1086977210421",
    appId: "1:1086977210421:web:9378b46b6d99eb0825197c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.mixin({
    data() {
        return {
            firebase: firebase
        }
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')