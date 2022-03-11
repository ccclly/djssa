import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/font/font.css";

var app = createApp(App);
app.use(router).mount('#app');
