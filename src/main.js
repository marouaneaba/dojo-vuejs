import Vue from 'vue'
import App from './app/container/App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import router from "@/router";


new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')

/*


import { createApp } from "vue";
import App from "./app/container/App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css"


createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");

 */