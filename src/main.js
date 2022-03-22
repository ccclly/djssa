import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/font/font.css";
import "./assets/font/font2.css";
var app = createApp(App);
app.use(router).mount('#app');
