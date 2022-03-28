import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/font/font.css";
import "./assets/font/font2.css";
import Element from 'element-plus';
import 'element-plus/dist/index.css'
var app = createApp(App);
app.use(Element)
app.use(router).mount('#app');
